import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SpamShield AI — Enterprise Spam Detection",
    description:
        "Enterprise spam detection with DistilBERT, FastAPI, Streamlit, deployed on AWS SageMaker with Terraform infrastructure-as-code.",
    openGraph: {
        title: "SpamShield AI | Adeesha Perera",
        description:
            "Production-grade spam detection using DistilBERT transformers, deployed on AWS SageMaker with Terraform IaC and Docker.",
        url: "https://adeeshaperera.me/spam-classification",
    },
    twitter: {
        title: "SpamShield AI | Adeesha Perera",
        description:
            "Enterprise spam detection with DistilBERT, SageMaker, and Terraform.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/spam-classification",
    },
};

export default function SpamClassificationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
