import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
          Selected Work
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">پروژه‌ها</h1>
        <p className="mt-4 text-white/40">
          نمونه‌کارها و پروژه‌هایی که ساختیم
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}