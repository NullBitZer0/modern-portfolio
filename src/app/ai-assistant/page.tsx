"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSend, IconRobot, IconUser } from "@tabler/icons-react";

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
        <div className="min-h-screen pt-40 px-4 pb-20 flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col h-[70vh]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 flex justify-center items-center gap-2">
                        <span className="text-cyan-400">AI</span> Portfolio Assistant
                    </h1>
                    <p className="text-neutral-400 text-sm">
                        Ask about my projects, skills, and experience.
                    </p>
                </motion.div>

                {/* Chat Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-grow flex flex-col bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
                >

                    {/* Messages Area */}
                    <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar">
                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] rounded-2xl p-4 flex items-start gap-3 ${msg.sender === "user"
                                            ? "bg-cyan-600/20 text-cyan-100 border border-cyan-500/30 rounded-br-none"
                                            : "bg-neutral-800 text-neutral-200 border border-neutral-700/50 rounded-bl-none"
                                        }`}>
                                        <div className={`mt-1 p-1 rounded-full ${msg.sender === "user" ? "bg-cyan-500/20" : "bg-neutral-700/50"}`}>
                                            {msg.sender === "user" ? <IconUser size={16} /> : <IconRobot size={16} />}
                                        </div>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-neutral-800 bg-neutral-900">
                        <form onSubmit={handleSend} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your question here..."
                                className="w-full pl-5 pr-14 py-4 rounded-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="absolute right-2 top-2 p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 transition-colors"
                            >
                                <IconSend size={20} />
                            </button>
                        </form>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}
