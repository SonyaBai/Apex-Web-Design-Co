import React from "react";
import preview from "../elevated-auto-preview.png";

export default function App() {
  const services = [
    ["Custom Web Design", "Premium websites built to make your business look established and convert visitors into leads."],
    ["Local SEO", "SEO-ready structure, keywords, and content sections designed for local Google visibility."],
    ["Website Redesign", "Transform an outdated website into a polished, modern sales tool."],
  ];

  const samples = [
    ["Elevated Auto & Diesel", "Luxury auto repair website", preview],
    ["Contractor Demo Site", "Lead-generation layout for home services", null],
    ["Med Spa Demo Site", "Premium beauty/wellness landing page", null],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-fuchsia-400">.</span> Web Design
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,0,204,.38),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(106,0,255,.45),transparent_35%),linear-gradient(135deg,#020202,#130020,#32005f)]" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute top-32 left-10 w-32 h-32 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Apex Web Design Co
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              High-end, SEO-ready websites for service businesses that want more
              calls, more leads, and a stronger online presence.
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

          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-fuchsia-500/25 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
              <div className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-black">
                <img
                  src={preview}
                  alt="Elevated Auto & Diesel website preview"
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

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-4 gap-6 text-center">
          {["Premium Design", "Lead-Focused", "Mobile-First", "SEO-Ready"].map((item) => (
            <div key={item} className="text-white/65 text-sm uppercase tracking-widest">
              {item}
            </div>
          ))}
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
          {services.map(([title, text]) => (
            <div
              key={title}
              className="group p-7 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 to-purple-600/30 mb-8 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-white/60 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK SAMPLES */}
      <section id="work" className="py-28 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Work Samples
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Visual examples that help clients trust you fast.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {samples.map(([title, type, image], index) => (
              <div
                key={title}
                className="group rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition duration-300"
              >
                <div className="h-80 overflow-hidden bg-gradient-to-br from-fuchsia-900/60 via-purple-950 to-black">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                    />
                  ) : (
                    <div className="h-full p-6 flex flex-col justify-between">
                      <div className="h-10 rounded-full bg-white/10 w-2/3" />
                      <div className="space-y-4">
                        <div className="h-28 rounded-2xl bg-white/10 border border-white/10" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 rounded-xl bg-white/10" />
                          <div className="h-20 rounded-xl bg-white/10" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <p className="text-fuchsia-300 text-sm mb-2">0{index + 1}</p>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-white/60 mt-2">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-28 px-6 max-w-7xl mx-auto">
        <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
          Process
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Simple process. Premium result.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["01", "Strategy", "We clarify your offer, ideal customer, services, and local SEO goals."],
            ["02", "Design", "I build a premium layout with strong calls-to-action and clean mobile flow."],
            ["03", "Launch", "Your domain, form, SEO structure, and live site are set up for leads."],
          ].map(([num, title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-fuchsia-300 text-sm mb-10">{num}</p>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-white/60 mt-4">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM OFFER */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-fuchsia-500/10 p-10 md:p-16 text-center shadow-2xl">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Starter Offer
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Get a premium website without agency pricing.
          </h2>

          <p className="mt-6 text-white/65 max-w-2xl mx-auto text-lg">
            Perfect for small businesses that need a professional online presence quickly.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-4 text-left">
            {[
              "Custom homepage design",
              "Mobile-friendly layout",
              "Contact form setup",
              "Basic local SEO structure",
              "Fast turnaround",
              "Direct communication",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-black/40 border border-white/10 p-4">
                ✓ {item}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Request My Quote
          </a>
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

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Apex Web Design Co. All rights reserved.
      </footer>
    </main>
  );
}
