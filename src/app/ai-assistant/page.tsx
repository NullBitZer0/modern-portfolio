"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";

const ARCHITECTURE_IMG = "https://raw.githubusercontent.com/NullBitZer0/portfolio-hybrid-rag/main/images/architecture.png";

const components = [
    { layer: "Input Guardrails", tech: "Custom Regex + LLM", detail: "Prompt injection detection, harmful content filter, length validation" },
    { layer: "Portfolio Classifier", tech: "Keyword + LLM Fallback", detail: "Blocks general knowledge — only answers questions about Adeesha's work" },
    { layer: "LangGraph Agent", tech: "StateGraph + 5 Tools", detail: "LLM decides which tools to call based on query intent. Max 2 retrieval rounds." },
    { layer: "Hybrid Retrieval", tech: "OpenSearch (BM25 + k-NN)", detail: "BM25 keyword search + k-NN dense vector search with RRF fusion" },
    { layer: "Reranking", tech: "Cohere rerank-v3.5", detail: "Top 10 results narrowed to top 3 most relevant" },
    { layer: "Generation", tech: "Groq gpt-oss-120b + Gemini Fallback", detail: "Primary LLM with automatic fallback to Gemini 2.5 Flash on rate limits" },
    { layer: "Caching", tech: "Upstash Redis", detail: "LLM response cache (1hr TTL) + conversation memory (24hr TTL)" },
    { layer: "Observability", tech: "Langfuse", detail: "Full execution tracing, prompt versioning, grading scores" },
];

const agentTools = [
    { tool: "search_all", description: "Search all documents — default for most queries" },
    { tool: "search_projects", description: "Focus on project documents only" },
    { tool: "search_skills", description: "Focus on skills/resume documents" },
    { tool: "search_source", description: "Search a specific file by name" },
    { tool: "list_documents", description: "Show what's available in the index" },
];

const apiEndpoints = [
    { method: "GET", path: "/", description: "Health check (OpenSearch, MinIO, Redis)" },
    { method: "POST", path: "/query", description: "Ask a question (body: {question, source_filter?})" },
    { method: "POST", path: "/upload?folder=", description: "Upload file to MinIO (max 20MB)" },
    { method: "GET", path: "/files?folder=", description: "List files (optional folder filter)" },
    { method: "DELETE", path: "/files/{folder}/{filename}", description: "Delete file + reindex" },
    { method: "POST", path: "/reindex", description: "Full reindex from MinIO" },
    { method: "POST", path: "/clear-memory", description: "Clear conversation history" },
    { method: "POST", path: "/clear-cache", description: "Clear LLM response cache" },
];

const techStack = [
    "Python 3.13", "FastAPI", "LangGraph", "LangChain", "Groq gpt-oss-120b",
    "Gemini 2.5 Flash", "Gemini Embedding", "Cohere rerank-v3.5",
    "OpenSearch 2.19", "BM25 + k-NN", "MinIO", "Docling",
    "Upstash Redis", "Langfuse", "RAGAS", "Docker Compose", "Coolify",
];

const features = [
    { feature: "Agentic RAG", detail: "LangGraph StateGraph with tool routing and multi-step retrieval" },
    { feature: "Parent-Child Chunking", detail: "2000 char parents (LLM context) + 500 char children (search precision)" },
    { feature: "Query Expansion", detail: "Synonym-based expansion for better BM25 recall" },
    { feature: "API Key Auth", detail: "X-API-Key header on all endpoints (health check open)" },
    { feature: "Rate Limiting", detail: "5 requests/min per IP" },
    { feature: "Gemini Fallback", detail: "Groq primary, Gemini 2.5 Flash on rate limit/connection errors" },
    { feature: "Tenacity Retry", detail: "3 attempts, exponential backoff on all external APIs" },
    { feature: "Tool Result Caching", detail: "In-memory 5min TTL avoids redundant search + rerank calls" },
    { feature: "Chunk Deduplication", detail: "Delete existing chunks before re-indexing" },
    { feature: "Structured Logging", detail: "logging module with per-module loggers (rag.graph, rag.tools, etc.)" },
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
        window.dispatchEvent(new CustomEvent("open-chat-with-message", {
            detail: "Tell me about the Agentic RAG Portfolio Assistant — what tech does it use, how does the architecture work, and what are its key features?"
        }));
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
                        <span className="text-gray-400">Agentic RAG</span> Portfolio Assistant
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        A production-grade Agentic RAG system with LangGraph agent, Docling extraction, OpenSearch hybrid search, Cohere reranking, Redis caching, and RAGAS evaluation.
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

                {/* Architecture Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        System Architecture
                    </h2>
                    <div className="rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                        <img
                            src={ARCHITECTURE_IMG}
                            alt="Agentic RAG Architecture"
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>

                {/* Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Overview
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>
                            A recruiter visits my portfolio, clicks the AI assistant, and asks questions about my projects, skills, and experience. The system retrieves relevant information from my documents and generates accurate, grounded answers in seconds.
                        </p>
                        <p>
                            Unlike linear RAG pipelines, this system uses a <strong className="text-black dark:text-white">LangGraph agent</strong> that reasons about which tools to call. The agent can search all documents, focus on specific categories, or look up a single file — then decide if it needs to retrieve again before generating an answer.
                        </p>
                    </div>
                </motion.div>

                {/* System Components */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        System Components
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

                {/* Agent Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Agent Tools
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-zinc-800">
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Tool</th>
                                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agentTools.map((t) => (
                                    <tr key={t.tool} className="border-b border-gray-100 dark:border-zinc-900">
                                        <td className="py-3 px-4 font-medium text-black dark:text-white font-mono text-xs">{t.tool}</td>
                                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{t.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((f) => (
                            <div key={f.feature} className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800">
                                <h3 className="font-medium text-sm text-black dark:text-white mb-1">{f.feature}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{f.detail}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* API Endpoints */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.20 }}
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
                    transition={{ delay: 0.22 }}
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
