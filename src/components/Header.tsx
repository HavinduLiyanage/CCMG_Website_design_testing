"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 backdrop-blur-md ${
        scrolled ? "bg-[#1d428a]/95" : "bg-transparent"
      }`}
    >
      <div className="container-uz flex items-center justify-between h-[95px] gap-6">
        <Link href="/" className="shrink-0" aria-label="UzOman home">
          <Image
            src="/images/logo.svg"
            alt="UzOman Investment Company"
            width={200}
            height={47}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold hover:text-[#5c88da] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/our-partner"
            className="bg-[#071d49] text-white text-[15px] font-semibold px-7 py-4 rounded hover:bg-[#0a2a6a] transition-colors"
          >
            Become a partner
          </Link>
          <div className="flex items-center gap-3 pl-4 text-white/80 text-sm font-semibold">
            <Link href="/" className="text-white">
              EN
            </Link>
            <Link href="/ru" className="hover:text-white transition">
              RU
            </Link>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#071d49] text-white">
          <nav className="container-uz flex flex-col gap-1 py-6 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/our-partner"
              className="mt-4 inline-flex items-center justify-center bg-white text-[#071d49] px-6 py-3 rounded"
              onClick={() => setOpen(false)}
            >
              Become a partner
            </Link>
            <div className="flex items-center gap-4 mt-4 text-sm">
              <Link href="/">EN</Link>
              <Link href="/ru" className="text-white/70">
                RU
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
