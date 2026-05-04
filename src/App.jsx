import React from "react";
import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex Web Design <span className="text-fuchsia-400">Co</span>
          </h1>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-fuchsia-100 transition"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[88vh] px-6 py-24 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[#050008]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,.22),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,.28),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,.16),transparent_35%)]" />

        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[620px] h-[620px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-transparent blur-[120px] animate-[spin_38s_linear_infinite]" />

        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              Premium websites for service businesses
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Websites That Make Your Business Look Expensive
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              High-end, SEO-ready websites built to help service businesses get
              more calls, more leads, and more trust online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white text-black px-8 py-4 font-semibold hover:bg-fuchsia-100 hover:scale-105 transition"
              >
                Get My Free Website Quote
              </a>

              <a
                href="tel:7204670527"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:bg-white/10 transition"
              >
                Call Now
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg text-sm text-white/60">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white font-semibold">7–10 Days</p>
                <p>Fast builds</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white font-semibold">SEO Ready</p>
                <p>Built to rank</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white font-semibold">Lead Focused</p>
                <p>More calls</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-fuchsia-500/25 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl rotate-1 hover:rotate-0 transition duration-500">
              <div className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-black">
                <img
                  src={portfolio}
                  alt="Premium website design examples"
                  className="w-full h-[440px] object-cover object-top rounded-[1.5rem] hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 rounded-3xl border border-white/10 bg-black/75 backdrop-blur-xl p-5 shadow-xl">
              <p className="text-2xl font-bold">Design Examples</p>
              <p className="text-white/50 text-sm">
                Med Spa • Auto • Home Services
              </p>
            </div>

            <div className="absolute -top-6 -right-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 text-sm text-white/75">
              Built to convert
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Everything your site needs to look premium and generate leads.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Custom Web Design",
              "Modern websites designed around your brand, your offer, and your ideal customer.",
            ],
            [
              "Local SEO",
              "SEO-ready structure to help your business get found online.",
            ],
            [
              "Website Redesign",
              "Turn outdated websites into polished lead-generation tools.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="p-7 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-purple-600/30 mb-6" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-white/60 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Work Samples
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Designs for Service Businesses
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            A mix of real client work and polished concept designs to show what
            your business could look like online.
          </p>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={portfolio}
              alt="Premium website portfolio mockups"
              className="w-full rounded-[1.5rem]"
            />
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-fuchsia-300 text-sm mb-2">
                Real Client Project
              </p>
              <h3 className="text-2xl font-semibold">Elevated Auto & Diesel</h3>
              <p className="text-white/60 mt-3">
                A premium automotive service website built for visibility,
                calls, and local credibility.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-fuchsia-300 text-sm mb-2">
                Concept Designs
              </p>
              <h3 className="text-2xl font-semibold">
                Med Spa & Home Services
              </h3>
              <p className="text-white/60 mt-3">
                High-end mockups showing how different service businesses can
                look premium without using the same style every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PROJECT */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Featured Project
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Elevated Auto & Diesel
            </h2>

            <p className="text-white/60 mt-5 text-lg">
              A luxury-inspired website for an automotive repair business,
              designed to build trust quickly and turn visitors into calls.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={preview}
              alt="Elevated Auto website preview"
              className="w-full h-[420px] object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,204,.18),transparent_35%),linear-gradient(180deg,#000,#12001f)]"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Website?
        </h2>

        <p className="text-white/60 mb-10">
          Send a quick message and I’ll follow up with next steps.
        </p>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Lead - Apex Web Design Co"
          />
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
            placeholder="What kind of website do you need?"
            rows="5"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
          />

          <button className="w-full py-4 bg-white text-black rounded-full font-semibold hover:bg-fuchsia-100 transition">
            Get My Free Website Quote
          </button>
        </form>

        <p className="mt-8 text-white/50 text-sm">
          Prefer to text?{" "}
          <a href="tel:7204670527" className="text-white underline">
            720-467-0527
          </a>
        </p>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
