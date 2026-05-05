import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import dogTraining from "../dog-training-preview.png";

export default function App() {
  const primaryButton =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-5 text-base md:text-lg font-semibold text-black shadow-[0_0_30px_rgba(217,70,239,0.35)] transition duration-300 hover:scale-[1.05] hover:bg-fuchsia-100 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white before:via-fuchsia-100 before:to-white before:opacity-80";

  const secondaryButton =
    "relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-5 text-base md:text-lg font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.05] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]";

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex Web Design <span className="text-fuchsia-400">Co</span>
          </h1>

          <a href="#contact" className={primaryButton}>
            <span className="relative z-10">Get Quote</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#140018] to-[#2a003f]" />
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-fuchsia-300 text-xs uppercase tracking-[0.3em] mb-4">
              Premium websites for service businesses
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Websites That Make Your Business Look{" "}
              <span className="text-fuchsia-300">Elevated</span>
            </h1>

            <p className="text-white/60 mt-6 text-lg max-w-lg">
              High-end, SEO-ready websites built to help service businesses get
              more calls, more leads, and more trust online.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className={primaryButton}>
                <span className="relative z-10">Get My Free Website Quote</span>
              </a>

              <a href="#work" className={secondaryButton}>
                View Work
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <img
                src={portfolio}
                alt="Website preview"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section id="work" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
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
              A luxury-inspired website for an automotive repair business,
              designed to build trust quickly and turn visitors into calls.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <a
              href="https://www.elevateautoanddieselrepair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <img
                src={preview}
                alt="Elevated Auto preview"
                className="rounded-2xl w-full h-[420px] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center rounded-2xl">
                <span className="opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur px-5 py-3 rounded-full border border-white/20 shadow-[0_0_25px_rgba(217,70,239,0.35)]">
                  View Live Site →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECOND PROJECT */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={portfolio}
              alt="Design studies"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Design Studies
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Med Spa & Home Services
            </h2>

            <p className="text-white/60 mt-5 text-lg">
              Premium website examples created to show different visual
              directions for service-based businesses.
            </p>

            <a href="#contact" className={`${primaryButton} mt-8`}>
              <span className="relative z-10">Get a Similar Design</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Custom Web Design",
              "Modern websites designed around your brand.",
              portfolio,
            ],
            [
              "Local SEO",
              "Built to rank and get found online.",
              preview,
            ],
            [
              "Website Redesign",
              "Turn outdated sites into lead machines.",
              dogTraining,
            ],
          ].map(([title, text, image]) => (
            <div
              key={title}
              className="group relative overflow-hidden p-7 rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:-translate-y-2 transition duration-500 shadow-2xl"
            >
              <div className="absolute -inset-20 bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={image}
                alt={title}
                className="relative w-20 h-20 rounded-2xl object-cover mb-6 border border-white/10 shadow-lg group-hover:scale-110 transition duration-500"
              />

              <h3 className="relative text-xl font-semibold">{title}</h3>

              <p className="relative text-white/60 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 text-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,204,.18),transparent_35%),linear-gradient(180deg,#000,#12001f)]"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let’s build your next website
        </h2>

        <p className="text-white/60 mb-8">
          Tell me about your business and I’ll show you what’s possible.
        </p>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <input type="hidden" name="_subject" value="New Lead - Apex Web Design Co" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <input
            name="name"
            required
            placeholder="Name"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="What kind of website do you need?"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
          />

          <button type="submit" className={`w-full ${primaryButton}`}>
            <span className="relative z-10">Get My Free Website Quote</span>
          </button>
        </form>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
