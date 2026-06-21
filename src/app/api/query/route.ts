import { NextRequest, NextResponse } from "next/server";

const RAG_API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || "http://uu046uuagdooowl3dmx12t97.140.245.59.209.sslip.io";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const response = await fetch(`${RAG_API_URL}/query`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: "Failed to reach RAG backend" }, { status: 502 });
    }
}
