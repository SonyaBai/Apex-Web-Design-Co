import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  RefreshCcw,
  Star,
  Phone,
} from "lucide-react";

import portfolioMockup from "../portfolio-mockup.png";
import elevatedPreview from "../elevated-auto-preview.png";
import servicesPreview from "../services-preview.png";

export default function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center border-b border-white/10 overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-fuchsia-600/20 blur-[180px] rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.35em] text-fuchsia-300 text-sm mb-6">
              Premium Websites for Service Businesses
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
              Websites Built to Grow
              <span className="block text-fuchsia-300">
                Your Business
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              High-end websites, local SEO strategy, and modern
              branding designed to turn traffic into real leads,
              calls, and revenue.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all">
                Get My Free Website Quote
              </button>

              <button className="border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* SERVICES */}
<section className="relative py-32 px-6 overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.18),transparent_60%)]"></div>

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* HEADER */}
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[0.3em] text-fuchsia-300 text-sm mb-4">
        Services
      </p>

      <h2 className="text-5xl md:text-6xl font-black tracking-tight">
        Premium Design.
        <span className="block text-white/60">
          Built to Convert.
        </span>
      </h2>
    </div>

    {/* MAIN SHOWCASE */}
    <div className="group relative rounded-[40px] overflow-hidden border border-fuchsia-500/20 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_120px_rgba(217,70,239,0.10)]">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={servicesPreview}
          alt="Services Preview"
          className="w-full object-cover brightness-110 group-hover:scale-[1.01] transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
      </div>

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-14">
        <div className="w-24 h-1 bg-fuchsia-500 rounded-full mb-6"></div>

        <h3 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl">
          Strategic Websites Designed
          to Grow Your Business
        </h3>

        <p className="text-white/70 text-lg md:text-2xl leading-relaxed max-w-3xl">
          High-end web design, local SEO, branding,
          and conversion-focused layouts built for
          modern service businesses.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FAQ */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-fuchsia-300 text-sm mb-4">
              FAQ
            </p>

            <h2 className="text-5xl font-black">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How long does a website take?",
                a: "Most projects are completed within 2–4 weeks depending on content, revisions, and scope.",
              },
              {
                q: "Do you build SEO-friendly websites?",
                a: "Yes. Every website is structured with performance, local SEO, and mobile responsiveness in mind.",
              },
              {
                q: "Can you redesign an existing website?",
                a: "Absolutely. We modernize outdated websites and improve branding, conversions, and usability.",
              },
              {
                q: "Do you offer hosting and support?",
                a: "Yes. We can help with hosting, maintenance, updates, and long-term website support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {item.q}
                </h3>

                <p className="text-white/65 text-lg leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
