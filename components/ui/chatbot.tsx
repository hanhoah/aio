"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Bot, X, Send, Loader2, MessageSquare } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hallo! Ich bin der KI-Assistent von aio-consulting. Ich beantworte gerne Ihre Fragen zu unseren Leistungen, Preisen oder dem Ablauf einer Zusammenarbeit. Wie kann ich Ihnen helfen?",
};

const SUGGESTED_QUESTIONS = [
  "Was kostet ein Chatbot?",
  "Wie schnell ist Umsetzung möglich?",
  "Was ist GEO & KI-SEO?",
];

// --- Markdown Renderer ---

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={i} className="bg-white/10 px-1 rounded text-xs font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function MarkdownText({ text }: { text: string }) {
  if (!text) return null;
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="space-y-2">
      {paragraphs.map((para, pi) => {
        const lines = para.split("\n").filter(Boolean);
        const isList = lines.length > 0 && lines.every((l) => /^[-*] /.test(l));

        if (isList) {
          return (
            <ul key={pi} className="space-y-1">
              {lines.map((l, li) => (
                <li key={li} className="flex items-start gap-2">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5">•</span>
                  <span>{renderInline(l.replace(/^[-*] /, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={pi} className="leading-relaxed">
            {lines.map((line, li) => (
              <React.Fragment key={li}>
                {renderInline(line)}
                {li < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

// --- Main Component ---

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Nur nach Hydration rendern — verhindert SSR/Client-Mismatch in dev (Strict Mode)
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = { role: "user", content: trimmed };
      const allMessages = [...messages, userMessage];

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      abortRef.current = new AbortController();

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: allMessages }),
          signal: abortRef.current.signal,
        });

        if (!response.ok || !response.body) {
          throw new Error("Antwort fehlgeschlagen");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = "";
        // Buffer für unvollständige SSE-Zeilen (Chunk-Grenzen)
        let lineBuffer = "";

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          lineBuffer += decoder.decode(value, { stream: true });
          const lines = lineBuffer.split("\n");
          // Letzte (potenziell unvollständige) Zeile im Buffer behalten
          lineBuffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data: ")) continue;
            const data = trimmedLine.slice(6).trim();
            if (data === "[DONE]") break;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (typeof delta === "string") {
                assistantText += delta;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: assistantText,
                  };
                  return updated;
                });
              }
            } catch {
              // Ungültiges JSON-Fragment — normal bei SSE, überspringen
            }
          }
        }

        if (!isOpen) setHasNewMessage(true);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === "AbortError") return;
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Entschuldigung, da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@aio-consulting.de.",
          },
        ]);
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [messages, isLoading, isOpen]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40 flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <>
            <Bot size={22} />
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
            )}
          </>
        )}
      </button>

      {/* Chat Panel — 420px (~20% breiter als vorher), mobilsicher */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-1.5rem)] flex flex-col rounded-2xl border border-white/10 bg-[#0d1526] shadow-2xl shadow-black/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-[#080d1a]">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Bot size={15} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">aio-Assistent</p>
              <p className="text-xs text-slate-400">Fragen zu Leistungen & Preisen</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-slate-400">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[420px] min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-500/30 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <Bot size={11} className="text-blue-400" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm leading-relaxed"
                      : "bg-white/[0.06] text-slate-200 rounded-bl-sm border border-white/5"
                  }`}
                >
                  {msg.role === "user" ? (
                    msg.content
                  ) : msg.content ? (
                    <MarkdownText text={msg.content} />
                  ) : (
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Loader2 size={12} className="animate-spin" />
                      <span className="text-xs">Schreibt…</span>
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Suggested questions — nur beim Start */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-1.5 pt-1">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left text-xs px-3 py-2 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors"
                  >
                    <MessageSquare size={10} className="inline mr-1.5 opacity-70" />
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-white/10 bg-[#080d1a]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ihre Frage…"
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Senden"
              className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 size={14} className="text-white animate-spin" />
              ) : (
                <Send size={14} className="text-white" />
              )}
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-600 py-1.5 border-t border-white/5 bg-[#080d1a]">
            KI-gestützt · Kein Ersatz für persönliche Beratung
          </p>
        </div>
      )}
    </>
  );
}
