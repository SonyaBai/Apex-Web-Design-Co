import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import dogTraining from "../dog-training-preview.png";
import heroVideo from "../hero-video.mp4";

export default function App() {
  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.45)] transition duration-300 hover:scale-[1.05] hover:bg-fuchsia-100";

  const secondaryButton =
    "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition duration-300 hover:scale-[1.05] hover:bg-white/15";

  const services = [
    {
      title: "Custom Web Design",
      text: "A polished website designed around your brand, offer, and ideal customer.",
      image: portfolio,
    },
    {
      title: "Local SEO",
      text: "SEO-ready structure to help your business show up locally.",
      image: preview,
    },
    {
      title: "Website Redesign",
      text: "Upgrade an outdated site into a sharper, higher-converting presence.",
      image: dogTraining,
    },
  ];

  const faqs = [
    ["How long does a website take?", "Most starter websites take 7–14 days once content and direction are ready."],
    ["Do you help with SEO?", "Yes. Sites are built with clean structure, service keywords, speed, and local visibility in mind."],
    ["Can you redesign my current website?", "Yes. I can take an outdated site and turn it into something more modern, credible, and lead-focused."],
    ["Do you offer ongoing support?", "Yes. Ongoing updates, edits, SEO support, and maintenance can be added monthly."],
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex <span className="text-fuchsia-400">Web Design</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>

          <a href="#contact" className={primaryButton}>
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO VIDEO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,239,.28),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-5">
            Premium websites for service businesses
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Websites Built to Grow{" "}
            <span className="text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-white/80 mt-6 text-xl max-w-2xl">
            High-end, SEO-ready websites designed to turn visitors into leads,
            calls, and revenue.
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

      {/* WORK */}
      <section id="work" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Featured Project
            </p>

            <h2 className="text-4xl md:text-6xl font-bold">
              Elevated Auto & Diesel
            </h2>

            <p className="text-white/65 mt-6 text-lg">
              A premium automotive website designed to build trust quickly and
              turn visitors into phone calls.
            </p>

            <a
              href="https://www.elevateautoanddieselrepair.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryButton} mt-8`}
            >
              View Live Site
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src={preview}
              alt="Elevated Auto website preview"
              className="rounded-[1.5rem] w-full h-[460px] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl">
            Premium website services built to help local businesses grow.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl hover:-translate-y-2 hover:border-fuchsia-300/40 transition duration-500"
            >
              <div className="h-72 overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold">{service.title}</h3>
                <p className="text-white/65 mt-4 text-lg leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO FEATURE */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
          <div className="relative h-[520px] rounded-[1.5rem] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,.28),transparent_45%)]" />

            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16">
              <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
                Strategy + Design + Growth
              </p>

              <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
                Built to make your business look established online.
              </h2>

              <p className="text-white/75 mt-6 max-w-2xl text-lg">
                Your website should feel premium, load fast, and make it easy
                for customers to trust you and take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Website investment options
          </h2>

          <p className="text-white/60 mt-5 text-lg">
            Every project is customized based on scope, design needs, SEO goals,
            and features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Starter Site", "$1,000 – $2,500", "A clean professional site for businesses that need credibility fast."],
            ["Growth Website", "$2,500 – $5,000", "A stronger build with SEO-ready structure, service pages, and lead-focused design."],
            ["Premium Build", "$5,000+", "A custom website for businesses ready to scale, compete, and look established."],
          ].map(([title, price, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl hover:-translate-y-2 hover:border-fuchsia-300/40 transition duration-500"
            >
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-4xl font-bold mt-6">{price}</p>
              <p className="text-white/60 mt-6 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Questions before we build?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <summary className="cursor-pointer text-xl font-semibold">
                {question}
              </summary>

              <p className="text-white/60 mt-4 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 px-6 text-center bg-[radial-gradient(circle_at_50%_20%,rgba(217,70,239,.22),transparent_35%),linear-gradient(180deg,#000,#12001f)]"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to build your website?
        </h2>

        <p className="text-white/65 mb-10">
          Send a quick message and I’ll follow up with next steps.
        </p>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <input type="hidden" name="_subject" value="New Lead - Apex Web Design Co" />

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
            placeholder="Tell me about your project"
            className="w-full p-4 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-fuchsia-300"
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
