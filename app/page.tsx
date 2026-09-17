import Link from "next/link";
import { members, projects } from "@/lib/data";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="flex min-h-[620px] flex-col items-center justify-center py-20 text-center sm:min-h-[680px]">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          استودیوی طراحی و توسعه
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
          ایده‌ها را
          <br />
          <span className="text-white/35">به واقعیت تبدیل می‌کنیم.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:mt-7 sm:text-lg sm:leading-8">
          B&B Studio یک تیم کوچک و خلاق برای برنامه‌نویسی، طراحی وب و ساخت
          پروژه‌های دیجیتال است؛ از یک ایده ساده تا یک محصول کامل.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            مشاهده پروژه‌ها
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.08] active:scale-[0.98] sm:w-auto"
          >
            شروع همکاری
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <div className="mb-9 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/25">
              The Team
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              تیم ما
            </h2>
          </div>

          <Link
            href="/team"
            className="text-sm text-white/35 transition hover:text-white"
          >
            مشاهده اعضای تیم ←
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <div className="mb-9 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/25">
              Selected Work
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              پروژه‌های اخیر
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm text-white/35 transition hover:text-white"
          >
            همه پروژه‌ها ←
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant */}
      <section className="border-t border-white/[0.06] py-20 sm:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-white/70">
            ✦
          </div>

          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/25">
            AI Assistant
          </p>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            درباره پروژه‌ات از هوش مصنوعی بپرس
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
            اگر هنوز نمی‌دانی از کجا شروع کنی، سوالت را بنویس و درباره ایده،
            طراحی یا مسیر اجرای پروژه گفتگو کن.
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20 sm:rounded-3xl">
            <Chat />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-24 text-center sm:py-32">
        <p className="mb-4 text-sm text-white/30">
          آماده‌ای شروع کنیم؟
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          یک ایده می‌تواند
          <br />
          <span className="text-white/35">شروع یک پروژه خوب باشد.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          درباره چیزی که در ذهن داری با ما صحبت کن. با هم مسیر مناسب برای
          ساختنش را پیدا می‌کنیم.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            شروع پروژه
            <span className="mr-2">←</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.08] active:scale-[0.98] sm:w-auto"
          >
            دیدن نمونه‌کارها
          </Link>
        </div>
      </section>
    </div>
  );
} 