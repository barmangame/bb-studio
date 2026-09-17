import { Member } from "@/lib/data";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const isJoinCard = member.id === "join-us";

  return (
    <div className="p-8">
      {/* آواتار */}
      {isJoinCard ? (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-white/20 text-2xl text-white/40">
          +
        </div>
      ) : (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xl font-bold">
          {member.name.charAt(0)}
        </div>
      )}

      {/* اسم و نقش */}
      <h3 className="mb-1 text-xl font-semibold tracking-tight">
        {member.name}
      </h3>
      <p className="mb-5 text-sm text-white/40">{member.role}</p>

      {/* بیو */}
      <p className="mb-6 text-sm leading-7 text-white/50">{member.bio}</p>

      {/* پلتفرم‌ها */}
      {member.platforms && member.platforms.length > 0 && (
        <div className="mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
            Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {member.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50 transition hover:border-white/20 hover:text-white/80"
              >
                {platform.name} ↗
              </a>
            ))}
          </div>
        </div>
      )}

      {/* مهارت‌ها */}
      {member.skills.length > 0 && (
        <div className="mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-white/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* خدمات */}
      {member.services && member.services.length > 0 && (
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
            Services
          </p>
          <ul className="space-y-2">
            {member.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 text-xs leading-6 text-white/45"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}