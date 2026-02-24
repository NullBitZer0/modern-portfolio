import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI News & Insights",
    description:
        "Automated AI news aggregation powered by LLMs and n8n workflows — curated articles on LLMs, open-source AI, autonomous agents, and machine learning trends.",
    openGraph: {
        title: "AI News & Insights | Adeesha Perera",
        description:
            "Automated AI news pipeline: fetched, summarized by LLMs, and published via n8n workflow automation.",
        url: "https://adeeshaperera.me/ai-news",
    },
    twitter: {
        title: "AI News & Insights | Adeesha Perera",
        description:
            "Automated AI news aggregation powered by LLMs and n8n workflows.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/ai-news",
    },
};

export default function AINewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
