export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <p className="uppercase tracking-[0.35em] text-fuchsia-300 text-sm mb-6">
            Premium Websites for Service Businesses
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8">
            Websites Built to Grow
            <span className="block text-fuchsia-300">Your Business</span>
          </h1>

          <p className="text-xl text-white/75 max-w-2xl leading-relaxed mb-10">
            High-end websites, local SEO, and modern branding designed to turn visitors into leads.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg"
          >
            Get My Free Quote
          </a>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-fuchsia-300 text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-12">
            Premium Design.
            <span className="block text-white/60">Built to Convert.</span>
          </h2>

          <div className="rounded-[40px] overflow-hidden border border-fuchsia-500/30 bg-black shadow-[0_0_120px_rgba(217,70,239,0.18)]">
            <img
              src="/services-preview.png"
              alt="Services preview"
              className="w-full h-auto block brightness-110"
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-28 px-6 text-center bg-gradient-to-b from-black to-[#16001f]"
      >
        <h2 className="text-5xl font-black mb-6">
          Let’s build your next website
        </h2>

        <p className="text-white/60 mb-10 text-lg">
          Tell me about your business and I’ll show you what’s possible.
        </p>

        <form
          action="https://formspree.io/f/xojrvwwb"
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <input name="name" required placeholder="Name" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full p-4 bg-white/10 border border-white/10 rounded-xl" />

          <button type="submit" className="w-full bg-white text-black px-8 py-4 rounded-full font-semibold text-lg">
            Get My Free Website Quote
          </button>
        </form>
      </section>
    </div>
  );
}
