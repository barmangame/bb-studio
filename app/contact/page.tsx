import Link from "next/link";
import ProjectContactForm from "@/components/ProjectContactForm";

const contactMethods = [
  {
    icon: "✉",
    title: "ایمیل",
    value: "barman.bolhasani@gmail.com",
    href: "mailto:barman.bolhasani@gmail.com",
    description: "برای ارسال جزئیات پروژه و شروع یک گفت‌وگوی جدی",
  },
  {
    icon: "◈",
    title: "تلفن",
    value: "۰۹۰۵۶۱۳۳۵۰۸",
    href: "tel:09056133508",
    description: "اگر ترجیح می‌دهی سریع‌تر درباره پروژه صحبت کنیم",
  },
  {
    icon: "◇",
    title: "پارس‌کدرز",
    value: "مشاهده پروفایل",
    href: "https://parscoders.com",
    description: "مشاهده خدمات و ارتباط از طریق پارس‌کدرز",
  },
  {
    icon: "⌁",
    title: "ژاکت",
    value: "مشاهده پروفایل",
    href: "https://zhaket.com",
    description: "مشاهده محصولات و خدمات B&B Studio",
  },
];

const reasons = [
  {
    number: "01",
    title: "جزئیات مهم‌اند",
    desc: "از ساختار و تجربه کاربری تا کوچک‌ترین جزئیات رابط، همه‌چیز با دقت بررسی می‌شود.",
  },
  {
    number: "02",
    title: "ارتباط مستقیم",
    desc: "بدون پیچیدگی‌های اضافی، درباره نیازها، تغییرات و مسیر پروژه شفاف صحبت می‌کنیم.",
  },
  {
    number: "03",
    title: "طراحی برای استفاده",
    desc: "هدف فقط ساخت یک ظاهر زیبا نیست؛ محصول باید سریع، کاربردی و قابل استفاده باشد.",
  },
  {
    number: "04",
    title: "هزینه شفاف",
    desc: "قبل از شروع، محدوده پروژه و هزینه تقریبی مشخص می‌شود تا همه‌چیز قابل پیش‌بینی باشد.",
  },
];

