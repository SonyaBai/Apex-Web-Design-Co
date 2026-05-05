import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";

export default function App() {
  const primaryButton =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,0.45)] transition duration-300 hover:scale-[1.05] hover:bg-fuchsia-100";

  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.05] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]";

  const services = [
    {
      title: "Custom Web Design",
      text: "Modern websites designed around your brand, offer, and ideal customer.",
      image: portfolio,
    },
    {
      title: "Local SEO",
      text: "SEO-ready structure built to help your business get found online.",
      image: preview,
    },
    {
      title: "Website Redesign",
      text: "Turn outdated websites into polished, high-converting assets.",
      image: portfolio,
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
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
              High-end, SEO-ready websites built to help you get more calls,
              leads, and trust online.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className={primaryButton}>
                Get My Free Website Quote
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
              A high-end website designed to build trust quickly and turn
              visitors into phone calls.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <a
              href="https://www.elevateautoanddieselrepair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl"
            >
              <img
                src={preview}
                alt="Elevated Auto preview"
                className="rounded-2xl w-full h-[420px] object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] transition duration-500 shadow-2xl hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="text-white/60 mt-3 text-lg leading-relaxed">
                  {service.text}
                </p>
              </div>
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
          <input type="hidden" name="_subject" value="New Lead" />

          <input
            name="name"
            required
            placeholder="Name"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me about your project"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl"
          />

          <button type="submit" className={`w-full ${primaryButton}`}>
            Get My Free Website Quote
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Apex Web Design
      </footer>
    </main>
  );
}
