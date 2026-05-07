import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  RefreshCcw,
  Star,
  Phone,
  Play,
} from "lucide-react";

import portfolioMockup from "../portfolio-mockup.png";
import elevatedPreview from "../elevated-auto-preview.png";
import dogPreview from "../dog-training-preview.png";
import servicesPreview from "../services-preview.png";

export default function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b border-white/10">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Purple Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-fuchsia-600/20 blur-[180px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
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
              High-converting websites, local SEO strategy, and modern
              branding designed to turn traffic into real leads,
              calls, and revenue.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all">
                Get My Free Quote
              </button>

              <button className="border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-fuchsia-300 text-sm mb-4">
              Services
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Premium Design.
              <span className="block text-white/60">
                Real Business Results.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="group rounded-[34px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={portfolioMockup}
                  alt="Portfolio"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="w-20 h-1 bg-fuchsia-500 rounded-full mb-6"></div>

                <h3 className="text-4xl font-bold mb-5">
                  Custom Web Design
                </h3>

                <p className="text-white/65 text-xl leading-relaxed">
                  Modern websites designed around your brand,
                  services, and ideal customer.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group rounded-[34px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={elevatedPreview}
                  alt="SEO"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="w-20 h-1 bg-fuchsia-500 rounded-full mb-6"></div>

                <h3 className="text-4xl font-bold mb-5">
                  Local SEO
                </h3>

                <p className="text-white/65 text-xl leading-relaxed">
                  SEO-focused structure built to help your
                  business rank and get found locally.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group rounded-[34px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
              {/* IMAGE ONLY */}
              <div className="relative h-[420px] overflow-hidden bg-black">
                <img
                  src={dogPreview}
                  alt="Website Redesign"
                  className="w-full h-full object-cover object-center brightness-125 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              </div>

              {/* TEXT BELOW */}
              <div className="p-8">
                <div className="w-20 h-1 bg-fuchsia-500 rounded-full mb-6"></div>

                <h3 className="text-4xl font-bold mb-5">
                  Website Redesign
                </h3>

                <p className="text-white/65 text-xl leading-relaxed">
                  Transform outdated websites into polished,
                  high-converting digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10">
            <img
              src={servicesPreview}
              alt="Agency Preview"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-10 left-10">
              <p className="uppercase tracking-[0.3em] text-fuchsia-300 text-sm mb-3">
                Built for Growth
              </p>

              <h2 className="text-5xl md:text-6xl font-black max-w-3xl">
                Strategic websites designed to look premium
                and convert visitors into customers.
              </h2>
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
                a: "Most websites are completed within 2–4 weeks depending on the size and content needed.",
              },
              {
                q: "Do you offer SEO?",
                a: "Yes. Every website is built with SEO structure, fast performance, and local visibility in mind.",
              },
              {
                q: "Can you redesign my existing website?",
                a: "Absolutely. We modernize outdated websites and improve conversion performance.",
              },
              {
                q: "Do you provide hosting support?",
                a: "Yes. We can help with hosting, domains, maintenance, and ongoing updates.",
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
