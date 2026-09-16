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

      {/* مهارت‌ها */}
      {member.skills.length > 0 && (
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
      )}
    </div>
  );
}