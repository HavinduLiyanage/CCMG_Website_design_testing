import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export function BuildSection() {
  return (
    <section className="relative bg-white">
      <div className="container-uz section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-1 lg:pt-3">
            <span className="eyebrow">About UzOman</span>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-[#071d49] font-semibold text-[36px] sm:text-[42px] md:text-[48px] leading-[1.1] tracking-tight">
              We Build the Future
              <br />
              Through Innovation
              <br />
              and Strategic
              <br />
              Investments
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-[#5a6a7c] text-base md:text-[17px] leading-[1.7]">
              Established in 2009 as a partnership between Uzbekistan Fund for
              Reconstruction &amp; Development (UFRD) and Oman Investment Authority
              (OIA). Committed capital: US $500 million, managing over US $300 million
              in assets. Among the first foreign direct investors in Uzbekistan,
              adhering to top governance standards.
            </p>

            <Link
              href="/about"
              className="btn-arrow mt-8 text-[#071d49]"
            >
              Discover more about us <ArrowUpRightIcon size={16} />
            </Link>

            <div className="mt-12">
              <div className="text-[#5c88da] text-sm font-semibold tracking-wider uppercase">
                Core Values:
              </div>
              <p className="mt-2 text-[#5a6a7c] text-base">
                Excellence, Integrity, Teamwork, Innovation, Dedication.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 zoom-wrap rounded-2xl overflow-hidden">
          <img
            src="./images/about-buildings.webp"
            alt="UzOman corporate buildings"
            className="zoom-target w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
