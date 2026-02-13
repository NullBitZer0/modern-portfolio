"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
    text: string;
    interval?: number;
    encryptedClassName?: string;
    revealedClassName?: string;
    revealDelayMs?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

export const EncryptedText = ({
    text,
    interval = 50,
    encryptedClassName,
    revealedClassName,
    revealDelayMs = 0,
}: EncryptedTextProps) => {
    const [outputText, setOutputText] = useState("");
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let delayTimer: NodeJS.Timeout;

        const startAnimation = () => {
            let iteration = 0;
            clearInterval(timer);

            timer = setInterval(() => {
                setOutputText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(timer);
                }

                iteration += 1 / 3;
            }, interval);
        };

        delayTimer = setTimeout(startAnimation, revealDelayMs);

        return () => {
            clearInterval(timer);
            clearTimeout(delayTimer);
        };
    }, [text, interval, revealDelayMs]);

    return (
        <span
            className={cn(
                "inline-block",
                outputText === text ? revealedClassName : encryptedClassName
            )}
        >
            {outputText}
        </span>
    );
};
