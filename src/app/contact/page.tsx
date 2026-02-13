"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Contact() {
    return (
        <div className="min-h-screen pt-40 px-4 pb-20">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        Have a project idea or want to discuss AI automation? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full"
                    >
                        <div className="shadow-input w-full rounded-2xl bg-white p-4 md:p-8 dark:bg-black border border-neutral-800">
                            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                                Send a Message
                            </h2>
                            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                                I'll get back to you as soon as possible.
                            </p>

                            <form className="my-8" onSubmit={(e) => { e.preventDefault(); alert('Message sent! (Demo purposes)'); }}>
                                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                                    <LabelInputContainer>
                                        <Label htmlFor="firstname">First name</Label>
                                        <Input id="firstname" placeholder="Tyler" type="text" />
                                    </LabelInputContainer>
                                    <LabelInputContainer>
                                        <Label htmlFor="lastname">Last name</Label>
                                        <Input id="lastname" placeholder="Durden" type="text" />
                                    </LabelInputContainer>
                                </div>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-8">
                                    <Label htmlFor="message">Message</Label>
                                    <textarea
                                        id="message"
                                        placeholder="Your message here..."
                                        className="flex min-h-[120px] w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 resize-none"
                                    />
                                </LabelInputContainer>

                                <button
                                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                    type="submit"
                                >
                                    Send Message &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                                <div className="flex flex-col space-y-4">
                                    {/* Social Buttons can go here if desired, or keep the right column */}
                                    <p className="text-center text-xs text-neutral-500">
                                        Or connect via social platforms on the right.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center space-y-6"
                    >
                        <SocialCard
                            icon={<IconMail className="w-8 h-8 text-cyan-400" />}
                            label="Email"
                            value="hello@adeesha.dev"
                            href="mailto:hello@adeesha.dev"
                        />
                        <SocialCard
                            icon={<IconBrandLinkedin className="w-8 h-8 text-cyan-400" />}
                            label="LinkedIn"
                            value="linkedin.com/in/adeesha-dev"
                            href="#"
                        />
                        <SocialCard
                            icon={<IconBrandGithub className="w-8 h-8 text-cyan-400" />}
                            label="GitHub"
                            value="github.com/adeesha-dev"
                            href="#"
                        />
                    </motion.div>

                </div>

            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

function SocialCard({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
    return (
        <a href={href} className="relative group/btn flex items-center space-x-6 p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all">
            <div className="p-4 rounded-2xl bg-neutral-800 group-hover/btn:bg-neutral-700 transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="text-sm text-neutral-400 mb-1">{label}</h3>
                <p className="text-lg font-medium text-white group-hover/btn:text-cyan-400 transition-colors">{value}</p>
            </div>
            <BottomGradient />
        </a>
    );
}
