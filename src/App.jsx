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

  const faqs = [
    [
      "How long does a website take?",
      "Most small business websites can be completed in 7–14 days depending on pages, content, and revisions.",
    ],
    [
      "Will my website be mobile-friendly?",
      "Yes. Every site is built to look polished on phones, tablets, and desktop screens.",
    ],
    [
      "Can you redesign my current website?",
      "Yes. I can modernize an outdated website and make it stronger for leads, trust, and usability.",
    ],
    [
      "Do you include SEO?",
      "Your website is built with SEO-ready structure, clean sections, service keywords, and local visibility in mind.",
    ],
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
      <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2b0037]/60" />

        {/* BACKGROUND TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h2 className="text-[14vw] font-black tracking-[-0.08em] text-white/[0.05] uppercase">
            Built for Growth
          </h2>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-fuchsia-300 text-xs uppercase tracking-[0.3em] mb-4">
            Premium websites for service businesses
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Websites Built to Grow{" "}
            <span className="text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-white/75 mt-6 text-lg max-w-2xl leading-relaxed">
            High-end, SEO-ready websites designed to turn visitors into
            real leads, calls, and revenue.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
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
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-lg text-white/75 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Why It Works
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Built for visibility, trust, and conversion.
            </h2>

            <p className="text-white/60 mt-5 text-lg">
              Your website should do more than look good — it should help
              people find you, trust you, and contact you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(([num, title, text]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="absolute -inset-24 bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/25 to-purple-700/20 shadow-[0_0_30px_rgba(217,70,239,.18)]">
                  <span className="text-fuchsia-200 font-bold">
                    {num}
                  </span>
                </div>

                <h3 className="relative text-2xl font-semibold">
                  {title}
                </h3>

                <p className="relative text-white/60 mt-4 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Investment
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Built for growth — not templates.
          </h2>

          <p className="text-white/60 mt-5 text-lg">
            Every website is custom-built based on your business,
            services, and growth goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              "Starter Site",
              "$1,000 – $2,500",
              "For businesses that need a polished, professional online presence.",
            ],
            [
              "Growth Website",
              "$2,500 – $5,000",
              "For businesses ready to generate consistent leads and rank locally.",
            ],
            [
              "Premium Build",
              "$5,000+",
              "For businesses that want a high-end, scalable website built for expansion.",
            ],
          ].map(([title, price, text], index) => (
            <div
              key={title}
              className={`rounded-3xl p-8 border transition duration-500 hover:-translate-y-2 ${
                index === 1
                  ? "border-fuchsia-500/40 bg-fuchsia-900/15 shadow-[0_0_40px_rgba(217,70,239,.2)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>

              <p className="text-3xl font-bold mb-5">{price}</p>

              <p className="text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold">{question}</h3>

              <p className="text-white/60 mt-3">{answer}</p>
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
          <input
            type="hidden"
            name="_subject"
            value="New Lead - Apex Web Design"
          />

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

      {/* FOOTER */}
      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Apex Web Design
      </footer>
    </main>
  );
}
