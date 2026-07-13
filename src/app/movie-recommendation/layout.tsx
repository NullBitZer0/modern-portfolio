import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie Recommendation System",
    description:
        "End-to-end movie recommendation engine with TF-IDF content-based filtering, SVD collaborative filtering, and popularity-based ranking on MovieLens 100K.",
    openGraph: {
        title: "Movie Recommendation System | Adeesha Perera",
        description:
            "Movie recommendation system with content-based filtering, collaborative filtering, and interactive Streamlit UI.",
        url: "https://adeeshaperera.me/movie-recommendation",
    },
    twitter: {
        title: "Movie Recommendation System | Adeesha Perera",
        description:
            "TF-IDF, SVD, popularity-based ranking on MovieLens 100K with Streamlit UI.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/movie-recommendation",
    },
};

export default function MovieRecommendationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
