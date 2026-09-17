import Link from "next/link";
import { members } from "@/lib/data";
import MemberCard from "@/components/MemberCard";
import Chat from '@/components/Chat';

const values = [
  {
    icon: "✦",
    title: "دقت در جزئیات",
    desc: "از ایده اولیه تا آخرین جزئیات، روی کیفیت و تجربه نهایی تمرکز می‌کنیم.",
  },
  {
    icon: "◷",
    title: "تعهد به زمان",
    desc: "برای هر پروژه برنامه مشخص داریم و تلاش می‌کنیم کارها منظم و به‌موقع پیش بروند.",
  },
  {
    icon: "◇",
    title: "کیفیت واقعی",
    desc: "هدف ما فقط تحویل یک پروژه نیست؛ می‌خواهیم نتیجه‌ای بسازیم که از آن راضی باشید.",
  },
  {
    icon: "⌁",
    title: "ساده و حرفه‌ای",
    desc: "راهکارهای پیچیده را تا جای ممکن ساده می‌کنیم تا نتیجه هم زیبا باشد و هم کاربردی.",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white/30 sm:text-xs">
          The Team
        </p>

        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          پشت B&B Studio
          <br />
          <span className="text-white/35">چه کسانی هستند؟</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
          ما یک تیم کوچک و مستقل هستیم که با علاقه به تکنولوژی، طراحی و ساخت
          محصولات دیجیتال، ایده‌ها را به تجربه‌هایی ساده، زیبا و کاربردی تبدیل
          می‌کنیم.
        </p>
      </section>

      {/* Team */}
      <section className="mt-20 sm:mt-28">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/25">
              Meet the team
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              اعضای تیم
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 sm:text-left">
            دو نفر، یک مسیر و یک هدف؛ ساختن پروژه‌هایی که هم خوب دیده شوند و هم
            خوب کار کنند.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
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

      {/* Values */}
      <section className="mt-24 border-t border-white/[0.06] pt-20 sm:mt-32 sm:pt-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/25">
            Our Approach
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            چیزی که برایمان مهم است
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
            ما سعی می‌کنیم هر پروژه را مثل محصول خودمان ببینیم؛ با دقت، نظم و
            توجه به تجربه‌ای که در نهایت به مشتری و کاربر می‌رسد.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-lg text-white/70 transition group-hover:bg-white/[0.07]">
                {value.icon}
              </div>

              <h3 className="text-base font-semibold tracking-tight">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 border-t border-white/[0.06] pt-20 text-center sm:mt-32 sm:pt-28">
        <p className="mb-4 text-sm text-white/30">
          ایده‌ای برای شروع داری؟
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
          بیایید چیزی
          <br />
          <span className="text-white/35">واقعاً خوب بسازیم.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          اگر برای سایت، اپلیکیشن یا یک پروژه دیجیتال ایده‌ای داری، خوشحال
          می‌شویم درباره‌اش صحبت کنیم.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto"
        >
          شروع یک پروژه
          <span className="mr-2">←</span>
        </Link>
      </section>
    </div>
  );
}

<section className="border-t border-white/[0.06] py-24">
  <div className="mb-10 text-center">
    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/30">
      AI Assistant
    </p>
    <h2 className="text-3xl font-semibold tracking-tight">از هوش مصنوعی بپرس</h2>
  </div>
  <Chat />
</section>