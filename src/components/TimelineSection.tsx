"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { timelineEntries } from "@/lib/content";

export function TimelineSection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const next = () => setActive((i) => Math.min(i + 1, timelineEntries.length - 1));
  const prev = () => setActive((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const item = itemsRef.current[active];
    const track = trackRef.current;
    if (!item || !track) return;
    const target = item.offsetLeft - 40;
    track.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <section className="relative bg-[#071d49] text-white">
      <div className="container-uz section-pad">
        <div className="flex items-start justify-between gap-6 mb-14">
          <h2 className="text-white font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-[1.08] tracking-tight">
            UzOman Timeline
          </h2>
          <div className="flex gap-3 shrink-0 mt-3">
            <button
              type="button"
              onClick={prev}
              disabled={active === 0}
              aria-label="Previous"
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 transition flex items-center justify-center"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={active === timelineEntries.length - 1}
              aria-label="Next"
              className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 transition flex items-center justify-center"
            >
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="overflow-x-auto no-scrollbar pb-8"
        >
          <div className="relative flex items-end gap-12 md:gap-20 min-w-max pr-20">
            {/* line */}
            <div className="absolute left-0 right-0 top-[150px] h-px bg-white/15" />
            {timelineEntries.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.year}
                  ref={(el) => {
                    if (el) itemsRef.current[i] = el;
                  }}
                  className="relative shrink-0 w-[260px] md:w-[300px] cursor-pointer"
                  onClick={() => setActive(i)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={`font-semibold transition-all duration-500 ${
                      isActive
                        ? "text-[88px] md:text-[120px] leading-none text-white"
                        : "text-[28px] md:text-[32px] leading-none text-white/55"
                    }`}
                  >
                    {t.year}
                  </div>
                  {/* Dot */}
                  <div
                    className={`mt-6 w-3 h-3 rounded-full ${
                      isActive ? "bg-[#5c88da]" : "bg-white/30"
                    }`}
                  />
                  {isActive && (
                    <p className="mt-6 text-white/85 text-sm md:text-[15px] leading-relaxed max-w-[260px] border-l border-white/30 pl-4">
                      {t.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
