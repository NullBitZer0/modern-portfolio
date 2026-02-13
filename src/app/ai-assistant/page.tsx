"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Message = {
    id: number;
    text: string;
    sender: "user" | "ai";
};

export default function AIAssistant() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! I'm Adeesha's AI assistant. Ask me anything about his work or skills.", sender: "ai" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: Date.now() + 1,
                text: "This is a demo UI. The live AI backend (RAG system) will be connected soon.",
                sender: "ai"
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

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

            <div className="w-full max-w-4xl flex flex-col h-[80vh]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
                        <span className="text-gray-400">AI</span> Portfolio Assistant
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                        Ask about my projects, skills, and experience.
                    </p>
                </motion.div>

                {/* Chat Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-grow flex flex-col bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm"
                >

                    {/* Messages Area */}
                    <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-hide">
                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl p-4 flex items-start gap-3 ${msg.sender === "user"
                                        ? "bg-black/5 dark:bg-white/10 text-black dark:text-white border border-gray-200 dark:border-zinc-700 rounded-br-none"
                                        : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-bl-none"
                                        }`}>
                                        <div className={`mt-1 p-1 rounded-full ${msg.sender === "user" ? "bg-gray-200 dark:bg-zinc-700" : "bg-gray-100 dark:bg-zinc-700"}`}>
                                            {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                                        </div>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                        <form onSubmit={handleSend} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your question here..."
                                className="w-full pl-5 pr-14 py-4 rounded-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-zinc-500/50 transition-all font-medium"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="absolute right-2 top-2 p-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 transition-colors"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
