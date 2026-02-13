"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <div className="relative flex items-center justify-between p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-neutral-200 dark:border-white/[0.2] shadow-sm">
                <Link href="/" className="px-4 py-2 text-sm font-bold text-black dark:text-white hover:opacity-80 transition-opacity">
                    Adeesha<span className="text-cyan-500">.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-6 px-4">
                    <NavLink href="/" active={pathname === "/"}>Home</NavLink>
                    <NavLink href="/ai-assistant" active={pathname === "/ai-assistant"}>AI Assistant</NavLink>
                    <NavLink href="/ai-news" active={pathname === "/ai-news"}>AI News</NavLink>
                    <NavLink href="/projects" active={pathname === "/projects"}>Projects</NavLink>
                    <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
                    <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
                </div>

                {/* Mobile Menu Icon Placeholder - for now just hide on mobile or stack */}
                <div className="md:hidden pr-2">
                    {/* Simple mobile indicator or menu could go here */}
                </div>
            </div>
        </div>
    );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-cyan-500",
                active ? "text-cyan-500" : "text-neutral-600 dark:text-neutral-300"
            )}
        >
            {children}
        </Link>
    );
}
