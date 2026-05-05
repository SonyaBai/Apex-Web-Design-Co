import React from "react";

import preview from "../elevated-auto-preview.png";
import portfolio from "../portfolio-mockup.png";
import dogTraining from "../dog-training-preview.png";

export default function App() {
  const primaryButton =
    "inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.45)] transition duration-300 hover:scale-[1.05] hover:bg-fuchsia-100";

  const services = [
    ["Custom Web Design", "Modern websites designed around your brand, offer, and ideal customer.", portfolio],
    ["Local SEO", "SEO-ready structure built to help your business get found online.", preview],
    ["Website Redesign", "Turn outdated websites into polished, high-converting assets.", dogTraining],
  ];

  const benefits = [
    ["01", "More Qualified Leads", "Designed to guide visitors toward calls, forms, and booked appointments."],
    ["02", "Premium Credibility", "A polished site instantly makes your business feel more trusted and established."],
    ["03", "SEO-Ready Structure", "Built with clean sections, keywords, speed, and local visibility in mind."],
    ["04", "Faster User Experience", "Clear layouts and fast pages help visitors stay longer and take action."],
    ["05", "Mobile-First Design", "Your site looks strong on phones, where most local customers are searching."],
    ["06", "Built to Scale", "Ready for future services, ads, SEO campaigns, and business growth."],
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Apex <span className="text-fuchsia-400">Web Design</span>
          </h1>
          <a href="#contact" className={primaryButton}>Get Quote</a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#140018] to-[#2a003f]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[17vw] font-black tracking-[-0.08em] text-white/[0.04] uppercase select-none">
            GROWTH
          </h2>
        </div>
        <div className="absolute top-[-200px] left-[-100px] w-[550px] h-[550px] bg-fuchsia-500/20 blur-[130px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[550px] h-[550px] bg-purple-600/20 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-fuchsia-300 text-xs uppercase tracking-[0.3em] mb-4">
              Premium websites for service businesses
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Designed to Grow <span className="text-fuchsia-300">Your Business</span>
            </h1>
            <p className="text-white/65 mt-6 text-lg max-w-lg">
              High-end, SEO-ready websites built to help you get more calls, more leads, and more trust online.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className={primaryButton}>Get My Free Website Quote</a>
              <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white hover:bg-white/10 transition">
                View Work
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img src={portfolio} alt="Website preview" className="rounded-2xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">Featured Project</p>
            <a href="https://www.elevateautoanddieselrepair.com" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-300 transition">
              <h2 className="text-4xl md:text-5xl font-bold">Elevated Auto & Diesel</h2>
            </a>
            <p className="text-white/60 mt-5 text-lg">
              A high-end website designed to build trust quickly and turn visitors into phone calls.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <a href="https://www.elevateautoanddieselrepair.com" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl">
              <img src={preview} alt="Elevated Auto preview" className="rounded-2xl w-full h-[420px] object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(([title, text, image]) => (
            <div key={title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] transition duration-500 shadow-2xl hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-white/60 mt-3 text-lg leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* $10K AGENCY BENEFITS SECTION */}
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
              Your website should do more than look good — it should help people find you, trust you, and contact you.
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
                  <span className="text-fuchsia-200 font-bold">{num}</span>
                </div>
                <h3 className="relative text-2xl font-semibold">{title}</h3>
                <p className="relative text-white/60 mt-4 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 text-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,204,.18),transparent_35%),linear-gradient(180deg,#000,#12001f)]">
        <h2 className="text-4xl font-bold mb-6">Let’s build your next website</h2>
        <p className="text-white/60 mb-8">Tell me about your business and I’ll show you what’s possible.</p>

        <form action="https://formspree.io/f/xojrvwwb" method="POST" className="max-w-xl mx-auto space-y-4 text-left">
          <input type="hidden" name="_subject" value="New Lead" />
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <button type="submit" className={`w-full ${primaryButton}`}>Get My Free Website Quote</button>
        </form>
      </section>

      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Apex Web Design
      </footer>
    </main>
  );
}
