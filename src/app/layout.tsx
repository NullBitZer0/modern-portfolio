import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://adeeshaperera.me";
const siteName = "Adeesha Perera — ML & AI Engineer";
const siteDescription =
  "Portfolio of Adeesha Nishal Perera — ML & AI Engineer and data science undergraduate building intelligent systems with RAG, NLP, MLOps, AWS, and modern web technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Adeesha Perera",
  },
  description: siteDescription,
  keywords: [
    "Adeesha Perera",
    "Adeesha Nishal Perera",
    "AI Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "RAG",
    "LLM",
    "LangChain",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Docker",
    "Homelab",
    "Self-Hosted",
    "n8n Automation",
    "Machine Learning",
    "Sri Lanka",
  ],
  authors: [{ name: "Adeesha Nishal Perera", url: siteUrl }],
  creator: "Adeesha Nishal Perera",
  publisher: "Adeesha Nishal Perera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Adeesha Perera",
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@adeesha_dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
