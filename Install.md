# ⚙️ Geminex Installation Guide

**Geminex** is a sleek, open-source AI chat platform with powerful multi-model support. This guide walks you through the installation process for various platforms, including local development and Docker deployment.

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

To secure your app from CSRF attacks, generate a strong secret using one of the following:

#### 🟢 Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### 🔹 OpenSSL
```bash
openssl rand -hex 32
```

#### 🐍 Python
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

Paste the generated value under `CSRF_SECRET` in `.env.local`.

---

## 🖥️ Local Installation

### macOS / Linux / Windows

```bash
# Clone the Geminex repo
git clone https://github.com/Abhranil2004/Geminex.git
cd Geminex

# Install dependencies
npm install

# Run the app
npm run dev
```

Once up and running, Geminex will be available at: [http://localhost:3000](http://localhost:3000) 🚀

---

## 🚀 Deploy to Vercel

The easiest way to deploy **Geminex** is via [Vercel](https://vercel.com):

1. Push your code to GitHub (or any Git provider)  
2. Import the repo into Vercel  
3. Add your environment variables  
4. Deploy with one click!

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🏗️ Self-Hosted Production

Prefer running Geminex yourself?

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## ⚙️ Configuration Options

Fine-tune Geminex by editing:

- `app/lib/config.ts`: Control models, limits, UI settings  
- `.env.local`: Store your API keys and secrets

---

## 💪 Troubleshooting

### Common Issues & Fixes

1. **🔗 Supabase Connection Errors**
   - Double-check your Supabase URL and keys
   - Ensure IP permissions are correctly configured in Supabase

2. **🤖 AI Model Not Responding**
   - Verify API keys for OpenAI or Mistral
   - Confirm selected models are available under your current plan

3. **🐳 Docker Container Crashing**
   - Use `docker logs <container_id>` to debug
   - Ensure all required environment variables are defined

---

## 🤝 Community & Support

- 🐞 [GitHub Issues](https://github.com/Abhranil2004/Geminex/issues): Report bugs and feature requests
- 💬 [GitHub Discussions](https://github.com/Abhranil2004/Geminex/discussions/1): Ask questions and share insights

---

## 📜 License

Licensed under the **Apache License 2.0** — use it, remix it, improve it!

---

Start building smarter conversations with **Geminex**. ✨



