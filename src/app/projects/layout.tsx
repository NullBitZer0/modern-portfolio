import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects",
    description:
        "A collection of ML, AI, and software engineering projects — from production systems to university coursework to learning experiments.",
    openGraph: {
        title: "All Projects | Adeesha Perera",
        description:
            "Explore my portfolio of ML, AI, and software engineering projects across production, university, and learning categories.",
        url: "https://adeeshaperera.me/projects",
    },
    twitter: {
        title: "All Projects | Adeesha Perera",
        description:
            "A collection of ML, AI, and software engineering projects by Adeesha Perera.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/projects",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
