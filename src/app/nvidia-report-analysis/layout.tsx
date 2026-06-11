import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NVIDIA Report Analysis",
    description:
        "NLP-based NVIDIA financial report analysis using FinBERT sentiment scoring, web scraping, LSTM OHLC prediction, and Telegram alerts.",
    openGraph: {
        title: "NVIDIA Report Analysis | Adeesha Perera",
        description:
            "FinBERT sentiment analysis on NVIDIA reports, LSTM price prediction, and real-time Telegram notifications.",
        url: "https://adeeshaperera.me/nvidia-report-analysis",
    },
    twitter: {
        title: "NVIDIA Report Analysis | Adeesha Perera",
        description:
            "NLP-driven NVIDIA report analysis with FinBERT sentiment, LSTM OHLC prediction, and Telegram alerts.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/nvidia-report-analysis",
    },
};

export default function NvidiaReportAnalysisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
