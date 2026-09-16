import Link from "next/link";
import { members, projects } from "@/lib/data";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* بخش Hero */}
      <section className="flex min-h-[680px] flex-col items-center justify-center text-center">
        <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          استودیوی طراحی و توسعه
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl">
          ایده‌ها را
          <br />
          <span className="text-white/40">به واقعیت تبدیل می‌کنیم.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
          B&B Studio یک تیم کوچک و خلاق برای برنامه‌نویسی، طراحی وب و ساخت
          پروژه‌های دیجیتال است.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            مشاهده پروژه‌ها
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
          >
            تماس با ما
          </Link>
        </div>
      </section>

      {/* بخش تیم */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/30">
              The Team
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">تیم ما</h2>
          </div>

          <Link
            href="/team"
            className="text-sm text-white/40 transition hover:text-white"
          >
            مشاهده همه →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {/* بخش پروژه‌ها */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/30">
              Selected Work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              پروژه‌های اخیر
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm text-white/40 transition hover:text-white"
          >
            همه پروژه‌ها →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-32 text-center">
        <p className="mb-4 text-sm text-white/30">یک ایده داری؟</p>

        <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          بیایید چیزی
          <br />
          <span className="text-white/40">خوب بسازیم.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40">
          اگر ایده‌ای برای یک سایت، اپلیکیشن یا پروژه دیجیتال داری، با ما
          در ارتباط باش.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          شروع کنیم
          <span className="mr-2">→</span>
        </Link>
      </section>
    </div>
  );
}