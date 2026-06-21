"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatModal } from "./ChatModal";

export function FloatingAssistant() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [highlight, setHighlight] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Onboarding tooltip: show every visit on home page
    useEffect(() => {
        if (isHome) {
            const showTimer = setTimeout(() => setShowOnboarding(true), 3000);
            const hideTimer = setTimeout(() => setShowOnboarding(false), 9000);
            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [isHome]);

    // Listen for highlight-assistant event from project pages
    useEffect(() => {
        const handleHighlight = () => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 3000);
        };
        window.addEventListener("highlight-assistant", handleHighlight);
        return () => window.removeEventListener("highlight-assistant", handleHighlight);
    }, []);

    const tooltipText = isHome ? "Ask my AI about me" : "Ask my AI about this project";
    const showTooltip = showOnboarding || highlight;

    return (
        <>
            <div className="fixed bottom-24 right-6 z-50">
                <AnimatePresence>
                    {showTooltip && (
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
                                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute bottom-full mb-4 right-0 whitespace-nowrap"
                        >
                            <button
                                onClick={() => setIsChatOpen(true)}
                                className="group flex items-center gap-2.5 rounded-full border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 backdrop-blur-md px-5 py-2.5 shadow-xl transition-all hover:border-black dark:hover:border-white hover:shadow-2xl"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                <span className="text-sm font-semibold text-black dark:text-white">
                                    {tooltipText}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 text-gray-500 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                            </button>
                            <div className="absolute right-5 -bottom-[6px] h-0 w-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-gray-300 dark:border-t-zinc-600" />
                            <div className="absolute right-5 -bottom-[5px] h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-zinc-900" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsChatOpen(true)}
                    className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg backdrop-blur-md transition-all hover:shadow-xl hover:scale-110 hover:border-gray-400 dark:hover:border-zinc-500 ${highlight ? "scale-125 border-emerald-400 dark:border-emerald-500 shadow-emerald-400/50 shadow-2xl" : ""}`}
                    title="AI Assistant"
                >
                    <Bot className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    {showTooltip && (
                        <>
                            <span className="absolute -inset-2 rounded-full border-2 border-emerald-400/30 animate-ping" />
                            <span className="absolute -inset-1 rounded-full bg-emerald-400/10 animate-pulse" />
                        </>
                    )}
                </button>
            </div>

            <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
}
