import React from "react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-black py-8 border-t border-neutral-200 dark:border-white/[0.2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
                &copy; {new Date().getFullYear()} Modern Portfolio. All rights reserved.
            </div>
        </footer>
    );
}
