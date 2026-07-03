"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Play, ExternalLink } from "lucide-react";
import Link from "next/link";

const architecture = [
    { layer: "Model", tech: "DistilBERT", detail: "Fine-tuned transformer for binary spam classification. 40M parameters, 60% faster than BERT with 97% of the performance." },
    { layer: "Training", tech: "PyTorch + Hugging Face", detail: "Fine-tuned on SMS Spam Collection dataset with early stopping, learning rate scheduling, and class-weighted loss." },
    { layer: "Inference API", tech: "FastAPI", detail: "REST API serving predictions via /predict endpoint. Input text → output: spam/ham + confidence score." },
    { layer: "Frontend", tech: "Streamlit", detail: "Interactive UI with single-text prediction, batch CSV upload, model metrics, and architecture overview." },
    { layer: "Deployment", tech: "AWS SageMaker", detail: "Model hosted on SageMaker endpoint with auto-scaling. CloudWatch monitoring for latency and errors." },
    { layer: "Infrastructure", tech: "Terraform", detail: "Full IaC provisioning S3, IAM roles, SageMaker model/endpoint, and CloudWatch alarms." },
    { layer: "Containerisation", tech: "Docker", detail: "FastAPI and Streamlit containerised with multi-stage builds for minimal image size." },
];

const metrics = [
    { metric: "Accuracy", value: "99.5%" },
    { metric: "Precision", value: "98.7%" },
    { metric: "Recall", value: "97.8%" },
    { metric: "F1 Score", value: "98.2%" },
    { metric: "ROC-AUC", value: "0.998" },
];

const techStack = [
    "Python", "PyTorch", "DistilBERT", "Hugging Face", "FastAPI",
    "Streamlit", "SageMaker", "S3", "CloudWatch", "Terraform", "Docker",
];

export default function SpamClassification() {
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
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-400">SpamShield</span> AI
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Enterprise spam detection using DistilBERT transformers, deployed on AWS SageMaker with Terraform infrastructure-as-code.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a
                            href="https://github.com/NullBitZer0/spam-dl-aws"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Github className="h-4 w-4" />
                            View on GitHub
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Play className="h-4 w-4" />
                            Watch Demo
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Read on Medium
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
                            A production-grade spam detection system built as an end-to-end ML pipeline. Fine-tuned DistilBERT on the SMS Spam Collection dataset, served via FastAPI, wrapped in a Streamlit UI, containerised with Docker, and deployed to AWS SageMaker with Terraform-managed infrastructure.
                        </p>
                    </div>
                </motion.div>

                {/* Architecture */}
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
                        {architecture.map((item, index) => (
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

                {/* Results */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Results
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {metrics.map((m) => (
                            <div key={m.metric} className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 text-center">
                                <p className="text-2xl font-bold text-black dark:text-white">{m.value}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{m.metric}</p>
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
