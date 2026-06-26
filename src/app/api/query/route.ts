import { NextRequest, NextResponse } from "next/server";

const RAG_API_URL = process.env.NEXT_PUBLIC_RAG_API_URL || "http://uu046uuagdooowl3dmx12t97.140.245.59.209.sslip.io";
const RAG_API_KEY = process.env.RAG_API_KEY || "";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        if (RAG_API_KEY) headers["X-API-Key"] = RAG_API_KEY;
        const response = await fetch(`${RAG_API_URL}/query`, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json({ error: "Failed to reach RAG backend" }, { status: 502 });
    }
}
