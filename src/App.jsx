import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import dogTraining from "../dog-training-preview.png";

export default function App() {
  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.45)] transition duration-300 hover:scale-[1.05] hover:bg-fuchsia-100";

  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.05] hover:bg-white/15";

  const benefits = [
    ["01", "More Qualified Leads", "Designed to guide visitors toward calls, forms, and booked appointments."],
    ["02", "Premium Credibility", "A polished site makes your business feel trusted and established."],
    ["03", "SEO-Ready Structure", "Built with clean sections, keywords, speed, and local visibility in mind."],
    ["04", "Faster User Experience", "Clear layouts and fast pages help visitors stay longer and take action."],
    ["05", "Mobile-First Design", "Your site looks strong on phones, where most local customers are searching."],
    ["06", "Built to Scale", "Ready for future services, ads, SEO campaigns, and business growth."],
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
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
      <section className="min-h-screen flex items-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#100014] to-[#2a003f]" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[15vw] font-black tracking-[-0.08em] text-white/[0.04] uppercase">
            Built for Growth
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <p className="text-fuchsia-300 text-xs uppercase tracking-[0.3em] mb-4">
            Premium websites for service businesses
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
            Websites Built to Grow{" "}
            <span className="text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-white/70 mt-6 text-lg max-w-xl">
            High-end, SEO-ready websites designed to turn visitors into real leads, calls, and revenue.
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
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Featured Project
            </p>

            <a
              href="https://www.elevateautoanddieselrepair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-300 transition"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Elevated Auto & Diesel
              </h2>
            </a>

            <p className="text-white/60 mt-5 text-lg">
              A high-end website designed to build trust quickly and turn visitors into phone calls.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={preview}
              alt="Preview"
              className="rounded-2xl w-full h-[420px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* SERVICES (FIXED WITH BACKGROUNDS) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Clean, conversion-focused websites built for small businesses.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Web Design",
              text: "A modern, polished website designed around your brand and ideal customer.",
              image: portfolio,
            },
            {
              title: "Local SEO",
              text: "Structure built to help your business show up and get found locally.",
              image: preview,
            },
            {
              title: "Website Redesign",
              text: "Upgrade outdated websites into high-converting assets.",
              image: dogTraining,
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-30 group-hover:opacity-50 group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-lg text-white/70">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Why It Works
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Built for visibility, trust, and conversion.
          </h2>

          <p className="text-white/60 mt-5 text-lg">
            Your website should do more than look good — it should bring you business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map(([num, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-8"
            >
              <div className="mb-6 text-fuchsia-300 font-bold">
                {num}
              </div>

              <h3 className="text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 text-white/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s build your next website
        </h2>

        <p className="text-white/60 mb-8">
          Tell me about your business and I’ll show you what’s possible.
        </p>

        <a href="#" className={primaryButton}>
          Get My Free Website Quote
        </a>
      </section>

      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Apex Web Design
      </footer>
    </main>
  );
}
