"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, X } from "lucide-react";

const RAG_API_URL = "/api/query";

type Message = {
    id: number;
    text: string;
    sender: "user" | "ai";
    sources?: string[];
    pages?: string[];
};

type ChatModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function ChatModal({ isOpen, onClose }: ChatModalProps) {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! I'm Adeesha's AI assistant. Ask me anything about his work or skills.", sender: "ai" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const hasAutoSent = useRef(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = useCallback(async (text: string) => {
        const userMsg: Message = { id: Date.now(), text, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch(RAG_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: text }),
            });

            if (!response.ok) throw new Error("Failed to get response");

            const data = await response.json();
            const aiMsg: Message = {
                id: Date.now() + 1,
                text: data.answer,
                sender: "ai",
                sources: data.sources || [],
                pages: data.pages || [],
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch {
            const errorMsg: Message = {
                id: Date.now() + 1,
                text: "Sorry, I'm having trouble connecting to the backend. Please try again later.",
                sender: "ai"
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Auto-send on first open when triggered via send-initial-message event
    useEffect(() => {
        if (!isOpen) {
            hasAutoSent.current = false;
            return;
        }
        const handler = (e: Event) => {
            const msg = (e as CustomEvent).detail;
            if (msg && !hasAutoSent.current) {
                hasAutoSent.current = true;
                sendMessage(msg);
            }
        };
        window.addEventListener("send-initial-message", handler);
        return () => window.removeEventListener("send-initial-message", handler);
    }, [isOpen, sendMessage]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        await sendMessage(input);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-end justify-end p-4 sm:p-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 dark:bg-white/5 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Chat Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-md h-[500px] flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-full bg-gray-100 dark:bg-zinc-800">
                                    <Bot size={16} className="text-gray-600 dark:text-gray-300" />
                                </div>
                                <span className="text-sm font-semibold text-black dark:text-white">AI Assistant</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <X size={16} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-3">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 flex items-start gap-2 ${msg.sender === "user"
                                        ? "bg-black/5 dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-zinc-700 rounded-br-none"
                                        : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-bl-none"
                                        }`}>
                                        <div className={`mt-0.5 p-1 rounded-full shrink-0 ${msg.sender === "user" ? "bg-gray-200 dark:bg-zinc-700" : "bg-gray-100 dark:bg-zinc-700"}`}>
                                            {msg.sender === "user" ? <User size={12} /> : <Bot size={12} />}
                                        </div>
                                        <div>
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                            {msg.sender === "ai" && msg.sources && msg.sources.length > 0 && (
                                                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-zinc-700">
                                                    <p className="text-[10px] text-gray-400 dark:text-zinc-500">
                                                        Sources: {msg.sources.map((s) => {
                                                            const name = s.split("/").pop() || s;
                                                            return name;
                                                        }).join(", ")}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                            <form onSubmit={handleSend} className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my skills, projects..."
                                    className="w-full pl-4 pr-12 py-3 rounded-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-zinc-500/50 transition-all text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-1.5 top-1.5 p-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors"
                                >
                                    {isLoading ? (
                                        <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                                    ) : (
                                        <Send size={16} />
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
