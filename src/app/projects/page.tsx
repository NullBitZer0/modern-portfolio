"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Projects() {
    const projects = [
        {
            title: "CarbonBridge",
            description: "A platform for tracking and reducing carbon footprints with AI analysis.",
            link: "/project/carbonbridge",
        },
        {
            title: "AI Portfolio Assistant",
            description: "An interactive assistant that answers questions about my portfolio using local documents.",
            link: "/ai-assistant",
        },
        {
            title: "AI News Automation",
            description: "End-to-end news aggregation pipeline that fetches, summarizes, and publishes AI news.",
            link: "/ai-news",
        }
    ];

    return (
        <div className="min-h-screen pt-40 px-4 pb-20">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-2"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        A selection of my work in AI, Automation, and Web Development.
                    </p>
                </motion.div>

                <HoverEffect items={projects} />

            </div>
        </div>
    );
}
