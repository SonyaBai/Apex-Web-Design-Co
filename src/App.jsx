import React from "react";

export default function App() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ color: "#f0abfc", letterSpacing: "4px", textTransform: "uppercase", fontSize: "14px" }}>
            Premium websites for service businesses
          </p>

          <h1 style={{ fontSize: "clamp(48px, 8vw, 100px)", lineHeight: ".95", margin: "20px 0", fontWeight: 900 }}>
            Websites Built to Grow <span style={{ color: "#f0abfc", display: "block" }}>Your Business</span>
          </h1>

          <p style={{ fontSize: "22px", maxWidth: "700px", color: "rgba(255,255,255,.75)", lineHeight: 1.5 }}>
            High-end, SEO-ready websites designed to turn visitors into real leads, calls, and revenue.
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: "32px",
              background: "#fff",
              color: "#000",
              padding: "18px 32px",
              borderRadius: "999px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Get My Free Website Quote
          </a>
        </div>
      </section>

      <section id="services" style={{ padding: "90px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ color: "#f0abfc", letterSpacing: "4px", textTransform: "uppercase" }}>Services</p>

        <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", marginBottom: "40px" }}>
          Premium Design. <span style={{ color: "rgba(255,255,255,.55)" }}>Built to Convert.</span>
        </h2>

        <div style={{ border: "1px solid rgba(217,70,239,.45)", borderRadius: "32px", overflow: "hidden", boxShadow: "0 0 80px rgba(217,70,239,.22)" }}>
          <img
            src="/services-preview.png"
            alt="Services preview"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </section>

      <section id="contact" style={{ padding: "90px 24px", textAlign: "center", background: "linear-gradient(#000, #170020)" }}>
        <h2 style={{ fontSize: "48px" }}>Let’s build your next website</h2>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: "20px" }}>
          Tell me about your business and I’ll show you what’s possible.
        </p>
      </section>
    </main>
  );
}
