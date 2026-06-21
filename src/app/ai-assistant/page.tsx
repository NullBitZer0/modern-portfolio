"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

const components = [
    { layer: "Document Extraction", tech: "Docling Serve", detail: "PDF/DOCX/PPTX/HTML extraction with layout analysis, table structure, and OCR" },
    { layer: "Document Ingestion", tech: "Worker Service", detail: "MinIO webhook triggers → Docling extraction → chunking (500 chars, 100 overlap) → Gemini embedding → OpenSearch index" },
    { layer: "Hybrid Retrieval", tech: "OpenSearch (BM25 + k-NN) + Cohere", detail: "BM25 keyword search + k-NN dense vector search with RRF fusion → Cohere rerank-v3.5 (Top 10 → Top 3)" },
    { layer: "Query Transformation", tech: "Strategy Router", detail: "direct (skip LLM), rewrite (clarify vague), multi_query (alternative phrasings), step_back (broaden queries)" },
    { layer: "Guardrails", tech: "Input/Output Safety", detail: "Prompt injection detection, harmful content filter, length validation, portfolio-only classifier, toxicity filter" },
    { layer: "Generation", tech: "Groq LLM + Cache", detail: "llama-3.3-70b-versatile via Groq with in-memory LRU cache (1000 entries)" },
    { layer: "Observability", tech: "Langfuse", detail: "Full execution tracing, grading scores, guard results, cache hit logging" },
    { layer: "Evaluation", tech: "RAGAS", detail: "Faithfulness, answer relevancy, context precision, context recall, factual correctness" },
];

const apiEndpoints = [
    { method: "POST", path: "/query", description: "Ask a question" },
    { method: "POST", path: "/upload?folder=", description: "Upload file to MinIO" },
    { method: "POST", path: "/upload-url?folder=", description: "Download from URL, store in MinIO" },
    { method: "GET", path: "/files?folder=", description: "List files (optional folder filter)" },
    { method: "DELETE", path: "/files/{folder}/{filename}", description: "Delete file from MinIO" },
    { method: "POST", path: "/reindex", description: "Trigger full reindex on worker" },
    { method: "POST", path: "/clear-memory", description: "Clear conversation history" },
];

const techStack = [
    "Python", "FastAPI", "LangChain", "Groq", "Gemini", "Cohere",
    "OpenSearch", "BM25", "k-NN", "MinIO", "Docling",
    "Langfuse", "RAGAS", "Docker", "Docker Compose",
];

const queryStrategies = [
    { strategy: "direct", trigger: "Clear, specific query", action: "No transformation", llm: "No" },
    { strategy: "rewrite", trigger: "Ambiguous questions", action: "LLM clarifies the question", llm: "Yes" },
    { strategy: "multi_query", trigger: "Vague/short queries", action: "Generate 2-3 alternative phrasings", llm: "Yes" },
    { strategy: "step_back", trigger: "Specific how-to questions", action: "Broaden for foundational context", llm: "Yes" },
];

const evaluationMetrics = [
    { metric: "Faithfulness", description: "Is the answer grounded in context (no hallucination)?" },
    { metric: "Answer Relevancy", description: "Does the answer address the question?" },
    { metric: "Context Precision", description: "Are retrieved docs focused and relevant?" },
    { metric: "Context Recall", description: "Did we retrieve all needed information?" },
    { metric: "Factual Correctness", description: "Is answer factually accurate vs ground truth?" },
];

export default function AIAssistant() {
    const handleDemo = () => {
        const event = new CustomEvent("highlight-assistant");
        window.dispatchEvent(event);
    };

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
                        <span className="text-gray-400">Hybrid RAG</span> Portfolio Assistant
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        A production-grade Retrieval-Augmented Generation system with Docling document extraction, OpenSearch hybrid search (BM25 + k-NN), Cohere re-ranking, guardrails, and RAGAS evaluation.
                    </p>
                </motion.div>

                {/* Demo Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-12 flex justify-center"
                >
                    <button
                        onClick={handleDemo}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
                    >
                        <Bot className="h-4 w-4" />
                        Try Live Demo
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
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
                            A production-grade RAG system that ingests documents from MinIO, extracts content with Docling, embeds with Gemini (gemini-embedding-2, 768-dim), and indexes into OpenSearch for hybrid search. Queries are transformed via a strategy router, retrieved with BM25 + k-NN fusion, re-ranked with Cohere rerank-v3.5, and answered by Groq's llama-3.3-70b with guardrails and Langfuse tracing.
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

                {/* Query Strategies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Query Transformation Strategies
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-zinc-800">
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Strategy</th>
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Trigger</th>
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Action</th>
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">LLM Call</th>
                                </tr>
                            </thead>
                            <tbody>
                                {queryStrategies.map((s) => (
                                    <tr key={s.strategy} className="border-b border-gray-100 dark:border-zinc-900">
                                        <td className="py-3 px-4 font-medium text-black dark:text-white">{s.strategy}</td>
                                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{s.trigger}</td>
                                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{s.action}</td>
                                        <td className="py-3 px-4">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${s.llm === "Yes" ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"}`}>
                                                {s.llm}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* API Endpoints */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        API Endpoints
                    </h2>
                    <div className="space-y-2">
                        {apiEndpoints.map((ep) => (
                            <div
                                key={ep.path}
                                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-zinc-800"
                            >
                                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${ep.method === "GET" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" : ep.method === "DELETE" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"}`}>
                                    {ep.method}
                                </span>
                                <code className="text-xs font-mono text-gray-600 dark:text-gray-400">{ep.path}</code>
                                <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{ep.description}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Evaluation Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.21 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Evaluation Metrics (RAGAS)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {evaluationMetrics.map((m) => (
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
                    transition={{ delay: 0.24 }}
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
