import { createClient } from "@/app/lib/supabase/server";
import { createGuestServerClient } from "@/app/lib/supabase/server-guest";

/**
 * Validates the user's identity.
 * @param userId - The ID of the user.
 * @param isAuthenticated - Whether the user is authenticated.
 * @returns The appropriate Supabase client instance.
 */
export async function validateUserIdentity(
  userId: string,
  isAuthenticated: boolean
) {
  const supabase = isAuthenticated
    ? await createClient()
    : await createGuestServerClient();

  if (isAuthenticated) {
    const {
      data: authData,
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error("Auth error:", authError.message);
      throw new Error("Failed to retrieve authenticated user.");
    }

    const authenticatedUserId = authData?.user?.id;
    if (!authenticatedUserId || authenticatedUserId !== userId) {
      throw new Error("User ID does not match authenticated user.");
    }
  } else {
    const {
      data: userRecord,
      error: userError,
    } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .eq("anonymous", true)
      .maybeSingle();

    if (userError) {
      console.error("Guest user fetch error:", userError.message);
      throw new Error("Failed to validate guest user.");
    }

    if (!userRecord) {
      throw new Error("Invalid or missing guest user.");
    }
  }

  return supabase;
}
