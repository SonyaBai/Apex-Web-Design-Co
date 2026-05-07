export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-fuchsia-950/40" />

        <div className="absolute top-[-250px] right-[-200px] h-[700px] w-[700px] rounded-full bg-fuchsia-500/25 blur-[160px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-fuchsia-300">
            Premium Websites for Service Businesses
          </p>

          <h1 className="mb-8 max-w-5xl text-5xl font-black leading-[0.98] tracking-tight md:text-8xl">
            Websites Built to Grow
            <span className="block text-fuchsia-300">Your Business</span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-white/75">
            High-end websites, local SEO, and modern branding designed to turn
            visitors into real leads, calls, and revenue.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#contact"
              className="rounded-full bg-white px-9 py-4 text-lg font-semibold text-black shadow-[0_0_35px_rgba(217,70,239,.45)] transition hover:scale-105"
            >
              Get My Free Quote
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/10 px-9 py-4 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              View Work
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.18),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              Services
            </p>

            <h2 className="max-w-5xl text-5xl font-black tracking-tight md:text-6xl">
              Premium Design.
              <span className="block text-white/60">Built to Convert.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/60">
              A polished visual showcase of service-business websites built to
              create trust, increase visibility, and turn visitors into
              customers.
            </p>
          </div>

          <div className="overflow-hidden rounded-[40px] border border-fuchsia-500/30 bg-black shadow-[0_0_120px_rgba(217,70,239,0.18)]">
            <img
              src="/services-preview.png"
              alt="Premium website service previews"
              className="block h-auto w-full brightness-110"
            />
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
            Why It Works
          </p>

          <h2 className="mb-12 max-w-4xl text-4xl font-black md:text-6xl">
            Built for visibility, trust, and conversion.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "More Leads",
                "Clear layouts guide visitors toward calls, forms, and booked appointments.",
              ],
              [
                "Premium Trust",
                "A polished website makes your business look established, credible, and worth contacting.",
              ],
              [
                "SEO Ready",
                "Clean structure helps your services and locations get found online.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="text-lg leading-relaxed text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
              FAQ
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-5">
            {[
              [
                "How long does a website take?",
                "Most small business websites can be completed in 2–4 weeks depending on content, pages, and revisions.",
              ],
              [
                "Can you redesign an existing website?",
                "Yes. I can modernize an outdated website and make it stronger for leads, trust, and usability.",
              ],
              [
                "Do you build SEO-friendly sites?",
                "Yes. Sites are structured with mobile responsiveness, speed, clear sections, and local visibility in mind.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="mb-3 text-2xl font-bold">{question}</h3>
                <p className="text-lg leading-relaxed text-white/65">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-28 text-center bg-gradient-to-b from-black to-[#16001f]"
      >
        <h2 className="mb-6 text-4xl font-black md:text-5xl">
          Let’s build your next website
        </h2>

        <p className="mb-10 text-lg text-white/60">
          Tell me about your business and I’ll show you what’s possible.
        </p>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="mx-auto max-w-xl space-y-4 text-left"
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
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 outline-none focus:border-fuchsia-400"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 outline-none focus:border-fuchsia-400"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me about your project"
            className="w-full rounded-xl border border-white/10 bg-white/10 p-4 outline-none focus:border-fuchsia-400"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            Get My Free Website Quote
          </button>
        </form>
      </section>
    </main>
  );
}
