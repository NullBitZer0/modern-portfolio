"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AINews() {
    const newsItems = [
        {
            title: "Claude 3.7 Released with Enhanced Reasoning",
            summary: "Anthropic has released their latest model featuring improved logical deduction and coding capabilities. The model shows a 20% benchmark increase over previous iterations.",
            source: "AI Weekly",
            date: "Oct 24, 2025"
        },
        {
            title: "Open Source LLMs Close the Gap",
            summary: "New benchmarks reveal that the latest open-weights models are matching proprietary performance in specialized tasks, democratizing access to high-level AI.",
            source: "TechCrunch",
            date: "Oct 22, 2025"
        },
        {
            title: "Automated Agent Frameworks on the Rise",
            summary: "Frameworks for building autonomous agents are becoming the standard for enterprise automation, moving beyond simple chatbots to complex task execution.",
            source: "The Verge",
            date: "Oct 20, 2025"
        },
        {
            title: "Sustainable AI Computing Centers",
            summary: "Major tech companies pledge to power 100% of AI training clusters with renewable energy by 2030, addressing growing environmental concerns.",
            source: "GreenTech Media",
            date: "Oct 18, 2025"
        },
        {
            title: "Python 3.14 Introduces JIT Compiler",
            summary: "The newest Python release includes an experimental JIT compiler that significantly boosts performance for AI and data science workloads.",
            source: "Python.org",
            date: "Oct 15, 2025"
        },
        {
            title: "RAG Systems Become Standard",
            summary: "Retrieval-Augmented Generation is now the de-facto standard for enterprise AI, reducing hallucinations and improving factual accuracy.",
            source: "AI Research Blog",
            date: "Oct 12, 2025"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 pt-8 pb-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Portfolio
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">AI News & Insights</h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
                        A live demonstration of an automated content pipeline. News is fetched, summarized by an LLM, and published here automatically via n8n workflows.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((item, index) => (
                        <NewsCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
}

function NewsCard({ item, index }: { item: { title: string; summary: string; source: string; date: string }, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-gray-400 dark:hover:border-zinc-600 transition-all"
        >
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{item.summary}</p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500">
                <span>{item.source}</span>
                <span>{item.date}</span>
            </div>
        </motion.div>
    );
}
