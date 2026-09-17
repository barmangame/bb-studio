export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  email?: string;
  phone?: string;
  platforms?: { name: string; url: string }[];
  services?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const members: Member[] = [
  {
    id: "barman",
    name: "بارمان",
    role: "توسعه‌دهنده وب و طراح رابط کاربری",
    bio: "علاقه‌مند به فناوری، برنامه‌نویسی، طراحی وب و ساخت پروژه‌های دیجیتال. از یادگیری و تجربه‌کردن ابزارها و فناوری‌های جدید لذت می‌برم. با برنامه‌ریزی زمانی مناسب، پروژه‌ها را به‌موقع و با دقت بالا تحویل می‌دهم.",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Elementor",
      "Web Design",
      "UI Design",
      "Unreal Engine",
      "Godot",
      "Linux",
      "PySide6",
    ],
    services: [
      "طراحی صفحه HTML برای ارائه یا پروژه مدرسه",
      "ساخت صفحات وب آموزشی (ریاضی، فیزیک، مطالب درسی)",
      "ساخت فرم‌ها و صفحه‌های تعاملی",
      "دیزاین سبک و منظم برای وب‌سایت",
      "تحویل پروژه همراه با نسخه آزمایشی و اصلاحات",
    ],
    platforms: [
      { name: "پارس‌کدرز", url: "https://parscoders.com" },
      { name: "ژاکت", url: "https://jajet.ir" },
    ],
    email: "barman.bolhasani@gmail.com",
    phone: "09056133508",
  },
  {
    id: "join-us",
    name: "عضو جدید",
    role: "جای خالی برای شما",
    bio: "ما همیشه به دنبال افراد بااستعداد و خلاق هستیم. اگر به برنامه‌نویسی، طراحی یا هر حوزه مرتبط علاقه داری، با ما تماس بگیر.",
    skills: ["+ جای شما"],
    email: "barman.bolhasani@gmail.com",
  },
];

export const projects: Project[] = [
  {
    id: "atlas-planner",
    title: "Atlas Planner",
    description:
      "برنامه مدیریت برنامه روزانه با رابط گرافیکی مدرن و Glassmorphism. ساخته‌شده با Python و PySide6.",
    tags: ["Python", "PySide6", "UI Design"],
  },
  {
    id: "wordpress-shop",
    title: "فروشگاه اینترنتی وردپرسی",
    description:
      "طراحی و مدیریت یک وب‌سایت فروشگاهی با WordPress و Elementor. شامل طراحی صفحات، شخصی‌سازی UI، بهینه‌سازی عملکرد و SEO.",
    tags: ["WordPress", "Elementor", "SEO"],
  },
  {
    id: "dental-website",
    title: "وب‌سایت خدمات دندانپزشکی",
    description:
      "طراحی صفحات وب‌سایت انگلیسی حوزه دندانپزشکی و خدمات محافظ دهان و دندان.",
    tags: ["Web Design", "English"],
  },
  {
    id: "game-dev",
    title: "پروژه‌های بازی‌سازی",
    description:
      "تجربه کار با موتورهای بازی‌سازی Unreal Engine و Godot با هدف یادگیری توسعه بازی‌های سه‌بعدی.",
    tags: ["Unreal Engine", "Godot", "Game Dev"],
  },
];