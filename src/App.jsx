import React from "react";

import heroBg from "../hero-bg.jpg";
import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import dogTraining from "../dog-training-preview.png";

export default function App() {

  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.5)] hover:scale-105 transition";

  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur hover:scale-105 transition";

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32 relative">

        {/* IMAGE BACKGROUND */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#1a0026]" />

        {/* GIANT TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[15vw] font-black text-white/[0.05] uppercase">
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
            High-end websites designed to turn visitors into real leads, calls, and revenue.
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

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Custom Web Design",
              text: "Modern, polished websites built around your brand.",
              image: portfolio,
            },
            {
              title: "Local SEO",
              text: "Get found locally and bring in more calls.",
              image: preview,
            },
            {
              title: "Website Redesign",
              text: "Turn outdated sites into high-converting assets.",
              image: dogTraining,
            },
          ].map((item) => (

            <div
              key={item.title}
              className="group relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl hover:-translate-y-2 transition"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/80 text-lg">
                  {item.text}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Investment
        </h2>

        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Every website is custom-built based on your business and growth goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-4">$1k – $2.5k</p>
            <p className="text-white/60">Clean, professional website.</p>
          </div>

          <div className="p-8 border border-fuchsia-500/40 rounded-3xl bg-fuchsia-900/10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Growth</h3>
            <p className="text-3xl font-bold mb-4">$2.5k – $5k</p>
            <p className="text-white/60">Built for leads and SEO.</p>
          </div>

          <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-3xl font-bold mb-4">$5k+</p>
            <p className="text-white/60">Full custom + scaling.</p>
          </div>

        </div>

        <a href="#contact" className={`${primaryButton} mt-12`}>
          Get a Custom Quote
        </a>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let’s build your website
        </h2>

        <a href="#" className={primaryButton}>
          Get My Free Website Quote
        </a>

      </section>

    </main>
  );
}
