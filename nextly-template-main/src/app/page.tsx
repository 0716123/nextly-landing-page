import Image from "next/image";
import { Container } from "@/components/Container";

const stats = [
  { value: "120+", label: "Projects launched" },
  { value: "10x", label: "Conversion lift" },
  { value: "100%", label: "Responsive design" },
];

const highlights = [
  {
    title: "Strategic branding",
    description:
      "Craft a memorable identity with bold visuals, tonal consistency, and clarity at every step.",
  },
  {
    title: "Growth-focused sections",
    description:
      "Build trust with feature highlights, testimonials, and product positioning that convert.",
  },
  {
    title: "Smooth responsive experience",
    description:
      "Optimized for every device with a polished layout and fast, fluid interactions.",
  },
];

const programs = [
  {
    title: "Campus AI Studio",
    description: "Accelerate learning with guided workshops, mentoring, and demo-ready projects.",
    accent: "bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "Creative Growth Lab",
    description: "Scale product launches with content, visuals, and performance-driven design.",
    accent: "bg-violet-500/10 text-violet-300",
  },
  {
    title: "Community Accelerator",
    description: "Build stronger connections through events, mentorship, and collaborative storytelling.",
    accent: "bg-emerald-500/10 text-emerald-300",
  },
];

const testimonials = [
  {
    quote:
      "Working with this page gave our brand a modern, polished presence that perfectly captures our mission.",
    name: "Aanya Patel",
    role: "Founder, Spark Campus",
  },
  {
    quote:
      "The responsive layout feels premium on every screen, and the animations make the experience feel alive.",
    name: "Liam Chen",
    role: "Product Lead, LaunchCore",
  },
  {
    quote:
      "The design is clean yet bold — exactly what our audience needed to feel confident and engaged.",
    name: "Nina Lopez",
    role: "Growth Director, Momentum Co.",
  },
];

export default function Home() {
  return (
    <Container className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 px-6 py-16 shadow-2xl shadow-slate-950/60 lg:px-14 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(168,85,247,0.16),_transparent_25%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 ring-1 ring-cyan-300/20">
              Launch the next generation</span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A modern, immersive landing page for founders, products, and creative programs.
            </h1>
            <p className="max-w-xl text-slate-300 sm:text-lg">
              Crafted with Next.js and Tailwind CSS to deliver a premium digital experience that is fast, responsive, and built to convert.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Explore programs
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
                Read reviews
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-center shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-5">
              {[
                "Figma",
                "Stripe",
                "Notion",
                "Spotify",
                "Airbnb",
              ].map((brand) => (
                <div
                  key={brand}
                  className="rounded-3xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-center text-sm text-slate-400 transition hover:border-cyan-500/40 hover:text-white"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-xl shadow-cyan-500/10 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%)] opacity-80" />
            <div className="relative flex min-h-[340px] items-center justify-center">
              <Image
                src="/img/hero.png"
                width={560}
                height={560}
                alt="Abstract landing page illustration"
                className="rounded-[1.75rem] object-cover shadow-2xl shadow-cyan-500/15"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About the design</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            A landing page designed to feel premium, modern, and easy to navigate.
          </h2>
          <p className="max-w-xl text-slate-400">
            Every section is balanced for clarity and energy, combining crisp typography, vivid accents, and subtle glassmorphism to keep users engaged from the first scroll.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/95 via-slate-950/80 to-slate-900/95 p-10 shadow-2xl shadow-slate-950/50">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-7 shadow-inner shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Our approach</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Built for clarity, performance, and engagement.</h3>
              <p className="mt-4 text-slate-400">
                Connect with visitors through structured storytelling, strong visual rhythm, and responsive components that adapt naturally across devices.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-5">
                <p className="text-3xl font-semibold text-white">35+</p>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Section patterns</p>
              </div>
              <div className="space-y-3 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-5">
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Mobile-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Programs & features</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Highlight your best offerings with modern, easy-to-scan cards.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Use programs and feature sections to explain value, explain outcomes, and invite visitors to take the next step.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-950/95">
              <div className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${program.accent}`}>{program.title}</div>
              <p className="mt-6 text-slate-300">{program.description}</p>
              <div className="mt-8 flex items-center gap-3 text-cyan-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/15">
                  →
                </span>
                <span className="text-sm font-semibold">Learn more</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Loved by early adopters</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Testimonials from teams who launched with confidence.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="mt-2 text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="start" className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-12 text-center shadow-2xl shadow-cyan-500/20">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Ready to launch</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Grow your online presence with a modern, engaging landing page.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          A design system built to guide visitors from arrival to action with polished visuals, clear structure, and responsive layouts.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#programs"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400">
            Start your project
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-slate-500">
            Explore the design
          </a>
        </div>
      </section>
    </Container>
  );
}
