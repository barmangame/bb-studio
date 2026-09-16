import Link from "next/link";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/team", label: "تیم" },
  { href: "/contact", label: "تماس" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0d0d0d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-black">
            B
          </div>
          <span>
            B&B <span className="text-white/50">Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-sm transition hover:bg-white/10"
        >
          شروع پروژه
        </Link>
      </div>
    </header>
  );
}