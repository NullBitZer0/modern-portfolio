"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        title: "Zero Training-Serving Skew",
        description: "Feast standardizes feature generation between offline training (PostgreSQL) and online inference (Redis), ensuring consistency.",
    },
    {
        title: "3-Tier Decision Framework",
        description: "Instead of binary fraud/not-fraud, predictions map to actionable outcomes: Auto-Block, Manual Review, and Soft Audit Signal.",
    },
    {
        title: "Automated MLOps Lifecycle",
        description: "Airflow DAGs monitor data drift with Evidently AI and automatically trigger retraining, validation gating, and model registry promotion.",
    },
    {
        title: "Resilient Streaming Ingestion",
        description: "Kafka queues transaction bursts to buffer ingestion rate from scoring engines, enabling high-throughput processing.",
    },
    {
        title: "Unified Observability",
        description: "Real-time transaction WebSockets, audit logs, and performance metrics via Prometheus and Grafana dashboards.",
    },
];

const metrics = [
    { label: "Inference Latency", value: "<15ms", detail: "P95 online feature lookup + score" },
    { label: "ROC-AUC", value: "0.9938", detail: "Held-out chronological test set" },
    { label: "PR-AUC", value: "0.94", detail: "Tuned model performance" },
    { label: "Tier 2 Catch Rate", value: "82.7%", detail: "With 76.0% precision" },
];

const architecture = [
    { step: "1", title: "Ingestion", description: "Raw transaction events streamed to Apache Kafka's fraud-transactions topic." },
    { step: "2", title: "Processing & Enrichment", description: "Python consumer pulls events and retrieves pre-computed velocities from Redis via Feast." },
    { step: "3", title: "Inference", description: "Tuned CatBoost model scores enriched features and maps to the 3-tier decision framework." },
    { step: "4", title: "Action & Auditing", description: "Decisions written to PostgreSQL audit log, streamed to React dashboard via WebSockets, emitted to Kafka fraud-decisions topic." },
    { step: "5", title: "Feedback Loop", description: "Airflow schedules daily drift detection (Evidently) and weekly retraining, promoting models to DAGsHub MLflow." },
];

const techStack = [
    "Python", "JavaScript", "FastAPI", "React", "Vite",
    "CatBoost", "LightGBM", "XGBoost", "Optuna",
    "Feast", "PostgreSQL", "Redis", "DVC",
    "Apache Kafka", "Apache Airflow",
    "MLflow", "DAGsHub", "Prometheus", "Grafana",
    "Docker Compose", "GitHub Actions", "Pandera", "Pytest", "Evidently AI",
];

export default function FraudDetection() {
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
                        <span className="text-gray-400">Real-Time</span> Fraud Detection
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        A production-grade credit card fraud detection system with sub-15ms latency, online/offline feature store, and automated MLOps lifecycle.
                    </p>
                </motion.div>

                {/* Live Demo Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-6 flex justify-center gap-3 flex-wrap"
                >
                    <a
                        href="https://dashboard.adeeshaperera.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
                    >
                        Live Dashboard
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://grafana.adeeshaperera.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-all"
                    >
                        Grafana
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://airflow.adeeshaperera.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-all"
                    >
                        Airflow
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
                <p className="text-center text-xs text-gray-400 dark:text-gray-500 mb-12">
                    Airflow login: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">viewer</code> / <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400">viewer</code>
                </p>

                {/* Repo Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 }}
                    className="mb-12 flex justify-center gap-3 flex-wrap"
                >
                    <a
                        href="https://github.com/NullBitZer0/real-time-fraud-detection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-all"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://dagshub.com/NullBitZer0/real-time-fraud-detection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-all"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.374.002a4.985 4.985 0 0 0-3.67 1.624L.296 9.032a4.988 4.988 0 0 0 1.22 6.94l7.407 7.408a4.986 4.986 0 0 0 6.94 1.22l7.408-7.408a4.988 4.988 0 0 0 1.22-6.94L15.044 1.626A4.985 4.985 0 0 0 11.374.002zM7.7 7.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zm8.6 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zm-8.6 5.5c0 2.21 3.1 4 7 4s7-1.79 7-4-3.1-4-7-4-7 1.79-7 4z"/></svg>
                        DAGsHub
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://medium.com/p/3eef673bb5f0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-all"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                        Read on Medium
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>

                {/* Description */}
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
                            A production-grade, real-time credit card fraud detection system designed to ingest transaction streams and classify fraud risk with sub-50ms latency. The system leverages an online/offline feature store to compute behavioral velocity features without training-serving skew, running a tuned gradient-boosted classifier behind a three-tier decision-action framework.
                        </p>
                    </div>
                </motion.div>

                {/* Performance Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Performance Metrics
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 text-center"
                            >
                                <div className="text-2xl font-bold text-black dark:text-white">{metric.value}</div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{metric.label}</div>
                                <div className="text-[10px] text-gray-400 dark:text-gray-600 mt-0.5">{metric.detail}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-5 rounded-xl border border-gray-200 dark:border-zinc-800"
                            >
                                <h3 className="font-medium text-sm text-black dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Architecture
                    </h2>
                    <div className="space-y-3">
                        {architecture.map((item) => (
                            <div
                                key={item.step}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-800"
                            >
                                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm text-black dark:text-white mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                        <Image
                            src="/fraud-detection/diagram.jpeg"
                            alt="System Architecture"
                            width={1200}
                            height={800}
                            className="w-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Dashboard
                    </h2>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-200 dark:border-zinc-800">
                                <h3 className="text-sm font-medium text-black dark:text-white">Live Transactions</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Real-time WebSocket feed with fraud-rate chart and per-row tier badges.</p>
                            </div>
                            <Image
                                src="/fraud-detection/live.png"
                                alt="Live dashboard"
                                width={1200}
                                height={800}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-200 dark:border-zinc-800">
                                <h3 className="text-sm font-medium text-black dark:text-white">Demo Results</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Confusion matrix, F1 score, and tier breakdown from batch test runs.</p>
                            </div>
                            <Image
                                src="/fraud-detection/demo.png"
                                alt="Demo results"
                                width={1200}
                                height={800}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-200 dark:border-zinc-800">
                                <h3 className="text-sm font-medium text-black dark:text-white">Drift Report</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Evidently AI drift detection with per-feature KS tests and Wasserstein distances.</p>
                            </div>
                            <Image
                                src="/fraud-detection/drift.png"
                                alt="Drift report"
                                width={1200}
                                height={800}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
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
