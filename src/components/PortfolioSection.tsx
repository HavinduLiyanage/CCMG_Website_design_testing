import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { portfolioCards } from "@/lib/content";

export function PortfolioSection() {
  return (
    <section className="relative bg-white">
      <div className="container-uz section-pad">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Portfolio Snapshot</span>
          <h2 className="mt-4 text-[#5c88da] font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-[1.08] tracking-tight max-w-[920px]">
            Diverse portfolio, strong finances, reinvesting dividends for growth.
          </h2>
          <Link
            href="/investment-portfolio"
            className="mt-10 inline-flex items-center gap-3 bg-[#071d49] text-white text-[15px] font-semibold px-7 py-4 rounded hover:bg-[#0a2a6a] transition-colors"
          >
            Explore our cases
            <ArrowUpRightIcon size={16} />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {portfolioCards.map((card, idx) => {
            const offset = idx % 3 === 1 ? "lg:translate-y-16" : "";
            return (
              <article
                key={card.title}
                className={`relative aspect-[408/440] rounded-3xl overflow-hidden text-white group ${offset}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 408px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#071d49]/65 via-[#071d49]/20 to-[#071d49]/40" />
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <h3 className="text-[24px] md:text-[28px] font-medium leading-tight max-w-[80%]">
                    {card.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
