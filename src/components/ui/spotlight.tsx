"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({
    className,
    fill,
}: {
    className?: string;
    fill?: string;
}) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter0_f_292_205)">
                <path
                    fill={fill || "white"}
                    fillOpacity="0.21"
                    d="M208.09 1740.57C184.587 1845.03 3.52834 1957.99 3.52834 1957.99L5.5977 2200.67C5.5977 2200.67 -32.556 2204.64 125.132 2162.33C282.819 2120.02 590.264 2002.43 732.127 1943.08C873.99 1883.73 1032.74 1797.13 1032.74 1797.13L1676.71 190.179C1676.71 190.179 1718.3 150.187 1422.58 6.95356C1126.86 -136.279 845.289 198.857 845.289 198.857L208.09 1740.57Z"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_292_205"
                    x="0.860352"
                    y="-137.942"
                    width="3785.16"
                    height="2840.48"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_292_205"
                    />
                </filter>
            </defs>
        </svg>
    );
};
