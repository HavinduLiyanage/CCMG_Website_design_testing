import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { newsArticles } from "@/lib/content";

export function NewsSection() {
  return (
    <section className="relative bg-white">
      <div className="container-uz section-pad">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="eyebrow">Stay informed</span>
            <h2 className="mt-4 text-[#071d49] font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-[1.08] tracking-tight">
              News and Events
            </h2>
          </div>
          <Link href="/news" className="btn-arrow">
            View all news
            <ArrowUpRightIcon size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsArticles.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group flex flex-col gap-5 p-5 rounded-2xl border border-[#dddddd] hover:shadow-lg hover:border-[#5c88da]/40 transition-all"
            >
              <div className="relative aspect-[382/260] overflow-hidden rounded-lg bg-[#f4f6f9]">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="tag-pill">{n.category}</span>
                {n.secondaryCategory && (
                  <span className="tag-pill">{n.secondaryCategory}</span>
                )}
              </div>

              <h3 className="text-[#071d49] text-[18px] md:text-[19px] font-semibold leading-snug line-clamp-3 min-h-[68px]">
                {n.title}
              </h3>

              <div className="mt-auto flex items-center justify-between text-sm text-[#5a6a7c]">
                <span>
                  {n.date}
                  <span className="mx-3 text-[#dddddd]">|</span>
                  {n.readMinutes} min. read
                </span>
                <span className="text-[#071d49] font-semibold border-b border-[#071d49] pb-0.5 group-hover:border-[#5c88da] group-hover:text-[#5c88da] transition-colors">
                  Read the article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
