import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Self-Hosted Homelab",
    description:
        "Adeesha Perera's self-hosted homelab running 15+ Docker containers — Grafana, Prometheus, Nextcloud, OpenClaw AI agent, automated bots, and more on Ubuntu Server.",
    openGraph: {
        title: "Self-Hosted Homelab | Adeesha Perera",
        description:
            "15+ containerized services including monitoring, AI agents, automated bots, cloud storage, and IoT automation — all self-hosted on Docker.",
        url: "https://adeeshaperera.me/homelab",
    },
    twitter: {
        title: "Self-Hosted Homelab | Adeesha Perera",
        description:
            "15+ containerized services including monitoring, AI agents, automated bots, cloud storage, and IoT automation.",
    },
    alternates: {
        canonical: "https://adeeshaperera.me/homelab",
    },
};

export default function HomelabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
