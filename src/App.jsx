import React from "react";
import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-fuchsia-400">.</span>
          </h1>

          <a
            href="#contact"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70 text-lg">
              High-end websites designed to convert visitors into real leads.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full">
                Get Quote
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={preview}
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* 🔥 NEW WORK SECTION */}
      <section className="py-28 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-fuchsia-300 uppercase tracking-widest text-xs mb-4">
            Work Samples
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Designs. Real Results.
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-16">
            A selection of real client work and high-end concept designs built for service-based businesses.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">

              {/* Glow */}
              <div className="absolute -inset-10 bg-fuchsia-500/20 blur-3xl rounded-full" />

              <img
                src={portfolio}
                alt="Portfolio mockups"
                className="relative w-full rounded-[1.5rem]"
              />

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Get a Quote
        </h2>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 rounded-xl" />
          <textarea name="message" required placeholder="What do you need?" className="w-full p-4 bg-white/10 rounded-xl" />

          <button className="w-full py-4 bg-white text-black rounded-full font-semibold">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
