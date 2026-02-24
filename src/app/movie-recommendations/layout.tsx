import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Movie Recommendations",
    description:
        "Personalized movie recommendations powered by collaborative filtering and content-based AI models trained on real viewing data — by Adeesha Perera.",
    openGraph: {
        title: "AI Movie Recommendations | Adeesha Perera",
        description:
            "Get personalized movie recommendations powered by collaborative filtering and content-based AI models.",
        url: "https://adeeshaperera.me/movie-recommendations",
    },
    twitter: {
        title: "AI Movie Recommendations | Adeesha Perera",
        description:
            "Personalized movie recommendations powered by AI models trained on real viewing data.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/movie-recommendations",
    },
};

export default function MovieRecommendationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
