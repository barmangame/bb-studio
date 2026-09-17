"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Chat() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const [input, setInput] = useState("");

  // ... بقیه کد دقیقاً همون قبلی
  const isLoading = status === "submitted" || status === "streaming";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = input.trim();

    if (!text || isLoading) {
      return;
    }

    sendMessage({
      text,
    });

    setInput("");
  }

  return (
    <div dir="rtl" className="w-full p-3 sm:p-5">
      <div className="min-h-[220px] space-y-4 sm:min-h-[280px]">
        {messages.length === 0 ? (
          <div className="flex min-h-[220px] flex-col items-center justify-center px-4 text-center sm:min-h-[280px]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-xl text-white/60">
              ✦
            </div>

            <h3 className="text-base font-medium text-white/80">
              سلام! من دستیار B&B Studio هستم.
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
              درباره طراحی سایت، برنامه‌نویسی یا ایده پروژه‌ات هر سوالی داری،
              اینجا بپرس.
            </p>
          </div>
        ) : (
          messages.map((message) => {
            const isUser = message.role === "user";

            return (
              <div
                key={message.id}
                className={`flex ${
                  isUser ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-7 sm:max-w-[80%] ${
                    isUser
                      ? "border border-white/[0.08] bg-white/[0.05] text-white/80"
                      : "border border-white/[0.06] bg-white/[0.025] text-white/60"
                  }`}
                >
                  <div className="mb-1.5 text-[11px] font-medium text-white/30">
                    {isUser ? "شما" : "B&B AI"}
                  </div>

                  <p className="whitespace-pre-wrap break-words">
                    {message.parts
                      ?.filter((part) => part.type === "text")
                      .map((part, index) => (
                        <span key={index}>{part.text}</span>
                      ))}
                  </p>
                </div>
              </div>
            );
          })
        )}

        {isLoading && (
          <div className="flex justify-end">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/40 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/40 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
            خطا: {error.message || "خطایی در ارتباط با دستیار رخ داد."}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 transition focus-within:border-white/[0.16] focus-within:bg-white/[0.04]">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="سوالی درباره پروژه‌ات داری؟"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/25"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span className="hidden sm:inline">ارسال</span>
            <span className="sm:hidden">↑</span>
          </button>
        </div>

        <p className="mt-3 text-center text-[10px] text-white/20 sm:text-xs">
          B&B AI ممکن است همیشه پاسخ کاملاً دقیق ارائه ندهد.
        </p>
      </form>
    </div>
  );
}