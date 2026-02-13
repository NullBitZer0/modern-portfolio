"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Film } from "lucide-react";
import Link from "next/link";

export default function MovieRecommendations() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 pt-8 pb-20 flex flex-col items-center transition-colors duration-300">
            {/* Back Button */}
            <div className="w-full max-w-4xl mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>
            </div>

            <div className="w-full max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-400">AI</span> Movie Recommendations
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Personalized movie recommendations powered by collaborative filtering and content-based AI models.
                    </p>
                </motion.div>

                {/* Placeholder Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full rounded-2xl border border-gray-200 dark:border-zinc-800 p-12 md:p-16 text-center"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                            <Film className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                            <p className="font-medium text-black dark:text-white text-lg mb-2">Coming Soon</p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 max-w-md">
                                The full movie recommendation engine is being built. Check back soon for an interactive demo with real AI-powered suggestions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