const steps = [
  {
    number: "01",
    title: "ایده",
    desc: "ایده یا نیازت را برای ما توضیح می‌دهی.",
  },
  {
    number: "02",
    title: "تحلیل",
    desc: "نیازها، امکانات و مسیر مناسب پروژه بررسی می‌شود.",
  },
  {
    number: "03",
    title: "ساخت",
    desc: "طراحی و توسعه پروژه مرحله‌به‌مرحله انجام می‌شود.",
  },
  {
    number: "04",
    title: "تحویل",
    desc: "نسخه نهایی بررسی و پس از تأیید تحویل داده می‌شود.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

        <div className="absolute right-[-220px] top-[35%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.025] blur-[130px]" />

        <div className="absolute left-[-220px] top-[65%] h-[420px] w-[420px] rounded-full bg-purple-500/[0.02] blur-[130px]" />
      </div>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center py-20 sm:py-28">
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <div className="mx-auto w-full max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2 text-xs text-white/50 shadow-[0_0_40px_rgba(255,255,255,0.025)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              آماده شروع پروژه‌های جدید
            </div>

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/25 sm:text-xs">
              B&B STUDIO · CONTACT
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              بیایید چیزی
              <br />
              <span className="bg-gradient-to-b from-white via-white/70 to-white/25 bg-clip-text text-transparent">
                متفاوت بسازیم.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/40 sm:text-base sm:leading-8">
              یک وب‌سایت، فروشگاه، اپلیکیشن یا ایده دیجیتال داری؟
              چند خط درباره چیزی که در ذهن داری بنویس. ما بررسی می‌کنیم و بهترین
              مسیر برای تبدیل آن به یک محصول واقعی را پیدا می‌کنیم.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#project"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_15px_50px_rgba(255,255,255,0.12)] active:scale-[0.98] sm:w-auto"
              >
                شروع یک پروژه
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] px-7 py-4 text-sm font-medium text-white/75 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] sm:w-auto"
              >
                مشاهده پروژه‌ها
                <span>↗</span>
              </Link>
            </div>

            <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-5 text-[10px] uppercase tracking-[0.25em] text-white/20">
              <span>DESIGN</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>DEVELOPMENT</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>DIGITAL</span>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/20">
                Direct Contact
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                مستقیم با ما در ارتباط باش
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              روشی را انتخاب کن که برایت راحت‌تر است. پاسخ‌گویی و ادامه گفتگو از
              همان مسیر انجام می‌شود.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const external = method.href.startsWith("http");

              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.045] hover:shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-32 w-32 rounded-full bg-white/[0.035] blur-2xl transition-all duration-500 group-hover:bg-white/[0.07]" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-lg text-white/60 transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-white/[0.08] group-hover:text-white">
                      {method.icon}
                    </div>

                    <span className="text-white/20 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white/70">
                      ↗
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-xs text-white/30">{method.title}</p>

                    <h3 className="mt-2 break-all text-lg font-medium tracking-tight text-white/85">
                      {method.value}
                    </h3>

                    <p className="mt-4 max-w-md text-xs leading-6 text-white/30">
                      {method.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section
          id="project"
          className="scroll-mt-20 border-t border-white/[0.06] py-20 sm:py-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/20">
                Start a Project
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                پروژه‌ات را
                <br />
                <span className="text-white/30">از همین‌جا شروع کن.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-white/40">
                لازم نیست همه جزئیات را از قبل بدانی. کافی است ایده‌ات را توضیح
                بدهی؛ از همان اطلاعات اولیه می‌توانیم درباره مسیر پروژه صحبت
                کنیم.
              </p>

              <div className="mt-10 flex items-center gap-4 text-xs text-white/30">
                <div className="flex -space-x-2 space-x-reverse">
                  <div className="h-9 w-9 rounded-full border border-[#0d0d0d] bg-white/[0.1]" />
                  <div className="h-9 w-9 rounded-full border border-[#0d0d0d] bg-white/[0.07]" />
                </div>

                <span>دو نفر · یک استودیو · ایده‌های بزرگ</span>
              </div>
            </div>

            <ProjectContactForm />
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/20">
              Why B&B
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              چرا B&B Studio؟
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/35">
              یک تیم کوچک یعنی ارتباط ساده‌تر، تصمیم‌گیری سریع‌تر و تمرکز بیشتر
              روی خود پروژه.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group relative bg-[#101010] p-7 transition-colors duration-300 hover:bg-[#151515]"
              >
                <span className="text-xs font-medium tracking-widest text-white/15 transition group-hover:text-white/35">
                  {reason.number}
                </span>

                <h3 className="mt-12 text-base font-semibold text-white/85">
                  {reason.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-white/30">
                  {reason.desc}
                </p>

                <div className="absolute bottom-7 left-7 h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-white/30" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/20">
              Process
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              از ایده تا محصول
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/35">
              مسیر همکاری ساده است؛ مرحله‌به‌مرحله جلو می‌رویم تا بدانیم دقیقاً
              در چه نقطه‌ای قرار داریم.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={item.number}
                className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.045]"
              >
                {index < steps.length - 1 && (
                  <div className="absolute right-[-13px] top-1/2 z-10 hidden h-px w-6 bg-white/10 lg:block" />
                )}

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-semibold tracking-[-0.05em] text-white/10 transition group-hover:text-white/25">
                    {item.number}
                  </span>

                  <span className="text-white/15 transition group-hover:text-white/50">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-lg font-semibold text-white/85">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-white/30">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/[0.06] py-28 text-center sm:py-40">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[100px]" />

          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/20">
            Your Next Project
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            شاید پروژه بعدی
            <br />
            <span className="text-white/25">
              همین چیزی باشد که در ذهن توست.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/35">
            لازم نیست کامل آماده باشی. فقط شروع کن و ایده‌ات را با ما در میان
            بگذار.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:barman.bolhasani@gmail.com?subject=شروع پروژه با B%26B Studio"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_20px_70px_rgba(255,255,255,0.12)] active:scale-[0.98]"
            >
              شروع گفتگو
              <span>←</span>
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.035] px-8 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
            >
              نمونه‌کارها
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}