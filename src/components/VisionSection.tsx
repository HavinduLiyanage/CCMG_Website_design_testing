import Image from "next/image";
import { EyeIcon, StatusUpIcon } from "@/components/icons";

const items = [
  {
    title: "Vision",
    icon: EyeIcon,
    body:
      "Be the leading contributor to the investment climate of Uzbekistan by fostering sustainable growth, attracting strategic investments, and supporting key industries that drive economic development and innovation.",
  },
  {
    title: "Mission",
    icon: StatusUpIcon,
    body:
      "Achieving long-term capital growth and delivering value to our stakeholders, while contributing to the development of the economy and playing a key role in strengthening the relationship between two economies.",
  },
];

export function VisionSection() {
  return (
    <section id="what" className="relative bg-white overflow-hidden">
      {/* Decorative line/curve graphic on the right */}
      <Image
        src="/images/decor/vision-lines.svg"
        alt=""
        width={702}
        height={355}
        className="absolute top-0 right-0 w-[55%] max-w-[702px] h-auto pointer-events-none select-none opacity-90"
        aria-hidden
      />

      <div className="relative container-uz section-pad">
        <h2 className="text-[#071d49] font-semibold text-[36px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-tight">
          What We Stand For
        </h2>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[920px]">
          {items.map(({ title, icon: Icon, body }) => (
            <div key={title}>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#f2f2f2] text-[#071d49]">
                  <Icon size={22} />
                </span>
                <h3 className="text-[#071d49] text-[26px] md:text-[28px] font-medium leading-tight">
                  {title}
                </h3>
              </div>
              <p className="mt-5 text-[#5a6a7c] text-[15px] md:text-base leading-[1.7] max-w-[400px]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
