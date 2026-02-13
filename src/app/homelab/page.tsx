"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Server, Shield, HardDrive, Activity, Cloud, Eye, Monitor, Database, Wifi, Container, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

type Service = {
    name: string;
    description: string;
    category: "monitoring" | "storage" | "networking" | "media" | "security" | "automation";
    icon: React.ReactNode;
    status: "running" | "stopped";
    port?: string;
};

const services: Service[] = [
    {
        name: "Grafana",
        description: "Metrics visualization and dashboarding for system monitoring",
        category: "monitoring",
        icon: <Activity className="h-5 w-5" />,
        status: "running",
        port: "3000"
    },
    {
        name: "Prometheus",
        description: "Time-series database for collecting and querying metrics",
        category: "monitoring",
        icon: <Database className="h-5 w-5" />,
        status: "running",
        port: "9090"
    },
    {
        name: "Uptime Kuma",
        description: "Self-hosted monitoring tool for tracking service uptime",
        category: "monitoring",
        icon: <Eye className="h-5 w-5" />,
        status: "running",
        port: "3001"
    },
    {
        name: "Nextcloud",
        description: "Self-hosted cloud storage and collaboration platform",
        category: "storage",
        icon: <Cloud className="h-5 w-5" />,
        status: "running",
        port: "8080"
    },
    {
        name: "Portainer",
        description: "Docker container management UI for easy deployment",
        category: "automation",
        icon: <Container className="h-5 w-5" />,
        status: "running",
        port: "9443"
    },
    {
        name: "Nginx Proxy Manager",
        description: "Reverse proxy with SSL termination and access control",
        category: "networking",
        icon: <Wifi className="h-5 w-5" />,
        status: "running",
        port: "81"
    },
    {
        name: "Pi-hole",
        description: "Network-wide ad blocking and DNS sinkhole",
        category: "security",
        icon: <Shield className="h-5 w-5" />,
        status: "running",
        port: "80"
    },
    {
        name: "Jellyfin",
        description: "Open-source media streaming server for movies and music",
        category: "media",
        icon: <Monitor className="h-5 w-5" />,
        status: "running",
        port: "8096"
    },
    {
        name: "Home Assistant",
        description: "Smart home automation and IoT device management",
        category: "automation",
        icon: <Server className="h-5 w-5" />,
        status: "running",
        port: "8123"
    },
    {
        name: "Vaultwarden",
        description: "Self-hosted password manager compatible with Bitwarden",
        category: "security",
        icon: <Shield className="h-5 w-5" />,
        status: "running",
        port: "8443"
    },
];

const categories = [
    { key: "all", label: "All Services" },
    { key: "monitoring", label: "Monitoring" },
    { key: "storage", label: "Storage" },
    { key: "networking", label: "Networking" },
    { key: "security", label: "Security" },
    { key: "media", label: "Media" },
    { key: "automation", label: "Automation" },
];

const getCategoryColor = (category: string) => {
    switch (category) {
        case "monitoring": return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400";
        case "storage": return "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400";
        case "networking": return "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400";
        case "security": return "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400";
        case "media": return "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400";
        case "automation": return "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400";
        default: return "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400";
    }
};

export default function Homelab() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showArchitecture, setShowArchitecture] = useState(false);

    const filteredServices = activeCategory === "all"
        ? services
        : services.filter(s => s.category === activeCategory);

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
                        <span className="text-gray-400">Self-Hosted</span> Homelab
                    </h1>
                    <p className="text-gray-400 dark:text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        A personal infrastructure running {services.length}+ containerized services — built for learning, privacy, and production-grade experience with DevOps tooling.
                    </p>
                </motion.div>

                {/* Infrastructure Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: "Services", value: `${services.length}+`, icon: <Container className="h-4 w-4" /> },
                        { label: "Uptime", value: "99.9%", icon: <Activity className="h-4 w-4" /> },
                        { label: "Containers", value: `${services.length}+`, icon: <Server className="h-4 w-4" /> },
                        { label: "Storage", value: "4TB+", icon: <HardDrive className="h-4 w-4" /> },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 text-center"
                        >
                            <div className="flex justify-center mb-2 text-gray-400">{stat.icon}</div>
                            <div className="text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Architecture Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-12"
                >
                    <button
                        onClick={() => setShowArchitecture(!showArchitecture)}
                        className="w-full flex items-center justify-between p-5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-600 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Server className="h-5 w-5 text-gray-400" />
                            <div className="text-left">
                                <span className="font-medium text-sm text-black dark:text-white">Infrastructure Architecture</span>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Network topology and service layout</p>
                            </div>
                        </div>
                        {showArchitecture ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                    </button>

                    {showArchitecture && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-3 rounded-xl border border-gray-200 dark:border-zinc-800 p-6 overflow-hidden"
                        >
                            <div className="font-mono text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre overflow-x-auto">
                                {`┌─────────────────────────────────────────────────────────┐
│                      INTERNET                           │
└────────────────────────┬────────────────────────────────┘
                         │
                    ┌────▼────┐
                    │ Router  │
                    │ Pi-hole │  ← DNS & Ad Blocking
                    └────┬────┘
                         │
               ┌─────────▼─────────┐
               │  Nginx Proxy Mgr  │  ← SSL / Reverse Proxy
               └─────────┬─────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
   ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
   │ Monitoring │  │  Storage  │  │  Services  │
   │            │  │           │  │            │
   │ Grafana    │  │ Nextcloud │  │ Jellyfin   │
   │ Prometheus │  │ Vault-    │  │ Home Asst  │
   │ Uptime     │  │  warden   │  │ Portainer  │
   └────────────┘  └───────────┘  └────────────┘
         │               │               │
         └───────────────┼───────────────┘
                         │
               ┌─────────▼─────────┐
               │   Docker Engine   │
               │   Ubuntu Server   │
               └───────────────────┘`}
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Services
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === cat.key
                                        ? "bg-black dark:bg-white text-white dark:text-black"
                                        : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * index }}
                            className="group p-5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-600 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-2.5 rounded-xl ${getCategoryColor(service.category)}`}>
                                    {service.icon}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-medium text-sm text-black dark:text-white">{service.name}</span>
                                        <div className="flex items-center gap-2">
                                            {service.port && (
                                                <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600">:{service.port}</span>
                                            )}
                                            <span className="relative flex h-2 w-2">
                                                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${service.status === "running" ? "bg-emerald-400" : "bg-red-400"
                                                    }`} />
                                                <span className={`relative inline-flex h-2 w-2 rounded-full ${service.status === "running" ? "bg-emerald-500" : "bg-red-500"
                                                    }`} />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Stack & Tools
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Docker", "Docker Compose", "Ubuntu Server", "Nginx", "Let's Encrypt",
                            "Cloudflare", "SSH", "Bash", "Cron", "Git", "YAML", "Prometheus", "Grafana"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Why Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mb-16"
                >
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                        Why I Built This
                    </h2>
                    <div className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>
                            Running a homelab isn&apos;t just a hobby — it&apos;s a production-grade learning environment where I practice real DevOps workflows: container orchestration, reverse proxying, SSL management, monitoring, and backup strategies.
                        </p>
                        <p>
                            Every service runs in Docker containers managed via Docker Compose, with automated health checks and Grafana dashboards for observability. This setup mirrors enterprise infrastructure patterns at a personal scale.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
