"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconRobot, IconNews, IconLayoutGrid } from "@tabler/icons-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  const highlights = [
    {
      title: "AI Portfolio Assistant",
      description: "Interact with my custom RAG-based AI to learn about my skills and experience.",
      link: "/ai-assistant",
      icon: <IconRobot className="w-8 h-8" />
    },
    {
      title: "AI News Automation",
      description: "Automated news aggregation pipeline powered by LLMs and n8n workflows.",
      link: "/ai-news",
      icon: <IconNews className="w-8 h-8" />
    },
    {
      title: "CarbonBridge Platform",
      description: "A comprehensive solution aiming for sustainability and carbon footprint reduction.",
      link: "/projects",
      icon: <IconLayoutGrid className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

      {/* Interactive Background */}
      <BackgroundRippleEffect className="-top-20 opacity-50" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Hi, I'm{" "}
            <EncryptedText
              text="Adeesha Perera"
              encryptedClassName="text-cyan-500"
              revealedClassName="text-cyan-400"
              revealDelayMs={800}
            />

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl"
          >
            I build <span className="text-cyan-400 font-semibold">AI-powered systems</span> using RAG, automation, and modern web tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link href="/ai-assistant" className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-colors shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Chat with my AI
            </Link>
            <Link href="/projects" className="px-8 py-3 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white transition-colors bg-white/5 backdrop-blur-sm">
              View Projects
            </Link>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <div className="pt-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-neutral-200">Highlights</h2>
          <HoverEffect items={highlights} />
        </div>

      </div>
    </div>
  );
}
