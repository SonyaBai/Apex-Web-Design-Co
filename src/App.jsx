export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-[#2b0037]/30" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-fuchsia-300 text-xs uppercase tracking-[0.3em] mb-4">
            Premium websites for service businesses
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Websites Built to Grow{" "}
            <span className="text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-white/80 mt-6 text-lg max-w-2xl leading-relaxed">
            High-end, SEO-ready websites designed to turn visitors into real leads, calls, and revenue.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="rounded-full bg-white px-10 py-5 text-lg font-semibold text-black">
              Get My Free Website Quote
            </a>

            <a href="#services" className="rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white">
              View Work
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-fuchsia-300 uppercase tracking-[0.3em] text-xs mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
              Premium websites designed to look elevated and convert visitors into customers.
            </h2>
          </div>

          <div className="rounded-[40px] overflow-hidden border border-fuchsia-500/30 bg-black shadow-[0_0_120px_rgba(217,70,239,0.18)]">
            <img
              src="/services-preview.png"
              alt="Premium website services preview"
              className="block w-full h-auto brightness-110"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 text-center bg-gradient-to-b from-black to-[#12001f]">
        <h2 className="text-4xl font-bold mb-6">Let’s build your next website</h2>

        <form action="https://formspree.io/f/xojrvwwb" method="POST" className="max-w-xl mx-auto space-y-4 text-left">
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />

          <button type="submit" className="w-full rounded-full bg-white px-8 py-4 text-lg font-semibold text-black">
            Get My Free Website Quote
          </button>
        </form>
      </section>
    </main>
  );
}
