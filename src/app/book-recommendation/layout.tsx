import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Recommendation System",
    description:
        "NCF-based collaborative filtering, BERT embeddings, NLP processing, deployed on AWS with Terraform infrastructure-as-code.",
    openGraph: {
        title: "Book Recommendation System | Adeesha Perera",
        description:
            "A production-grade book recommendation system using Neural Collaborative Filtering, BERT, and NLP, deployed on AWS with Terraform.",
        url: "https://adeeshaperera.me/book-recommendation",
    },
    twitter: {
        title: "Book Recommendation System | Adeesha Perera",
        description:
            "NCF collaborative filtering, BERT embeddings, NLP processing — deployed on AWS with Terraform.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/book-recommendation",
    },
};

export default function BookRecommendationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
