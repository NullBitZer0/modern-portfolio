"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconCode, IconCloud, IconSettings, IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen pt-40 pb-16 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Who <span className="text-cyan-400">I Am</span>
                        </h1>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            I am an IT undergraduate with a strong interest in AI engineering, cloud systems, and
                            automation-driven solutions. My journey involves experimenting with the latest in Large Language
                            Models (LLMs) and building tools that bridge the gap between complex AI systems and practical user
                            applications.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Currently, I focus on RAG (Retrieval-Augmented Generation) systems and automating workflows to
                            enhance productivity and intelligence in software products.
                        </p>
                        <div className="pt-4">
                            <Link href="/contact" className="inline-flex justify-center items-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
                                Let's Connect
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Interests Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800/50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

                        <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Interests</h3>

                        <div className="space-y-6 relative z-10">
                            <InterestItem icon={<IconCode className="text-cyan-400" />} text="AI Engineering & LLMs" />
                            <InterestItem icon={<IconCloud className="text-cyan-400" />} text="Cloud Systems (AWS/Azure)" />
                            <InterestItem icon={<IconSettings className="text-cyan-400" />} text="Automation Workflows" />
                            <InterestItem icon={<IconWorld className="text-cyan-400" />} text="Modern Web Development" />
                        </div>

                    </motion.div>

                </div>

            </div>
        </div>
    );
}

function InterestItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
            <div className="p-2 bg-neutral-800 rounded-lg">
                {icon}
            </div>
            <span className="text-neutral-300 font-medium">{text}</span>
        </div>
    );
}
