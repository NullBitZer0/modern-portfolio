"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

const components = [
    { layer: "Data Layer", tech: "PostgreSQL + S3", detail: "Book metadata, user ratings, and interaction logs stored in PostgreSQL with raw data backed up to S3." },
    { layer: "Feature Engineering", tech: "BERT + NLP Pipeline", detail: "Book descriptions and reviews encoded using BERT embeddings. NLP pipeline for tokenisation, stop-word removal, and semantic feature extraction." },
    { layer: "Recommendation Engine", tech: "Neural Collaborative Filtering", detail: "NCF model combining GMF and MLP paths for collaborative filtering. Learns non-linear user-item interaction patterns from implicit feedback." },
    { layer: "Serving Layer", tech: "FastAPI + Redis Cache", detail: "REST API serves real-time recommendations with sub-100ms latency. Redis cache for frequently requested user profiles and popular books." },
    { layer: "Infrastructure", tech: "AWS + Terraform", detail: "Full IaC with Terraform — ECS Fargate for compute, RDS for database, S3 for storage, CloudWatch for monitoring." },
    { layer: "CI/CD", tech: "GitHub Actions", detail: "Automated testing, building, and deployment pipeline. Terraform plan on PR, apply on merge to main." },
];

const techStack = [
    "Python", "FastAPI", "PostgreSQL", "Redis", "BERT", "PyTorch",
    "NCF", "AWS", "Terraform", "Docker", "GitHub Actions", "S3",
    "ECS Fargate", "CloudWatch",
];

export default function BookRecommendation() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                        </span>
                        In Progress
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-400">Book</span> Recommendation System
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        NCF-based collaborative filtering with BERT embeddings, NLP processing, deployed on AWS with Terraform infrastructure-as-code.
                    </p>
                    <div className="mt-6">
                        <a
                            href="https://github.com/NullBitZer0/book-recommendation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            View on GitHub
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
                            A full-stack book recommendation system that learns from user reading patterns and book metadata to deliver personalised suggestions. Uses Neural Collaborative Filtering for collaborative filtering, BERT for content-based features, and a NLP pipeline for text processing — all deployed on AWS with Terraform-managed infrastructure.
                        </p>
                    </div>
                </motion.div>

                {/* System Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        System Architecture
                    </h2>
                    <div className="space-y-3">
                        {components.map((item, index) => (
                            <div
                                key={item.layer}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-800"
                            >
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-400">
                                    {index + 1}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-medium text-sm text-black dark:text-white">{item.layer}</h3>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">{item.tech}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
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
