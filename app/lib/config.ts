import Claude from "@/components/icons/claude"
import Gemini from "@/components/icons/gemini"
import Grok from "@/components/icons/grok"
import Mistral from "@/components/icons/mistral"
import OpenAI from "@/components/icons/openai"
import DeepSeek from "@/components/icons/deepseek" // ✅ DeepSeek icon import

import { deepseek } from "@ai-sdk/deepseek"
import { mistral } from "@ai-sdk/mistral"
import { openai } from "@ai-sdk/openai"

import {
  BookOpenText,
  Brain,
  ChalkboardTeacher,
  ChatTeardropText,
  Code,
  CookingPot,
  Heartbeat,
  Lightbulb,
  MagnifyingGlass,
  Notepad,
  PaintBrush,
  PenNib,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

// ✅ Constants
export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 100
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 10

export const MESSAGE_MAX_LENGTH = 4000
export const SYSTEM_PROMPT_DEFAULT = "You are a helpful assistant."

export type Model = {
  id: string
  name: string
  provider: string
  available?: boolean
  api_sdk?: any
  icon?: React.ComponentType<any>
  features?: {
    id: string
    enabled: boolean
  }[]
}

export const MODELS_NOT_AVAILABLE: Model[] = [
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "claude",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
  {
    id: "claude-3.7-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "claude",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
  {
    id: "grok-2",
    name: "Grok 2",
    provider: "grok",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "gemini",
    available: false,
    api_sdk: false,
    features: [{ id: "file-upload", enabled: true }],
  },
]

export const MODELS: Model[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "openai",
    features: [{ id: "file-upload", enabled: true }],
    api_sdk: openai("gpt-4o"),
    icon: OpenAI,
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    provider: "openai",
    features: [{ id: "file-upload", enabled: true }],
    api_sdk: openai("gpt-4o-mini"),
  },
  {
    id: "pixtral-large-latest",
    name: "Pixtral Large",
    provider: "mistral",
    features: [{ id: "file-upload", enabled: true }],
    api_sdk: mistral("pixtral-large-latest"),
  },
  {
    id: "mistral-large-latest",
    name: "Mistral Large",
    provider: "mistral",
    features: [{ id: "file-upload", enabled: false }],
    api_sdk: mistral("mistral-large-latest"),
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "deepseek",
    features: [{ id: "file-upload", enabled: false }],
    available: true,
    api_sdk: deepseek("deepseek-r1"),
    icon: DeepSeek, // ✅ Correct icon set
  },
]

export const MODELS_OPTIONS = [
  ...MODELS.map((model) => ({
    ...model,
    available: true,
  })),
  ...MODELS_NOT_AVAILABLE,
] as Model[]

export type Provider = {
  id: string
  name: string
  available: boolean
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const PROVIDERS_NOT_AVAILABLE: Provider[] = [
  {
    id: "gemini",
    name: "Gemini",
    icon: Gemini,
    available: false,
  },
  {
    id: "claude",
    name: "Claude",
    icon: Claude,
    available: false,
  },
  {
    id: "grok",
    name: "Grok",
    icon: Grok,
    available: false,
  },
]

export const PROVIDERS: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    icon: OpenAI,
    available: true,
  },
  {
    id: "mistral",
    name: "Mistral",
    icon: Mistral,
    available: true,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: DeepSeek, // ✅ DeepSeek icon fixed
    available: true,
  },
]

export const PROVIDERS_OPTIONS = [
  ...PROVIDERS,
  ...PROVIDERS_NOT_AVAILABLE,
] as Provider[]

export const MODEL_DEFAULT = "pixtral-large-latest"
export const APP_NAME = "Geminex"
export const APP_DOMAIN = "https://geminex.vercel.app/"
export const APP_DESCRIPTION =
  "Geminex is a free, open-source AI chat app with multi-model support."

export const PERSONAS = [
  {
    id: "companion",
    label: "Companion",
    prompt: `You're a thoughtful friend...`, // Trimmed
    icon: ChatTeardropText,
  },
  {
    id: "researcher",
    label: "Researcher",
    prompt: `You're a seasoned research analyst...`,
    icon: MagnifyingGlass,
  },
  {
    id: "teacher",
    label: "Teacher",
    prompt: `You're an experienced educator...`,
    icon: ChalkboardTeacher,
  },
  {
    id: "software-engineer",
    label: "Software Engineer",
    prompt: `You're a pragmatic senior developer...`,
    icon: Code,
  },
  {
    id: "creative-writer",
    label: "Creative Writer",
    prompt: `You're a thoughtful writer...`,
    icon: PenNib,
  },
  {
    id: "fitness-coach",
    label: "Fitness Coach",
    prompt: `You're a knowledgeable fitness guide...`,
    icon: Heartbeat,
  },
  {
    id: "culinary-guide",
    label: "Culinary Guide",
    prompt: `You're a passionate food enthusiast...`,
    icon: CookingPot,
  },
]

export const SUGGESTIONS = [
  {
    label: "Summary",
    highlight: "Summarize",
    prompt: `Summarize`,
    items: [
      "Summarize the French Revolution",
      "Summarize the plot of Inception",
      "Summarize World War II in 5 sentences",
      "Summarize the benefits of meditation",
    ],
    icon: Notepad,
  },
  {
    label: "Code",
    highlight: "Help me",
    prompt: `Help me`,
    items: [
      "Help me write a function to reverse a string in JavaScript",
      "Help me create a responsive navbar in HTML/CSS",
      "Help me write a SQL query to find duplicate emails",
      "Help me convert this Python function to JavaScript",
    ],
    icon: Code,
  },
  {
    label: "Design",
    highlight: "Design",
    prompt: `Design`,
    items: [
      "Design a color palette for a tech blog",
      "Design a UX checklist for mobile apps",
      "Design 5 great font pairings for a landing page",
      "Design better CTAs with useful tips",
    ],
    icon: PaintBrush,
  },
  {
    label: "Research",
    highlight: "Research",
    prompt: `Research`,
    items: [
      "Research the pros and cons of remote work",
      "Research the differences between Apple Vision Pro and Meta Quest",
      "Research best practices for password security",
      "Research the latest trends in renewable energy",
    ],
    icon: MagnifyingGlass,
  },
]
