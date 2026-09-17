"use client";

import { useEffect, useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

const projectTypes = [
  "وب‌سایت",
  "فروشگاه",
  "اپلیکیشن",
  "پروژه سفارشی",
];

const budgets = [
  "زیر ۵ میلیون",
  "۵ تا ۱۰ میلیون",
  "۱۰ تا ۱۵ میلیون",
  "بیشتر از ۱۵ میلیون",
  "هنوز مشخص نیست",
];

type Status = "idle" | "sending" | "success" | "error";

const sendingSteps = [
  "بررسی اطلاعات درخواست",
  "آماده‌سازی پیام",
  "اتصال به B&B Studio",
  "ارسال ایمیل",
];

export default function ProjectContactForm() {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [messageInside, setMessageInside] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);

  useEffect(() => {
    if (status !== "sending") return;

    setStep(0);
    setShowEnvelope(false);
    setMessageInside(false);
    setFinishAnimation(false);

    const timers = [
      setTimeout(() => setStep(1), 900),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2700),
      setTimeout(() => setShowEnvelope(true), 3400),
      setTimeout(() => setMessageInside(true), 4300),
      setTimeout(() => setFinishAnimation(true), 5300),
    ];

    return () => timers.forEach(clearTimeout);
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const result = await sendContactEmail({
      name,
      email,
      projectType,
      budget,
      description,
    });

    if (result.success) {
      setTimeout(() => {
        setStatus("success");
      }, 6200);
    } else {
      console.error(result.error);
      setStatus("error");
    }
  }

  function resetForm() {
    setProjectType("");
    setBudget("");
    setName("");
    setDescription("");
    setEmail("");
    setStatus("idle");
    setStep(0);
    setShowEnvelope(false);
    setMessageInside(false);
    setFinishAnimation(false);
  }

  if (status === "success") {
    return (
      <div className="relative flex min-h-[620px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl">
        <div className="absolute h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px] animate-pulse" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping" />
            <div className="absolute inset-2 rounded-full border border-emerald-400/30 animate-[spin_5s_linear_infinite]" />

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 shadow-[0_0_80px_rgba(52,211,153,0.2)]">
              <svg
                viewBox="0 0 52 52"
                className="h-10 w-10 text-emerald-300"
                fill="none"
              >
                <path
                  d="M14 27L22 35L39 17"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  className="animate-[check_0.7s_ease-out_forwards]"
                />
              </svg>
            </div>
          </div>

          <span className="mb-3 text-[10px] tracking-[0.35em] text-emerald-300/60">
            B&B STUDIO
          </span>

          <h3 className="text-2xl font-semibold text-white">
            درخواستت ارسال شد
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-white/40">
            پیام شما با موفقیت برای B&B Studio ارسال شد.
            <br />
            به‌زودی بررسی می‌شود.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 py-3 text-xs text-white/50 transition hover:bg-white/[0.07] hover:text-white"
          >
            ارسال یک درخواست دیگر
          </button>
        </div>
      </div>
    );
  }

  if (status === "sending") {
    return (
      <div className="relative flex min-h-[620px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-xl">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[110px]" />

        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          <div className="mb-10 text-center">
            <span className="text-[10px] tracking-[0.35em] text-cyan-300/50">
              B&B STUDIO
            </span>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {finishAnimation ? "پیام ارسال شد" : "در حال ارسال درخواست"}
            </h3>

            <p className="mt-2 text-xs text-white/25">
              {finishAnimation
                ? "درخواست شما با موفقیت تحویل داده شد"
                : "لطفاً چند لحظه صبر کنید"}
            </p>
          </div>

          {!showEnvelope ? (
            <div className="w-full space-y-3">
              {sendingSteps.map((item, index) => {
                const active = index === step;
                const completed = index < step;

                return (
                  <div
                    key={item}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-700 ${
                      active
                        ? "border-cyan-300/20 bg-cyan-300/[0.07]"
                        : completed
                          ? "border-white/[0.05] bg-white/[0.025]"
                          : "border-white/[0.04] bg-white/[0.01]"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-700 ${
                        active
                          ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                          : completed
                            ? "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-300"
                            : "border-white/[0.06] bg-white/[0.02] text-white/15"
                      }`}
                    >
                      {completed ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                        >
                          <path
                            d="M5 12.5L9.5 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <span className="text-[10px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-xs transition-all duration-700 ${
                        active
                          ? "font-medium text-white"
                          : completed
                            ? "text-white/35"
                            : "text-white/15"
                      }`}
                    >
                      {item}
                    </span>

                    {active && (
                      <div className="mr-auto flex gap-1">
                        <span className="h-1 w-1 rounded-full bg-cyan-300 animate-bounce" />
                        <span className="h-1 w-1 rounded-full bg-cyan-300 animate-bounce [animation-delay:150ms]" />
                        <span className="h-1 w-1 rounded-full bg-cyan-300 animate-bounce [animation-delay:300ms]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="relative flex h-72 w-full items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-[80px] animate-pulse" />

              <div
                className={`absolute z-20 flex h-28 w-40 items-center justify-center rounded-2xl border border-white/[0.12] bg-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-all duration-1000 ${
                  finishAnimation ? "scale-90 opacity-70" : "scale-100"
                }`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute left-0 top-0 h-1/2 w-1/2 border-r border-b border-white/[0.07] [clip-path:polygon(0_0,100%_0,0_100%)]" />
                  <div className="absolute right-0 top-0 h-1/2 w-1/2 border-l border-b border-white/[0.07] [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                </div>

                <svg
                  viewBox="0 0 24 24"
                  className="relative z-10 h-10 w-10 text-cyan-200 drop-shadow-[0_0_20px_rgba(103,232,249,0.35)]"
                  fill="none"
                >
                  <path
                    d="M3 6.5L12 13L21 6.5M4 18.5H20C20.55 18.5 21 18.05 21 17.5V6.5C21 5.95 20.55 5.5 20 5.5H4C3.45 5.5 3 5.95 3 6.5V17.5C3 18.05 3.45 18.5 4 18.5Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-3 py-1 text-[8px] tracking-[0.25em] text-cyan-200/40">
                  EMAIL
                </div>
              </div>

              {!messageInside && (
                <div className="absolute z-30 flex h-12 w-28 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.08] px-3 shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl animate-[messageFly_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
                  <div className="h-7 w-7 shrink-0 rounded-lg bg-white/[0.08] p-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-full w-full text-white/60"
                      fill="none"
                    >
                      <path
                        d="M4 6H20V18H4V6ZM4 7L12 13L20 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="space-y-1">
                    <div className="h-1.5 w-12 rounded-full bg-white/25" />
                    <div className="h-1 w-8 rounded-full bg-white/10" />
                  </div>
                </div>
              )}

              {messageInside && (
                <div className="absolute z-10 h-20 w-28 rounded-xl border border-cyan-300/10 bg-cyan-300/[0.03] opacity-0 animate-[messageInside_0.9s_ease-in_forwards]" />
              )}

              <div
                className={`absolute bottom-5 rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-[10px] text-white/25 transition-all duration-700 ${
                  finishAnimation
                    ? "translate-y-3 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                پیام در حال انتقال...
              </div>
            </div>
          )}

          {!showEnvelope && (
            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className="h-full rounded-full bg-cyan-300/60 transition-all duration-700"
                style={{
                  width: `${Math.min(((step + 1) / 4) * 100, 100)}%`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">
            اطلاعات اولیه پروژه
          </p>
          <p className="mt-1 text-xs text-white/25">
            چند مورد ساده برای شروع
          </p>
        </div>

        <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] text-emerald-300/70">
          STEP 01
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-xs text-white/35">
            اسم شما
          </label>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="مثلاً بارمان"
            className="w-full rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-white/[0.18]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/35">
            ایمیل
          </label>

          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/15 focus:border-white/[0.18]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/35">
            نوع پروژه
          </label>

          <div className="grid grid-cols-2 gap-2">
            {projectTypes.map((item) => {
              const selected = projectType === item;

              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => setProjectType(item)}
                  className={`rounded-2xl border px-4 py-3 text-xs transition-all ${
                    selected
                      ? "border-white/25 bg-white text-black"
                      : "border-white/[0.07] bg-black/20 text-white/40 hover:border-white/[0.15] hover:bg-white/[0.045] hover:text-white/75"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/35">
            بودجه تقریبی
          </label>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {budgets.map((item) => {
              const selected = budget === item;

              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => setBudget(item)}
                  className={`rounded-2xl border px-3 py-3 text-[11px] transition-all ${
                    selected
                      ? "border-white/25 bg-white text-black"
                      : "border-white/[0.07] bg-black/20 text-white/35 hover:border-white/[0.15] hover:bg-white/[0.045] hover:text-white/70"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/35">
            درباره پروژه
          </label>

          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="ایده یا نیاز پروژه را اینجا بنویس..."
            className="w-full resize-none rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-white/15 focus:border-white/[0.18]"
          />
        </div>

        {status === "error" && (
          <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.05] px-4 py-3 text-center text-xs text-red-300/70">
            ارسال انجام نشد. لطفاً دوباره تلاش کنید.
          </div>
        )}

        <button
          type="submit"
          className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-white px-5 py-4 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-[0_15px_50px_rgba(255,255,255,0.1)] active:scale-[0.98]"
        >
          <span>
            {status === "error"
              ? "تلاش دوباره"
              : "ارسال درخواست پروژه"}
          </span>

          <span className="text-lg transition-transform group-hover:-translate-x-1">
            →
          </span>
        </button>

        <p className="text-center text-[10px] leading-5 text-white/20">
          پیام مستقیماً برای B&B Studio ارسال می‌شود.
        </p>
      </form>
    </div>
  );
}