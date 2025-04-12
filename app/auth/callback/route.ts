import { MODEL_DEFAULT } from "@/app/lib/config"
import { createClient } from "@/app/lib/supabase/server"
import { createGuestServerClient } from "@/app/lib/supabase/server-guest"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get("code")
    const next = searchParams.get("next") ?? "/"

    if (!code) {
      return NextResponse.redirect(
        `${origin}/auth/error?message=${encodeURIComponent("Missing authentication code")}`
      )
    }

    const supabase = await createClient()
    const supabaseAdmin = await createGuestServerClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Supabase OAuth error:", error)
      return NextResponse.redirect(
        `${origin}/auth/error?message=${encodeURIComponent(error.message)}`
      )
    }

    // Upsert user data into the database
    if (data?.user && data.user.email) {
      const { error: upsertError } = await supabaseAdmin.from("users").upsert(
        {
          id: data.user.id,
          email: data.user.email,
          premium: false,
          message_count: 0,
          created_at: new Date().toISOString(),
          preferred_model: MODEL_DEFAULT,
        },
        { onConflict: "id" }
      )

      if (upsertError) {
        console.error("Error upserting user:", upsertError)
        // Allow redirect to continue even if upsert fails
      }
    }

    // Handle redirect based on environment
    const forwardedHost = request.headers.get("x-forwarded-host")
    const isLocal = process.env.NODE_ENV === "development"

    const redirectURL = isLocal
      ? `${origin}${next}`
      : forwardedHost
        ? `https://${forwardedHost}${next}`
        : `${origin}${next}`

    return NextResponse.redirect(redirectURL)

  } catch (err) {
    console.error("OAuth redirect failed:", err)
    return NextResponse.redirect(
      `/auth/error?message=${encodeURIComponent("Internal server error during OAuth redirect")}`
    )
  }
}
