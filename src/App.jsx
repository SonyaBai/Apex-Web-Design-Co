import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Apex Web Design</h1>

          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70">
              High-end websites designed to convert visitors into real leads.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold"
              >
                Get Started
              </a>

              <a
                href="tel:7204670527"
                className="border border-white/30 px-6 py-3 rounded-full"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (YOUR IMAGE) */}
          <div className="relative hidden lg:block">

            <div className="absolute -inset-10 bg-fuchsia-500/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="rounded-2xl overflow-hidden border border-white/10">

                <img
                  src="/elevated-auto-preview.png"
                  alt="Elevated Auto Project"
                  className="w-full h-[500px] object-cover object-top"
                />

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="font-semibold text-lg">Web Design</h3>
            <p className="text-white/60 mt-2">Modern, high-converting sites.</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="font-semibold text-lg">SEO</h3>
            <p className="text-white/60 mt-2">Rank higher on Google.</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="font-semibold text-lg">Redesign</h3>
            <p className="text-white/60 mt-2">Upgrade outdated websites.</p>
          </div>
        </div>
      </section>

      {/* CONTACT (FORM) */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Get a Free Quote
        </h2>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full p-4 bg-white/10 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-white/10 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="What do you need?"
            required
            className="w-full p-4 bg-white/10 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
