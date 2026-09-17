import { getApprovedProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { projects as staticProjects } from "@/lib/data";

export default async function ProjectsPage() {
  const dbProjects = await getApprovedProjects();

  const allProjects = [
    ...staticProjects,
    ...dbProjects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      tags: ["ثبت‌شده با AI"],
    })),
  ];

  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Projects
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            پروژه‌های B&B Studio
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            مجموعه‌ای از پروژه‌هایی که توسط B&B Studio ساخته شده‌اند یا پس از
            بررسی و تأیید، توسط دستیار هوشمند ثبت شده‌اند.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {allProjects.length === 0 ? (
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-lg text-white/50">
              ✦
            </div>

            <h2 className="text-lg font-medium text-white/80">
              هنوز پروژه‌ای ثبت نشده است
            </h2>

            <p className="mt-2 text-sm text-white/35">
              پروژه‌های جدید پس از تأیید در اینجا نمایش داده می‌شوند.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}