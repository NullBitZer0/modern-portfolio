import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AWS Data Pipeline — Serverless Analytics",
    description:
        "Automated serverless data pipeline ingesting Finnhub stock data via EventBridge and Lambda, transformed with Glue and Athena, visualised with QuickSight dashboards.",
    openGraph: {
        title: "AWS Data Pipeline | Adeesha Perera",
        description:
            "End-to-end serverless data pipeline on AWS — Finnhub API, EventBridge, Lambda, Glue, Athena, and QuickSight dashboards.",
        url: "https://adeeshaperera.me/aws-data-pipeline",
    },
    twitter: {
        title: "AWS Data Pipeline | Adeesha Perera",
        description:
            "Serverless analytics pipeline — Finnhub API, EventBridge, Lambda, Glue, Athena, QuickSight.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/aws-data-pipeline",
    },
};

export default function AWSDataPipelineLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
