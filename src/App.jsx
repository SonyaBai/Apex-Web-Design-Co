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
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-fuchsia-100 transition"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,0,204,.25),transparent_30%),linear-gradient(135deg,#020202,#150020,#31005d)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Premium Web Design for Service Businesses
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              High-end, SEO-ready websites designed to convert visitors into real leads.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-fuchsia-100 transition"
              >
                Get My Free Website Quote
              </a>

              <a
                href="tel:7204670527"
                className="border border-white/30 px-7 py-4 rounded-full hover:bg-white/10 transition"
              >
                Call Now
              </a>
            </div>
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
            ["Custom Web Design", "Modern websites designed around your brand and ideal customer."],
            ["Local SEO", "SEO-ready structure to help your business get found online."],
            ["Website Redesign", "Turn outdated websites into polished lead-generation tools."],
          ].map(([title, text]) => (
            <div key={title} className="p-7 rounded-3xl border border-white/10 bg-white/5">
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
            Real client work and polished concept designs to show what your business could look like online.
          </p>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={portfolio}
              alt="Premium website portfolio mockups"
              className="w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
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
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 rounded-xl" />
          <input name="phone" placeholder="Phone Number" className="w-full p-4 bg-white/10 rounded-xl" />
          <textarea name="message" required placeholder="What kind of website do you need?" rows="5" className="w-full p-4 bg-white/10 rounded-xl" />

          <button className="w-full py-4 bg-white text-black rounded-full font-semibold hover:bg-fuchsia-100 transition">
            Get My Free Website Quote
          </button>
        </form>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
