# ⚙️ Geminex Installation Guide

Geminex is a sleek, open-source AI chat platform with powerful multi-model support. This guide walks you through the installation process for various platforms, including local development and Docker deployment.

![Geminex Screenshot](https://github.com/Abhranil2004/Geminex/blob/general/public/Geminex.png)

---

## 🔧 Prerequisites

Make sure you have the following installed before getting started:

- Node.js 18.x or later
- npm or yarn
- Git
- Supabase account (for authentication and storage)
- API keys for AI models (OpenAI, Mistral, etc.)

---

## 🌐 Environment Setup

Create a `.env.local` file at the root of the project and populate it with your credentials:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE=your_supabase_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Mistral
MISTRAL_API_KEY=your_mistral_api_key

# CSRF Protection
CSRF_SECRET=your_csrf_secret_key

# Optional: Set your production URL
# NEXT_PUBLIC_VERCEL_URL=your_production_url
```

### 🔐 Generating a CSRF Secret

To secure your app from CSRF attacks, you need a strong secret. Generate one using any of the following:

#### 🟢 Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 🔵 OpenSSL
```bash
openssl rand -hex 32
```

#### 🐍 Python
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

Add the generated string to your `.env.local` under `CSRF_SECRET`.

---

## 🖥️ Local Installation

### macOS / Linux
```bash
# Clone the Geminex repo
git clone https://github.com/ibelick/zola.git
cd zola

# Install dependencies
npm install

# Run the app
npm run dev
```

### 🪟 Windows
```bash
# Clone the Geminex repo
git clone https://github.com/ibelick/zola.git
cd zola

# Install dependencies
npm install

# Start development server
npm run dev
```

Once up and running, Geminex will be available at: [http://localhost:3000](http://localhost:3000) 🚀

---

## 🚀 Deploy to Vercel

The easiest way to deploy **Geminex** is via [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import the project into Vercel
3. Configure your environment variables
4. Deploy with a click!

Or use the CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🏗️ Self-Hosted Production

If you prefer self-hosting:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## ⚙️ Configuration Options

You can fine-tune Geminex by editing the following files:

- `app/lib/config.ts`: Configure models, daily limits, UI behavior
- `.env.local`: API keys and secrets

---

## 🛠️ Troubleshooting

### Common Issues & Fixes

1. **🔗 Supabase Connection Errors**
   - Double-check Supabase URL and API keys
   - Ensure IP access rules in Supabase settings

2. **🤖 Model Not Responding**
   - Check API keys for OpenAI or Mistral
   - Make sure the models in config are available in your plan

3. **🐳 Docker Container Crashing**
   - Inspect with `docker logs <container_id>`
   - Verify that all required environment variables are defined

---

## 🤝 Community & Support

- 🐞 [GitHub Issues](https://github.com/Abhranil2004/Geminex/issues): Report bugs and feature requests
- 💬 [GitHub Discussions](https://github.com/Abhranil2004/Geminex/discussions/1): Ask questions and share insights

---

## 📜 License

Licensed under the **Apache License 2.0** — use it, remix it, improve it!

---

Start building smarter conversations with **Geminex**. ✨

