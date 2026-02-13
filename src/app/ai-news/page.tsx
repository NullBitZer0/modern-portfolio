"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconNews, IconSourceCode, IconCalendar, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

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
        <div className="min-h-screen pt-40 px-4 pb-20">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">AI News & Insights</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
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

function NewsCard({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 hover:border-cyan-500/30 transition-colors"
        >
            <div className="flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.summary}</p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500">
                <div className="flex items-center space-x-1">
                    <IconSourceCode className="w-3 h-3" />
                    <span>{item.source}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <IconCalendar className="w-3 h-3" />
                    <span>{item.date}</span>
                </div>
            </div>
        </motion.div>
    );
}
