import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-purple-800 via-black to-pink-600">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Apex Web Design Co
        </h1>

        <p className="mt-6 text-xl text-white/80 max-w-2xl">
          High-End Websites Built to Generate Leads — Not Just Look Good
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition">
            Get a Website
          </a>

          <a href="#services" className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
            View Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Custom Web Design</h3>
            <p className="text-white/70">
              Modern, high-converting websites tailored to your business.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
            <p className="text-white/70">
              Rank higher on Google and get more local leads.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">Website Redesign</h3>
            <p className="text-white/70">
              Turn outdated websites into powerful sales tools.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 text-center text-white/60">
        <p>Serving businesses across the U.S.</p>
        <p className="mt-2">Fast turnaround • Clean design • Results-focused</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Get Started</h2>

        <form
          action="https://formspree.io/f/xrejglrl"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-white/10" />
          <input name="email" type="email" placeholder="Your Email" required className="w-full p-3 rounded bg-white/10" />
          <textarea name="message" placeholder="What do you need?" required className="w-full p-3 rounded bg-white/10" />

          <button type="submit" className="w-full py-3 bg-purple-600 rounded hover:bg-purple-500 transition">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
