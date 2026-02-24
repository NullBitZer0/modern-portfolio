"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Bot, User, QrCode, X, Music, Pause, Mail, ArrowRight, Server } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "@/components/ExperienceItem";
import { TechStack } from "@/components/TechStack";
import { useState, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { QRCodeSVG } from "qrcode.react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

import { getMarkdownContent } from "./data/content";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-LK", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const markdownContent = getMarkdownContent(time);

  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const [lofiVolume, setLofiVolume] = useState(1);

  // Onboarding tooltip: show every visit
  useEffect(() => {
    const showTimer = setTimeout(() => setShowOnboarding(true), 3000);
    const hideTimer = setTimeout(() => setShowOnboarding(false), 9000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const dismissOnboarding = () => {
    setShowOnboarding(false);
  };
  const lofiRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (lofiRef.current) {
      lofiRef.current.volume = lofiVolume;
    }
  }, [lofiVolume]);

  useEffect(() => {
    return () => {
      if (lofiRef.current) {
        lofiRef.current.pause();
        lofiRef.current = null;
      }
    };
  }, []);

  const toggleLofi = () => {
    if (!lofiRef.current) {
      lofiRef.current = new Audio("/lofi.mp3");
      lofiRef.current.loop = true;
      lofiRef.current.volume = lofiVolume;
    }

    if (isLofiPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current.play().catch(e => console.error("Lofi play failed:", e));
    }
    setIsLofiPlaying(!isLofiPlaying);
  };

  const starPositions = useMemo(() => {
    return [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>
      {/* Easter Egg Effects */}
      <AnimatePresence>
        {showEasterEgg && (
          <>
            {/* Bluish Aura Edge Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] pointer-events-none shadow-[inset_0_0_150px_rgba(6,182,212,0.5)] dark:shadow-[inset_0_0_150px_rgba(6,182,212,0.4)] transition-opacity duration-1000"
            />
            {/* Twinkling Stars Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            >
              {starPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-[2px] bg-cyan-500 dark:bg-white rounded-full shadow-[0_0_4px_rgba(6,182,212,0.8)] dark:shadow-[0_0_3px_white]"
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: pos.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pos.delay,
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        {mode === "agent" ? (
          /* Agent Mode - Markdown View */
          <motion.main
            key="agent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0"
          >
            <pre
              className="w-full whitespace-pre-wrap font-mono text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased"
              style={{ fontFamily: '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Console", monospace' }}
            >
              {markdownContent}
            </pre>
          </motion.main>
        ) : (
          /* Human Mode - Original View */
          <motion.main
            key="human"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
            {/* Profile Image - Easter Egg Trigger */}
            <button
              className="group relative mb-2 h-40 w-40 grayscale filter sm:h-56 sm:w-56 overflow-hidden cursor-pointer transition-all duration-500 hover:grayscale-0 active:scale-95 flex items-center justify-center"
              aria-label="Toggle Aura Mode"
            >
              <div className={`relative h-full w-full scale-[1.5] transition-all duration-700`}>
                <Image
                  src="/me-new.png"
                  alt="Adeesha Perera"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12" />
            </button>

            {/* Hero Text */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Adeesha Perera
            </h1>

            {/* Phonetic Pronunciation */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>/əˈdiːʃə pəˈreːrə/</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span>noun</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="tabular-nums text-xs sm:text-sm">{time || "00:00:00"}</span>
                  <span className="text-[10px] uppercase tracking-wider sm:text-xs">IST</span>
                </div>

                <span className="text-gray-300 dark:text-gray-700">•</span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400">lofi</span>
                  <button
                    onClick={toggleLofi}
                    className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-black dark:hover:text-white"
                    aria-label={isLofiPlaying ? "Pause Lofi" : "Play Lofi"}
                  >
                    {isLofiPlaying ? <Pause size={10} fill="currentColor" /> : <Music size={10} />}
                  </button>
                  <AnimatePresence>
                    {isLofiPlaying && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 40, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="flex h-5 items-center overflow-hidden"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={lofiVolume}
                          onChange={(e) => setLofiVolume(parseFloat(e.target.value))}
                          className="h-[2px] w-8 cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-zinc-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 dark:[&::-webkit-slider-thumb]:bg-zinc-500 hover:[&::-webkit-slider-thumb]:bg-black dark:hover:[&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:w-2 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-400 dark:[&::-moz-range-thumb]:bg-zinc-500 hover:[&::-moz-range-thumb]:bg-black dark:hover:[&::-moz-range-thumb]:bg-white transition-all"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
              <p>
                an IT undergraduate and{" "}
                <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">
                  AI enthusiast
                </a>{" "}
                who builds AI-powered systems using RAG, automation, and modern web tech.
              </p>
              <p>
                focused on bridging the gap between complex{" "}
                <a href="https://en.wikipedia.org/wiki/Large_language_model" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">
                  AI systems
                </a>{" "}
                and practical user applications through engineering, cloud systems, and automation-driven solutions.
              </p>
            </div>

            {/* Featured Projects Section */}
            <div className="mb-16 mt-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Featured Projects
              </h2>
              <div className="space-y-6">
                <Link href="/ai-assistant" className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-black dark:text-white">AI Portfolio Assistant</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    An interactive RAG-based assistant that answers questions about my skills and experience using local documents.
                  </p>
                </Link>

                <Link href="/ai-news" className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-black dark:text-white">AI News Automation</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    End-to-end automated news aggregation pipeline powered by LLMs and n8n workflow automation.
                  </p>
                </Link>

                <Link href="/movie-recommendations" className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-black dark:text-white">AI Movie Recommendation System</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get personalized movie recommendations powered by collaborative filtering and content-based AI models trained on real viewing data.
                  </p>
                </Link>
              </div>
            </div>

            {/* Homelab Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Homelab
              </h2>
              <Link href="/homelab" className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 transition-all hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 mt-0.5">
                    <Server className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-black dark:text-white">Self-Hosted Infrastructure</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      A personal homelab running 15+ Docker containers — from monitoring with Grafana to self-hosted AI agents, automated bots, cloud storage, and IoT automation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Grafana", "Nextcloud", "Nginx", "Pi-hole", "Portainer", "OpenClaw", "Bots"].map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-full text-[10px] font-medium bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-zinc-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Experience Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="AI Engineering Intern"
                  role="Tech Company"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Worked on developing RAG systems and integrating LLMs into production workflows. Built automated pipelines for data processing and content generation.</p>
                    <p>Collaborated with cross-functional teams to design and implement AI-powered features that improved user engagement and operational efficiency.</p>
                    <p>Gained hands-on experience with vector databases, embedding models, and prompt engineering techniques for enterprise applications.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Freelance Developer"
                  role="Self-employed"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Developed full-stack web applications for clients using Next.js, React, and Node.js. Focused on creating modern, responsive, and performant user interfaces.</p>
                    <p>Built custom automation workflows using n8n and integrated various APIs to streamline client business processes.</p>
                    <p>Delivered projects on time with clean, maintainable code and comprehensive documentation.</p>
                  </div>
                </ExperienceItem>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="University"
                  role="BSc (Hons) in Information Technology"
                >
                  <p>Currently pursuing — Expected 2026</p>
                </ExperienceItem>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                I build with a diverse set of tools, but here&apos;s the core stack I work with most:
              </p>
              <TechStack />
            </div>

            {/* Writings & Blogs Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Writings & Blogs
              </h2>
              <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I share my thoughts and insights on AI systems, automation workflows, and modern web development. Always exploring new ideas and documenting the journey of building intelligent applications.
              </p>
            </div>

            {/* Library Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Library
              </h2>

              {/* Dev Subsection */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Dev
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
                    { title: "Clean Code", author: "Robert C. Martin" },
                    { title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt" },
                    { title: "System Design Interview", author: "Alex Xu" },
                  ].map((book) => (
                    <div key={book.title} className="group flex flex-col gap-1 transition-all">
                      <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                        {book.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI & ML Subsection */}
              <div className="mb-4">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  AI & ML
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    { title: "Hands-On Machine Learning", author: "Aurélien Géron" },
                    { title: "Deep Learning", author: "Ian Goodfellow et al." },
                    { title: "AI Superpowers", author: "Kai-Fu Lee" },
                    { title: "The Hundred-Page Machine Learning Book", author: "Andriy Burkov" },
                  ].map((book) => (
                    <div key={book.title} className="group flex flex-col gap-1 transition-all">
                      <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                        {book.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs italic text-gray-400 dark:text-gray-500">
                *and many more — these are just some of my favorites
              </p>
            </div>

            {/* Thing about me Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Thing about me
              </h2>
              <div className="space-y-6">
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Beyond code and AI systems, I find balance in exploring new technologies and understanding how things work at their core. My curiosity drives me to constantly learn, experiment, and push the boundaries of what&apos;s possible with modern tech.
                </p>
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  I believe the best products come from people who are genuinely curious. It&apos;s the unique combination of technical depth and human perspective that allows us to create technology that actually resonates with users.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Connect with me on{" "}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "} shoot an{" "}
                  <a
                    href="mailto:hello@adeeshaperera.me"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    email
                  </a>
                </p>
              </div>
            </div>

          </motion.main>
        )}
      </AnimatePresence>

      {/* Glass Island Navbar */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6 z-50">
        {/* Mode Toggle Switch */}
        <div className="flex items-center">
          <button
            onClick={() => setMode(mode === "human" ? "agent" : "human")}
            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none"
            role="switch"
            aria-checked={mode === "agent"}
            title={`Switch to ${mode === "human" ? "agent" : "human"} mode`}
          >
            <div
              className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"
                }`}
            >
              {mode === "human" ? (
                <User className="h-3 w-3 text-black" />
              ) : (
                <Bot className="h-3 w-3 text-black" />
              )}
            </div>
          </button>
        </div>
        <button
          onClick={() => setShowQR(true)}
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          aria-label="Show QR Code"
        >
          <QrCode className="h-5 w-5" />
        </button>
        <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700" />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          title="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          title="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          title="X / Twitter"
        >
          <FaXTwitter className="h-5 w-5" />
        </a>
        <a
          href="mailto:hello@adeeshaperera.me"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          title="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </nav>

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* Onboarding Tooltip */}
        <AnimatePresence>
          {showOnboarding && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
                scale: 1,
              }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-full mb-4 right-0 whitespace-nowrap"
            >
              <Link
                href="/ai-assistant"
                onClick={dismissOnboarding}
                className="group flex items-center gap-2.5 rounded-full border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 backdrop-blur-md px-5 py-2.5 shadow-xl transition-all hover:border-black dark:hover:border-white hover:shadow-2xl"
              >
                {/* Pulsing green dot */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-black dark:text-white">
                  Ask my AI about me
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-500 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              {/* Caret arrow pointing down-right */}
              <div className="absolute right-5 -bottom-[6px] h-0 w-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-gray-300 dark:border-t-zinc-600" />
              <div className="absolute right-5 -bottom-[5px] h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-zinc-900" />
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          href="/ai-assistant"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg backdrop-blur-md transition-all hover:shadow-xl hover:scale-110 hover:border-gray-400 dark:hover:border-zinc-500"
          title="AI Assistant"
        >
          <Bot className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
          {/* Pulsing green status dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          {/* Glow rings while onboarding is visible */}
          {showOnboarding && (
            <>
              <span className="absolute -inset-2 rounded-full border-2 border-emerald-400/30 animate-ping" />
              <span className="absolute -inset-1 rounded-full bg-emerald-400/10 animate-pulse" />
            </>
          )}
        </Link>
      </div>

      {/* QR Code Modal */}
      {
        showQR && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          >
            <div
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="rounded-lg bg-white p-2">
                <QRCodeSVG
                  value="https://adeeshaperera.me/"
                  size={200}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
