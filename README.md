# Adeesha Perera — Portfolio

A minimalist, single-page developer portfolio built with Next.js, featuring an AI-powered assistant, interactive design elements, and dark/light theme support.

## ✨ Features

- **Single-Page Design** — Clean, scrollable layout with all key sections in one page
- **Dark/Light Theme** — System-aware toggle with smooth transitions
- **AI Portfolio Assistant** — Interactive RAG-based chatbot that answers questions about projects and skills (`/ai-assistant`)
- **AI News Automation** — Automated content pipeline demo powered by LLMs and n8n (`/ai-news`)
- **Human/Agent Mode** — Toggle between rich UI and raw markdown view
- **Easter Egg** — Click the profile image for a twinkling starfield effect
- **Lofi Music Player** — Ambient background music with volume control
- **Tech Stack Marquee** — Infinite-scroll display with expandable categorized grid
- **Collapsible Experience Items** — Expandable cards with gradient fade-out
- **Glass Island Navbar** — Fixed bottom navigation with social links and QR code
- **Onboarding Tooltip** — Animated callout that highlights the AI Assistant for new visitors
- **QR Code Modal** — Shareable portfolio link

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Animations** | [Framer Motion](https://motion.dev) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Icons** | [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons) |
| **QR Code** | [qrcode.react](https://github.com/zpao/qrcode.react) |
| **Font** | [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts) |
| **Language** | TypeScript |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/adeesha-dev/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── ai-assistant/     # AI chatbot page
│   ├── ai-news/          # Automated news feed page
│   ├── data/
│   │   └── content.ts    # Agent mode markdown content
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout (DM Sans + ThemeProvider)
│   ├── page.tsx           # Main single-page portfolio
│   └── providers.tsx      # Theme provider wrapper
├── components/
│   ├── ExperienceItem.tsx # Collapsible experience card
│   ├── TechStack.tsx      # Marquee + grid tech display
│   └── ThemeToggle.tsx    # Dark/light mode switch
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Customization

### Personal Information
Edit `src/app/page.tsx` to update:
- Name, bio, and phonetic pronunciation
- Social links (GitHub, LinkedIn, X/Twitter, email)
- Experience entries and education
- Featured projects
- Library/reading list

### Profile Photo
Replace `public/me.png` with your own photo.

### Lofi Music
Add `public/lofi.mp3` for the background music player.

### Agent Mode Content
Edit `src/app/data/content.ts` to update the markdown content shown in agent mode.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
