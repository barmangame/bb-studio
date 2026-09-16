import { members } from "@/lib/data";
import MemberCard from "@/components/MemberCard";

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
          The Team
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">تیم ما</h1>
        <p className="mt-4 text-white/40">
          تیمی کوچک با ایده‌های بزرگ
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
          >
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}