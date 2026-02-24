import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Portfolio Assistant",
    description:
        "Chat with Adeesha Perera's AI assistant — a RAG-based system that answers questions about skills, projects, and experience using LangChain and vector stores.",
    openGraph: {
        title: "AI Portfolio Assistant | Adeesha Perera",
        description:
            "Interactive RAG-based AI assistant that answers questions about Adeesha's work, skills, and experience.",
        url: "https://adeeshaperera.me/ai-assistant",
    },
    twitter: {
        title: "AI Portfolio Assistant | Adeesha Perera",
        description:
            "Interactive RAG-based AI assistant built with LangChain and vector stores.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/ai-assistant",
    },
};

export default function AIAssistantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
