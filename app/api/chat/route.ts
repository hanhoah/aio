import { NextResponse } from "next/server";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/chatbot-knowledge";

export const runtime = "edge";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: Message[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Keine Nachrichten übermittelt." }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      console.error("DEEPSEEK_API_KEY fehlt in den Umgebungsvariablen");
      return NextResponse.json({ error: "Chatbot nicht konfiguriert." }, { status: 500 });
    }

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: CHATBOT_SYSTEM_PROMPT },
          ...messages.slice(-10), // max 10 Nachrichten Kontext
        ],
        stream: true,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API Fehler:", response.status, errorText);
      return NextResponse.json({ error: "KI-Dienst momentan nicht verfügbar." }, { status: 502 });
    }

    // Stream direkt weiterleiten
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API Fehler:", error);
    return NextResponse.json({ error: "Interner Serverfehler." }, { status: 500 });
  }
}
