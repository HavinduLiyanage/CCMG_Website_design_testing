import Link from "next/link";
import { ArrowUpRightIcon, LinkedInIcon, XSocialIcon } from "@/components/icons";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Investments", href: "/investment-portfolio" },
  { label: "News", href: "/news" },
  { label: "Career", href: "/career" },
  { label: "Contact us", href: "/contacts" },
  { label: "Become a partner", href: "/our-partner" },
];

export function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-[#071d49]">
      <div className="container-uz pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <Link href="/" aria-label="UzOman home">
              <img
                src="./images/logo-footer.avif"
                alt="UzOman Investment Company"
                className="h-12 w-auto"
              />
            </Link>

            <div className="flex gap-3 mt-12">
              <Link
                href="https://x.com/uzoman_uz"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-md bg-[#071d49] text-white flex items-center justify-center hover:bg-[#0a2a6a] transition"
              >
                <XSocialIcon size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/uzoman/"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-md bg-[#071d49] text-white flex items-center justify-center hover:bg-[#0a2a6a] transition"
              >
                <LinkedInIcon size={16} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[#071d49] text-[18px] font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3 text-[15px]">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#5c88da] transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 text-[15px]">
            <h4 className="text-[#071d49] text-[18px] font-semibold mb-5">Contacts</h4>
            <div className="space-y-4">
              <div>
                <div className="text-[#5a6a7c]">Phone:</div>
                <a href="tel:+998712050149" className="text-[#071d49] hover:text-[#5c88da]">
                  +998 (71) 205-01-49
                </a>
              </div>
              <div>
                <div className="text-[#5a6a7c]">Email:</div>
                <a
                  href="mailto:info@uzoman.uz"
                  className="text-[#071d49] hover:text-[#5c88da]"
                >
                  info@uzoman.uz
                </a>
              </div>
              <div>
                <div className="text-[#5a6a7c]">Address:</div>
                <a
                  href="https://maps.app.goo.gl/uc2uRimJazEyuHzZ7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#071d49] hover:text-[#5c88da]"
                >
                  95A, Amir Timur Ave, UzOman Tower, Tashkent, 100084
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:text-right">
            <Link href="#top" className="btn-arrow inline-flex">
              Back to top <ArrowUpRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#071d49] text-white">
        <div className="container-uz py-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-[#5c88da]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#5c88da]">
              Terms of Use
            </Link>
          </div>
          <div className="text-white/85">Uzbek-Oman Investment Company LLC</div>
          <div className="text-white/85">© 2025 All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
