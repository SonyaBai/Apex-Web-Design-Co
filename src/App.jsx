import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import heroVideo from "../hero-video.mp4";

export default function App() {
  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.45)] transition duration-300 hover:scale-[1.05]";

  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.05]";

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex <span className="text-fuchsia-400">Web Design</span>
          </h1>
          <a href="#contact" className={primaryButton}>
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-[slowZoom_24s_linear_infinite]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[13vw] font-black text-white/[0.05] uppercase">
            Growth
          </h2>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Websites Built to Grow{" "}
            <span className="text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-white/70 mt-6 text-lg max-w-xl">
            High-end websites designed to turn visitors into leads, calls, and revenue.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#contact" className={primaryButton}>
              Get My Free Website Quote
            </a>

            <a href="#work" className={secondaryButton}>
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase text-xs mb-4">
              Featured Project
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Elevated Auto & Diesel
            </h2>

            <p className="text-white/60 mt-5 text-lg">
              A high-end website designed to build trust and convert visitors into calls.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-4 bg-white/5">
            <img
              src={preview}
              alt="Preview"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES (FIXED CLEAN) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          What I Build
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Websites",
              text: "Modern, high-end websites built around your brand and services.",
            },
            {
              title: "Local SEO",
              text: "Structured to help your business show up and get found locally.",
            },
            {
              title: "Website Redesign",
              text: "Upgrade outdated sites into premium, high-converting assets.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 hover:bg-white/[0.08] transition hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-white/60 mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO IMAGE SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <img
            src={portfolio}
            alt="Portfolio"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          FAQ
        </h2>

        <div className="space-y-4">
          {[
            ["How long does a website take?", "Most sites are completed in 1–2 weeks."],
            ["Do you help with SEO?", "Yes, all sites are built with SEO structure."],
            ["Can you redesign my current site?", "Yes, I specialize in upgrades."],
          ].map(([q, a]) => (
            <details key={q} className="border border-white/10 rounded-xl p-5">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="text-white/60 mt-3">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s build your website
        </h2>

        <a href="#" className={primaryButton}>
          Get Started
        </a>
      </section>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </main>
  );
}
