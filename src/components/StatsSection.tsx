import { statistics } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="relative bg-[#071d49] text-white">
      <div className="container-uz section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-1">
            <span className="eyebrow !text-[#5c88da]">Statistics</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-white font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-[1.08] tracking-tight">
              Our Track Record
            </h2>
          </div>
          <div className="lg:col-span-6 text-white/85 text-base leading-[1.7] space-y-5">
            <p>
              Through strategic planning, dedication, and strong partnerships, we have
              successfully implemented numerous high-impact projects that contribute to
              economic development and long-term value creation. Our track record
              demonstrates our ability to identify and capitalize on promising
              opportunities, ensuring sustainable growth and financial stability.
            </p>
            <p>
              We continue to expand our reach and drive sustainable development through
              strategic investments and innovation.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 border-t border-white/15 pt-10">
          {statistics.map((stat) => (
            <div key={stat.label} className="border-r border-white/15 last:border-r-0 pr-4">
              <div className="text-[40px] md:text-[58px] font-semibold leading-none flex items-baseline gap-1">
                {stat.prefix && (
                  <span className="text-[28px] md:text-[40px] font-medium text-white/85">
                    {stat.prefix}
                  </span>
                )}
                <span>{stat.value}</span>
              </div>
              <div className="mt-4 text-white/70 text-sm md:text-[15px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
