"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    subject: "",
    name: "",
    phone: "",
    email: "",
    comments: "",
  });
  const valid =
    form.subject &&
    form.subject !== "" &&
    form.name.trim().length > 0 &&
    form.email.trim().length > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
  }

  return (
    <section className="relative bg-white pb-20 md:pb-24">
      <div className="container-uz">
        <div className="overflow-hidden rounded-[28px] grid grid-cols-1 lg:grid-cols-2 bg-[#f2f2f2]">
          {/* Left – contact intro with photo background */}
          <div className="relative p-8 md:p-12 min-h-[420px] lg:min-h-[640px] overflow-hidden">
            <Image
              src="/images/contact-bg.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/30" />
            <div className="relative">
              <span className="eyebrow !text-[#5a6a7c]">Contact Us</span>
              <h2 className="mt-4 text-[#071d49] font-semibold text-[32px] md:text-[40px] leading-[1.1]">
                Let&apos;s Build strong
                <br />
                future together
              </h2>

              <div className="mt-10 text-[15px] text-[#5a6a7c] space-y-4">
                <p className="font-semibold text-[#071d49]">
                  For investor relations information:
                </p>
                <p>
                  Please visit our{" "}
                  <Link
                    href="/our-partner"
                    className="underline underline-offset-2 text-[#071d49] font-semibold"
                  >
                    Be a partner page.
                  </Link>
                </p>
                <p>
                  For career opportunities, please visit our{" "}
                  <Link
                    href="/career"
                    className="underline underline-offset-2 text-[#071d49] font-semibold"
                  >
                    Career page.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="p-8 md:p-12">
            <h3 className="text-[#071d49] text-[22px] md:text-[24px] font-semibold mb-8">
              Please fill out the form.
            </h3>

            {submitted ? (
              <div className="rounded-xl bg-white border border-[#dddddd] p-8 text-center">
                <p className="text-[#071d49] font-semibold text-lg">
                  Thank you. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <Field>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfd2d6] py-4 text-[#071d49] focus:border-[#071d49] outline-none appearance-none"
                  >
                    <option value="">Choose subject</option>
                    <option value="investor">Investor Relations</option>
                    <option value="partner">Partnership</option>
                    <option value="career">Career</option>
                  </select>
                </Field>

                <Field>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfd2d6] py-4 text-[#071d49] placeholder-[#a4a8b0] focus:border-[#071d49] outline-none"
                  />
                </Field>

                <Field>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfd2d6] py-4 text-[#071d49] placeholder-[#a4a8b0] focus:border-[#071d49] outline-none"
                  />
                </Field>

                <Field>
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfd2d6] py-4 text-[#071d49] placeholder-[#a4a8b0] focus:border-[#071d49] outline-none"
                  />
                </Field>

                <Field>
                  <textarea
                    placeholder="Comments"
                    rows={2}
                    value={form.comments}
                    onChange={(e) => setForm({ ...form, comments: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfd2d6] py-4 text-[#071d49] placeholder-[#a4a8b0] focus:border-[#071d49] outline-none resize-none"
                  />
                </Field>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={!valid}
                    className="bg-[#071d49] disabled:opacity-50 text-white font-semibold px-12 py-4 rounded hover:bg-[#0a2a6a] transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
