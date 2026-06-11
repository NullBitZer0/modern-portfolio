import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real-Time Fraud Detection",
    description:
        "Production-grade real-time credit card fraud detection system with sub-15ms latency, online feature store, and 3-tier decision framework.",
    openGraph: {
        title: "Real-Time Fraud Detection | Adeesha Perera",
        description:
            "Real-time credit card fraud detection with CatBoost, Feast feature store, Kafka streaming, and automated MLOps lifecycle.",
        url: "https://adeeshaperera.me/fraud-detection",
    },
    twitter: {
        title: "Real-Time Fraud Detection | Adeesha Perera",
        description:
            "Production-grade fraud detection with sub-15ms latency, online/offline feature store, and automated retraining pipeline.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/fraud-detection",
    },
};

export default function FraudDetectionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
