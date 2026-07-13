"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const approaches = [
    { approach: "Content-Based (TF-IDF)", detail: "Encodes movie titles and genres into TF-IDF vectors and recommends similar items using cosine similarity." },
    { approach: "Collaborative (SVD)", detail: "Matrix factorisation via Surprise library. Learns latent user-item interaction patterns from the ratings matrix." },
    { approach: "Popularity-Based", detail: "Baseline ranking by average rating and vote count. Useful for cold-start and non-personalised recommendations." },
];

const evaluation = [
    { metric: "RMSE", description: "Rating prediction accuracy for SVD model" },
    { metric: "Precision@10", description: "How many of the top-10 recommendations are relevant" },
    { metric: "NDCG@10", description: "Ranking quality — are the best items ranked highest?" },
    { metric: "Genre Consistency", description: "Do recommended movies share genres with the input?" },
];

const techStack = [
    "Python", "Pandas", "NumPy", "Scikit-learn",
    "Surprise (SVD)", "TF-IDF", "Cosine Similarity",
    "Streamlit", "TMDb API", "Git",
];

export default function MovieRecommendation() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 pt-8 pb-20 transition-colors duration-300">
            <div className="max-w-5xl mx-auto">

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

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Live
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-400">Movie</span> Recommendation System
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        End-to-end recommendation engine with content-based filtering (TF-IDF), collaborative filtering (SVD), and popularity-based ranking on MovieLens 100K.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a
                            href="https://github.com/NullBitZer0/movie-recsys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            View on GitHub
                        </a>
                        <a
                            href="https://jellyfin.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                        </a>
                    </div>
                </motion.div>

                {/* Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Overview
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>
                            Built an end-to-end movie recommendation system using the MovieLens 100K dataset, implementing content-based filtering (TF-IDF), collaborative filtering (SVD), and popularity-based ranking to compare different recommendation strategies. Built an interactive Streamlit application for exploring personalised recommendations and evaluated model performance using RMSE, Precision@10, NDCG, and genre consistency.
                        </p>
                    </div>
                </motion.div>

                {/* Recommendation Approaches */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Recommendation Approaches
                    </h2>
                    <div className="space-y-3">
                        {approaches.map((item, index) => (
                            <div
                                key={item.approach}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-800"
                            >
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-400">
                                    {index + 1}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-medium text-sm text-black dark:text-white mb-1">{item.approach}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Evaluation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Evaluation Metrics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {evaluation.map((m) => (
                            <div key={m.metric} className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
                                <h3 className="font-medium text-sm text-black dark:text-white mb-1">{m.metric}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{m.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="mb-16"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
