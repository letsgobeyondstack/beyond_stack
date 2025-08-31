"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/40">
              <Image
                src="/resources/Beyond_stack_logo.jpg"
                alt="Beyond Stack logo"
                width={40}
                height={40}
                priority
                className="rounded-lg object-cover"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Beyond Stack
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#courses">
              Courses
            </a>
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#products">
              Products
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Build the future with{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                AI, Cloud & Blockchain
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-slate-300">
              Beyond Stack teaches tomorrow’s tools and helps teams ship faster,
              through hands-on courses, expert services, and soon, products that
              supercharge your stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
              >
                Explore Courses
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
              >
                Consulting & Services
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
              <li>Project-based learning</li>
              <li>Industry-grade practices</li>
              <li>Launch-ready blueprints</li>
            </ul>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 opacity-70 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.06)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.06)_25px)] bg-[size:25px_25px]" />
                  <div className="absolute inset-0 p-4 grid grid-cols-3 grid-rows-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/10 bg-white/5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Soft glows */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-24 h-40 w-40 rounded-full bg-indigo-400/30 blur-3xl" />
          </motion.div>
        </div>

        {/* Background decor */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px]" />
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Our Courses
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Cohort-based and self-paced learning in AI, Cloud, and Blockchain.
          Learn by shipping real projects.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Building your own personal AI chatbot without coding",
              d: "Learn to build your own personal AI chatbot without coding and with zero cost",
            },
            {
              t: "Cloud Mastery",
              d: "Deploy, scale, and observe modern apps.",
            },
            {
              t: "Blockchain Future",
              d: "Smart contracts & Web3 fundamentals.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:shadow-2xl transition"
            >
              <div className="text-cyan-300 font-semibold">{f.t}</div>
              <div className="mt-2 text-sm text-white/70">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Professional Services
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Architecture reviews, MLOps pipelines, migrations, and hands-on
          delivery aligned to your roadmap.
        </p>
      </section>

      {/* Products (teaser) */}
      <section id="products" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Products (Soon)
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Launch-ready templates and developer tools that cut build time from
          months to days.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 p-8">
          <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-fuchsia-400/30 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Ready to level up your stack?
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Join a cohort, bring us in for an engagement, or get early
                access to our products.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#contact"
                className="rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition"
              >
                Join a course
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/resources/Beyond_stack_logo.jpg"
                alt="Beyond Stack logo"
                width={36}
                height={36}
                priority
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="text-lg font-semibold tracking-tight">
                Beyond Stack
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Education • Services • Products
            </p>
          </div>
          <form className="grid gap-3 text-sm">
            <label className="text-white/80">Write to us</label>
            <input
              placeholder="Your email"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
            <button className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:brightness-110">
              Send
            </button>
            <p className="text-xs text-white/50">
              By submitting, you agree to our privacy policy.
            </p>
          </form>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Beyond Stack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
