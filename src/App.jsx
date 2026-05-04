import React from "react";
import preview from "../elevated-auto-preview.png";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-fuchsia-400">.</span> Web Design
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
      <section className="relative min-h-screen flex items-center pt-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,0,204,.35),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(106,0,255,.45),transparent_35%),linear-gradient(135deg,#030303,#12001f,#2a0055)]" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Apex Web Design Co
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              High-end, SEO-ready websites designed for service businesses that
              want more calls, more leads, and a stronger online presence.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-white text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition"
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

            <p className="mt-6 text-sm text-white/50">
              Fast turnaround • Mobile-first • SEO-ready • Built to convert
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-fuchsia-500/25 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
              <div className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-black">
                <img
                  src={preview}
                  alt="Elevated Auto & Diesel website project preview"
                  className="w-full h-[520px] object-cover object-top rounded-[1.5rem] hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-8 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-5 shadow-xl">
              <p className="text-2xl font-bold">Real Project</p>
              <p className="text-white/50 text-sm">Elevated Auto & Diesel</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
        <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-12 max-w-4xl">
          Premium websites built to make your business look established.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-7 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold">Custom Web Design</h3>
            <p className="text-white/60 mt-3">
              Modern, high-converting websites tailored to your brand and ideal
              customer.
            </p>
          </div>

          <div className="p-7 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold">Local SEO</h3>
            <p className="text-white/60 mt-3">
              SEO-ready structure to help your business get found on Google.
            </p>
          </div>

          <div className="p-7 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold">Website Redesign</h3>
            <p className="text-white/60 mt-3">
              Turn outdated websites into polished, lead-focused sales tools.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-28 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Recent Project
          </h2>

          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={preview}
              alt="Elevated Auto & Diesel website preview"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Why Apex
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              No generic templates. No confusing agency process.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Designed to generate calls and form submissions",
              "Mobile-first experience for customers on the go",
              "SEO-ready structure from day one",
              "Premium visuals that make your business look established",
            ].map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white/75"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 text-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,204,.22),transparent_35%),linear-gradient(180deg,#000,#12001f)]"
      >
        <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
          Start Today
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready for a website that works harder for your business?
        </h2>

        <p className="text-white/65 text-lg mb-10">
          Send a quick message and I’ll follow up with next steps.
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
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-fuchsia-300 placeholder:text-white/40"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-fuchsia-300 placeholder:text-white/40"
          />

          <input
            name="phone"
            placeholder="Phone Number (optional)"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-fuchsia-300 placeholder:text-white/40"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me what kind of website you need"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-fuchsia-300 placeholder:text-white/40"
          />

          <button
            type="submit"
            className="w-full py-4 bg-white text-black rounded-full font-semibold hover:bg-fuchsia-100 transition"
          >
            Get My Free Website Quote
          </button>

          <p className="text-sm text-white/50 text-center">
            I usually respond within 1–2 hours.
          </p>
        </form>

        <p className="mt-8 text-white/50 text-sm">
          Prefer to text?{" "}
          <a href="tel:7204670527" className="text-white underline">
            720-467-0527
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
