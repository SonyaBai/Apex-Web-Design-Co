import React, { useEffect } from "react";
import preview from "../elevated-auto-preview.png";

export default function App() {

  // 🔥 Scroll animation logic
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex<span className="text-fuchsia-400">.</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,0,204,.4),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(106,0,255,.5),transparent_35%),linear-gradient(135deg,#020202,#130020,#32005f)]" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="fade-in">
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Apex Web Design Co
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That Bring You Clients
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl">
              High-end websites designed to convert visitors into real leads.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#contact" className="bg-white text-black px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
                Get My Free Website Quote
              </a>

              <a href="tel:7204670527" className="border border-white/30 px-7 py-4 rounded-full hover:bg-white/10 transition">
                Call Now
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="fade-in relative hidden lg:block">
            <div className="absolute -inset-10 bg-fuchsia-500/25 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-2xl rotate-1 hover:rotate-0 transition duration-500">
              <img
                src={preview}
                alt="project"
                className="w-full h-[520px] object-cover object-top rounded-[1.5rem] hover:scale-105 transition duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 fade-in">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Web Design", "SEO", "Redesign"].map((item) => (
            <div
              key={item}
              className="fade-in p-7 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold">{item}</h3>
              <p className="text-white/60 mt-3">
                Premium solutions designed to generate leads and grow your business.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="py-28 px-6 bg-gradient-to-b from-black via-purple-950/30 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 fade-in">
            Work Samples
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[preview, preview].map((img, i) => (
              <div key={i} className="fade-in border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition">
                <img src={img} className="w-full h-[400px] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 fade-in">
          Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Strategy", "Design", "Launch"].map((step) => (
            <div key={step} className="fade-in p-8 border border-white/10 rounded-3xl bg-white/5">
              <h3 className="text-2xl font-semibold">{step}</h3>
              <p className="text-white/60 mt-3">
                Simple, fast, and focused on results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 fade-in">
          Get a Quote
        </h2>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4 fade-in"
        >
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 rounded-xl" />
          <textarea name="message" required placeholder="What do you need?" className="w-full p-4 bg-white/10 rounded-xl" />

          <button className="w-full py-4 bg-white text-black rounded-full font-semibold hover:bg-fuchsia-100 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* ANIMATION STYLES */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </main>
  );
}
