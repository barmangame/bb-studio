import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-7">
      <h3 className="mb-3 text-lg font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-7 text-white/45">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}