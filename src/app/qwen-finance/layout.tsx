import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fine-Tuned Qwen for Finance",
    description:
        "Fine-tuned Qwen 0.8B model for financial language understanding and insight extraction.",
    openGraph: {
        title: "Fine-Tuned Qwen for Finance | Adeesha Perera",
        description:
            "Fine-tuning Qwen 0.8B to understand financial language and extract insights — currently in progress.",
        url: "https://adeeshaperera.me/qwen-finance",
    },
    twitter: {
        title: "Fine-Tuned Qwen for Finance | Adeesha Perera",
        description:
            "Fine-tuned Qwen 0.8B model for financial NLP and insight extraction.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/qwen-finance",
    },
};

export default function QwenFinanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
