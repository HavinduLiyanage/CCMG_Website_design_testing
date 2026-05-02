import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[704px] h-screen max-h-[900px] overflow-hidden text-white">
      <img
        src="./images/hero-bg-desktop.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src="./images/hero-bg-mobile.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      {/* Subtle dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071d49]/45 via-[#071d49]/25 to-transparent" />

      <div className="relative container-uz h-full flex flex-col justify-center pt-24 pb-12">
        <div className="max-w-[1100px]">
          <h1 className="font-medium leading-[1.05] text-white text-[44px] sm:text-[60px] md:text-[72px] lg:text-[84px] tracking-tight">
            Uzbek-Oman
            <br />
            Investment Company
          </h1>
          <p className="mt-6 max-w-[420px] text-[15px] md:text-base text-white/90 leading-relaxed">
            Welcome to Uzbek-Oman Investment Company – a trusted partner in fostering
            economic growth and strengthening business ties between Uzbekistan and
            Oman.
          </p>
          <Link
            href="/our-partner"
            className="mt-8 inline-flex items-center justify-center bg-[#071d49] text-white text-[15px] font-semibold px-7 py-4 rounded hover:bg-[#0a2a6a] transition-colors"
          >
            Become a partner
          </Link>
        </div>
      </div>
    </section>
  );
}
