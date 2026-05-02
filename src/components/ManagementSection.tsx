import Image from "next/image";
import { teamMembers } from "@/lib/content";

export function ManagementSection() {
  return (
    <section className="relative bg-[#071d49] text-white overflow-hidden">
      {/* Decorative ellipse glow */}
      <div className="absolute -left-40 top-1/3 w-[700px] h-[700px] rounded-full bg-[#5c88da]/15 blur-[120px] pointer-events-none" />

      <div className="relative container-uz section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-3">
            <span className="eyebrow !text-[#5c88da]">Team</span>
            <h2 className="mt-6 text-white font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-[1.05] tracking-tight">
              Management
            </h2>
            <p className="mt-6 text-white/75 text-[15px] leading-relaxed max-w-[260px]">
              UzOman is led by a strong and highly experienced Management and
              Investment Team
            </p>
          </aside>

          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {teamMembers.map((m) => (
              <article key={m.name} className="group">
                <div className="relative aspect-[368/432] overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Hover-revealed bio overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#071d49]/95 via-[#071d49]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-[#5c88da] text-xs font-semibold uppercase tracking-wider mb-2">
                      Experience
                      <br />
                      and Qualifications:
                    </div>
                    <ul className="space-y-2 text-white/90 text-[13px] leading-snug">
                      {m.bio.map((b, idx) => (
                        <li key={idx}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-white text-[22px] font-medium">{m.name}</h3>
                  <p className="text-white/65 text-[14px] mt-1">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
