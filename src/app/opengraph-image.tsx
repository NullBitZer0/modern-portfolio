import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Adeesha Perera — AI Engineer & Full-Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#0a0a0a",
                    padding: "60px 80px",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Gradient accent */}
                <div
                    style={{
                        position: "absolute",
                        top: "-200px",
                        right: "-200px",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 700,
                            color: "#ffffff",
                            marginBottom: 16,
                            letterSpacing: "-2px",
                            lineHeight: 1.1,
                        }}
                    >
                        Adeesha Perera
                    </div>

                    <div
                        style={{
                            fontSize: 28,
                            color: "#a1a1aa",
                            marginBottom: 40,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        AI Engineer & Full-Stack Developer
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                        }}
                    >
                        {["RAG", "LLMs", "Next.js", "Python", "Docker", "Homelab"].map(
                            (tag) => (
                                <div
                                    key={tag}
                                    style={{
                                        fontSize: 16,
                                        color: "#71717a",
                                        padding: "6px 16px",
                                        border: "1px solid #27272a",
                                        borderRadius: "20px",
                                    }}
                                >
                                    {tag}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Domain */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 50,
                        right: 80,
                        fontSize: 20,
                        color: "#52525b",
                        letterSpacing: "0.5px",
                    }}
                >
                    adeeshaperera.me
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
