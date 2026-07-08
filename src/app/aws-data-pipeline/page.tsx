"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

const architecture = [
    { layer: "Data Source", tech: "Finnhub API", detail: "Real-time and historical stock market data — prices, company profiles, news, and earnings." },
    { layer: "Ingestion", tech: "EventBridge + Lambda", detail: "EventBridge triggers Lambda on a schedule to fetch data from Finnhub API and store raw JSON in S3." },
    { layer: "Transformation", tech: "AWS Glue", detail: "Crawlers auto-detect schemas. ETL jobs clean, deduplicate, and transform raw data into queryable Parquet format." },
    { layer: "Storage", tech: "S3 Data Lake", detail: "Raw, processed, and curated layers — partitioned by date and ticker for efficient querying." },
    { layer: "Query Engine", tech: "Amazon Athena", detail: "Serverless SQL queries directly on S3 data. No infrastructure to manage — pay per query." },
    { layer: "Visualisation", tech: "QuickSight", detail: "Interactive dashboards showing stock performance, volume trends, and sector comparisons." },
    { layer: "Scheduling", tech: "EventBridge Scheduler", detail: "Daily triggers for ingestion and transformation, keeping dashboards up to date automatically." },
];

const techStack = [
    "Python", "AWS Lambda", "EventBridge", "S3", "AWS Glue",
    "Athena", "QuickSight", "Finnhub API", "Parquet", "SQL",
];

export default function AWSDataPipeline() {
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
                        <span className="text-gray-400">AWS</span> Data Pipeline
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Automated serverless data pipeline ingesting Finnhub stock data via EventBridge and Lambda, transformed with Glue and Athena, visualised with QuickSight dashboards.
                    </p>
                    <div className="mt-6">
                        <a
                            href="https://github.com/NullBitZer0/aws-data-pipeline"
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
                            A fully serverless data pipeline on AWS that pulls stock market data from the Finnhub API, stores it in an S3 data lake, transforms it with AWS Glue, queries it with Athena, and visualises trends in QuickSight dashboards — all triggered automatically on a schedule with EventBridge.
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

                {/* Data Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Data Flow
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        {["Finnhub API", "Lambda", "S3 Raw", "Glue ETL", "S3 Processed", "Athena", "QuickSight"].map((step, i, arr) => (
                            <React.Fragment key={step}>
                                <span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-xs font-medium">{step}</span>
                                {i < arr.length - 1 && <span className="text-gray-300 dark:text-zinc-700">→</span>}
                            </React.Fragment>
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
