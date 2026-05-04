import React from "react";

// images
import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";

export default function App() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-fuchsia-400">.</span>
          </h1>

          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-fuchsia-100 transition"
          >
            Get Quote
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

            <div className="flex gap-4 mt-8">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-fuchsia-100 transition"
              >
                Get My Free Website Quote
              </a>

              <a
                href="#work"
                className="border border-white/20 px-6 py-4 rounded-full hover:bg-white/10 transition"
              >
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
                <span className="opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
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
              alt="Design concepts"
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

            <a
              href="#contact"
              className="inline-block mt-8 bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-fuchsia-100 transition"
            >
              Get a Similar Design
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Custom Web Design", "Modern websites designed around your brand.", portfolio],
            ["Local SEO", "Built to rank and get found online.", preview],
            ["Website Redesign", "Turn outdated sites into lead machines.", portfolio],
          ].map(([title, text, image]) => (
            <div
              key={title}
              className="p-7 rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition"
            >
              <img
                src={image}
                className="w-16 h-16 rounded-xl object-cover mb-6"
              />

              <h3 className="text-xl font-semibold">{title}</h3>

              <p className="text-white/60 mt-2">{text}</p>
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

        <a
          href="mailto:youremail@gmail.com"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-fuchsia-100 transition"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}
