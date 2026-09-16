export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
          Get in Touch
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">تماس با ما</h1>
        <p className="mt-4 text-white/40">
          برای همکاری یا سوال، با ما در ارتباط باش
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <a
          href="mailto:barman.bolhasani@gmail.com"
          className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 transition hover:border-white/[0.14] hover:bg-white/[0.04]"
        >
          <div className="mb-6 text-3xl">📧</div>
          <h2 className="mb-2 text-xl font-semibold">ایمیل</h2>
          <p className="break-all text-sm text-white/40 transition group-hover:text-white/70">
            barman.bolhasani@gmail.com
          </p>
        </a>

        <a
          href="tel:09056133508"
          className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 transition hover:border-white/[0.14] hover:bg-white/[0.04]"
        >
          <div className="mb-6 text-3xl">📱</div>
          <h2 className="mb-2 text-xl font-semibold">تلفن</h2>
          <p className="text-sm text-white/40 transition group-hover:text-white/70">
            ۰۹۰۵۶۱۳۳۵۰۸
          </p>
        </a>
      </div>

      <div className="mt-20 text-center">
        <p className="mb-4 text-sm text-white/30">پروژه‌ای توی ذهن داری؟</p>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          بیایید چیزی
          <br />
          <span className="text-white/40">خوب بسازیم.</span>
        </h2>
        <a
          href="mailto:barman.bolhasani@gmail.com"
          className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          ارسال ایمیل
          <span className="mr-2">→</span>
        </a>
      </div>
    </div>
  );
}