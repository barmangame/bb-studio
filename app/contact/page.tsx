import Link from "next/link";

const contactMethods = [
  {
    icon: "✉",
    title: "ایمیل",
    value: "barman.bolhasani@gmail.com",
    href: "mailto:barman.bolhasani@gmail.com",
    description: "برای شروع همکاری، ارسال جزئیات پروژه و گفتگوهای رسمی",
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
    description: "مشاهده و ثبت سفارش پروژه از طریق پارس‌کدرز",
  },
  {
    icon: "⌁",
    title: "ژاکت",
    value: "مشاهده پروفایل",
    href: "https://zhaket.com",
    description: "دسترسی به خدمات و پروژه‌های ما در ژاکت",
  },
];

const reasons = [
  {
    icon: "✦",
    title: "توجه به جزئیات",
    desc: "جزئیات کوچک می‌توانند تفاوت بزرگی در تجربه نهایی یک پروژه ایجاد کنند.",
  },
  {
    icon: "◷",
    title: "ارتباط شفاف",
    desc: "در طول پروژه درباره روند کار، تغییرات و مراحل بعدی با شما در ارتباط هستیم.",
  },
  {
    icon: "◇",
    title: "تمرکز روی کیفیت",
    desc: "هدف ما ساخت چیزی است که علاوه بر ظاهر خوب، عملکرد مناسبی هم داشته باشد.",
  },
  {
    icon: "⌁",
    title: "قیمت شفاف",
    desc: "قبل از شروع، درباره محدوده پروژه و هزینه آن به‌صورت شفاف صحبت می‌کنیم.",
  },
];

const steps = [
  {
    step: "۰۱",
    title: "آشنایی با پروژه",
    desc: "ایده، نیازها و چیزی که می‌خواهی بسازی را با ما در میان بگذار.",
  },
  {
    step: "۰۲",
    title: "بررسی و پیشنهاد",
    desc: "نیازهای پروژه را بررسی می‌کنیم و درباره مسیر مناسب صحبت می‌کنیم.",
  },
  {
    step: "۰۳",
    title: "توسعه و اجرا",
    desc: "بعد از توافق، پروژه را مرحله‌به‌مرحله طراحی و پیاده‌سازی می‌کنیم.",
  },
  {
    step: "۰۴",
    title: "تحویل پروژه",
    desc: "در پایان، نتیجه نهایی را بررسی می‌کنیم و پروژه را تحویل می‌دهیم.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          آماده شنیدن ایده شما هستیم
        </div>

        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white/25 sm:text-xs">
          Get in Touch
        </p>

        <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
          بیایید درباره
          <br />
          <span className="text-white/35">پروژه شما صحبت کنیم.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
          اگر ایده‌ای برای یک وب‌سایت، فروشگاه، اپلیکیشن یا پروژه دیجیتال داری،
          جزئیاتش را برایمان بفرست. با هم بررسی می‌کنیم که چطور می‌توان آن را
          به یک محصول کاربردی تبدیل کرد.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="mt-20 sm:mt-28">
        <div className="mb-9">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/25">
            Contact
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              راه‌های ارتباطی
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/35">
              روشی را که برایت راحت‌تر است انتخاب کن و با ما در ارتباط باش.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {contactMethods.map((method) => {
            const isExternal = method.href.startsWith("http");

            return (
              <a
                key={method.title}
                href={method.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.045] active:scale-[0.99] sm:rounded-3xl sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-lg text-white/65 transition duration-300 group-hover:border-white/[0.14] group-hover:bg-white/[0.07] group-hover:text-white">
                    {method.icon}
                  </div>

                  <span className="text-white/20 transition duration-300 group-hover:translate-x-[-3px] group-hover:text-white/50">
                    ←
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {method.title}
                  </h3>

                  <p className="mt-2 break-all text-sm text-white/65 transition group-hover:text-white/85">
                    {method.value}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    {method.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Why Us */}
      <section className="mt-24 border-t border-white/[0.06] pt-20 sm:mt-32 sm:pt-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/25">
            Our Approach
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            همکاری برای ما یعنی چه؟
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
            سعی می‌کنیم همکاری ساده، شفاف و قابل پیش‌بینی باشد؛ از اولین گفتگو
            تا زمانی که پروژه به نتیجه برسد.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-lg text-white/60 transition group-hover:bg-white/[0.07] group-hover:text-white/80">
                {reason.icon}
              </div>

              <h3 className="text-base font-semibold tracking-tight">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-24 border-t border-white/[0.06] pt-20 sm:mt-32 sm:pt-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/25">
            How It Works
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            روند همکاری
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40">
            شروع همکاری لازم نیست پیچیده باشد؛ مسیر را قدم‌به‌قدم با هم جلو
            می‌بریم.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:rounded-3xl sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-2xl font-semibold tracking-tight text-white/15 transition group-hover:text-white/25">
                  {item.step}
                </span>

                <span className="text-white/15 transition group-hover:text-white/40">
                  →
                </span>
              </div>

              <h3 className="text-base font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-24 border-t border-white/[0.06] pt-20 text-center sm:mt-32 sm:pt-28">
        <p className="mb-4 text-sm text-white/30">
          یک ایده داری؟
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          از یک پیام ساده
          <br />
          <span className="text-white/35">شروع می‌شود.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          چند خط درباره ایده یا نیازت بنویس. از همان‌جا گفتگو را شروع می‌کنیم.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:barman.bolhasani@gmail.com"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 active:scale-[0.98] sm:w-auto"
          >
            ارسال ایمیل
            <span className="mr-2">←</span>
          </a>

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