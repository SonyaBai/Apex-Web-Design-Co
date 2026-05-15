import React, { useState } from "react";

const services = [
  {
    kicker: "01 / Strategy",
    title: "Custom Website Design",
    text: "Custom digital experiences shaped around your offer, your market, and the actions you want visitors to take.",
  },
  {
    kicker: "02 / Visibility",
    title: "SEO Foundations",
    text: "Search-ready structure, fast pages, strong headings, and local signals so the right customers can find you.",
  },
  {
    kicker: "03 / Conversion",
    title: "Lead-Focused Pages",
    text: "Strategic calls to action, trust-building sections, and layouts that make the next step feel effortless.",
  },
  {
    kicker: "04 / Care",
    title: "Monthly Growth Care",
    text: "Hosting, SEO support, performance monitoring, and site updates handled under one polished monthly plan.",
  },
  {
    kicker: "05 / Refresh",
    title: "Website Redesign",
    text: "A sharper visual system, clearer message, and stronger mobile experience for sites that no longer match the business.",
  },
  {
    kicker: "06 / Tools",
    title: "Booking & Integrations",
    text: "Forms, review sections, galleries, social feeds, promo banners, and service features designed around real customer action.",
  },
];

const processSteps = [
  "Discovery call",
  "Homepage direction",
  "Full site build",
  "Launch support",
];

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Most starter sites can launch in one to three weeks once content, photos, and direction are ready.",
  },
  {
    question: "Can you improve an existing site?",
    answer: "Yes. Apex can refresh the design, tighten the message, improve speed, and make the site easier to update.",
  },
  {
    question: "Do you help with mobile design?",
    answer: "Every layout is built for phones first, then refined for tablets and desktop screens.",
  },
];

const googleReviewsUrl = "https://www.google.com/search?q=Apex+Web+Design+Co+reviews";

const reviewHighlights = [
  {
    title: "Google Business Profile",
    text: "A dedicated trust section designed to connect visitors with your public Google reviews and business profile.",
  },
  {
    title: "Review-ready layout",
    text: "Built so live Google review widgets or approved API feeds can be added without redesigning the page.",
  },
  {
    title: "Proof before the form",
    text: "Placed near the quote flow so visitors see credibility signals before sending an information request.",
  },
];

const menuItems = [
  { label: "Services", href: "#services", detail: "Design, SEO, hosting, and care" },
  { label: "Case Studies", href: "#case-studies", detail: "Recent client work and outcomes" },
  { label: "Work by Industry", href: "#work-by-industry", detail: "Visual directions for service brands" },
  { label: "Digital Trends", href: "#digital-trends", detail: "What modern buyers expect online" },
  { label: "About", href: "#about", detail: "How Apex builds trust-first websites" },
  { label: "Reviews", href: "#reviews", detail: "Google Business trust signals" },
  { label: "Contact", href: "#contact", detail: "Start an information request" },
];

const aboutExamples = [
  { src: "/about-example-medspa.jpg", delay: "0s", top: "10%", right: "-4vw", width: "min(62vw, 930px)", rotate: "-2deg" },
  { src: "/about-example-pet.jpg", delay: "4s", top: "18%", right: "5vw", width: "min(52vw, 780px)", rotate: "2deg" },
  { src: "/about-example-balanced-therapy.png", delay: "8s", top: "9%", right: "-6vw", width: "min(60vw, 900px)", rotate: "1deg" },
  { src: "/about-example-therapist.png", delay: "12s", top: "12%", right: "10vw", width: "min(38vw, 560px)", rotate: "-1deg" },
  { src: "/about-example-realtor.png", delay: "16s", top: "8%", right: "6vw", width: "min(40vw, 580px)", rotate: "2deg" },
  { src: "/about-example-loans.png", delay: "20s", top: "16%", right: "12vw", width: "min(40vw, 580px)", rotate: "-2deg" },
  { src: "/about-example-dentist.png", delay: "24s", top: "10%", right: "14vw", width: "min(32vw, 460px)", rotate: "1deg" },
  { src: "/about-example-beauty.png", delay: "28s", top: "9%", right: "11vw", width: "min(32vw, 460px)", rotate: "-2deg" },
  { src: "/about-example-groomer.png", delay: "32s", top: "14%", right: "9vw", width: "min(32vw, 460px)", rotate: "2deg" },
  { src: "/about-example-mechanic.png", delay: "36s", top: "12%", right: "10vw", width: "min(32vw, 460px)", rotate: "-1deg" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <div className="site-nav">
        <button className="menu-trigger" type="button" onClick={() => setMenuOpen(true)}>
          <span className="menu-bars" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          Menu
        </button>
        <a className="quote-link" href="#contact-form">Request a Quote</a>
      </div>

      <aside className={`menu-pane ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-pane-top">
          <div className="menu-brand">
            <span>Apex</span>
            <strong>Web Design Co</strong>
          </div>
          <a className="quote-link quote-link-pane" href="#contact-form" onClick={() => setMenuOpen(false)}>
            Request a Quote
          </a>
          <button className="menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        <nav className="menu-links" aria-label="Site sections">
          {menuItems.map((item, index) => (
            <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <em>{item.detail}</em>
            </a>
          ))}
        </nav>
        <p className="menu-note">Premium websites built for service businesses that need more calls, quote requests, and credibility.</p>
      </aside>
      {menuOpen && (
        <button className="menu-scrim" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"></button>
      )}

      <section className="hero" aria-label="Apex Web Design">
        <video className="hero-video" autoPlay muted loop playsInline poster="/services-preview.png">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="container hero-content">
          <img className="hero-logo" src="/apex-logo.png" alt="Apex Web Design Co" />
          <p className="eyebrow">Apex Web Design Co</p>
          <h1>
            Digital Precision for Brands Built for Impact
          </h1>
          <p className="hero-copy">
            Top-tier websites for service businesses that need credibility, clarity, and a smoother path from first visit to inquiry.
          </p>
          <a className="button" href="#contact">
            Get a Free Website Quote
          </a>
        </div>
      </section>

      <section className="stats band">
        <div className="container stats-grid">
          <div>
            <strong>24/7</strong>
            <span>Your best salesperson online</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Pages designed for quick loading</span>
          </div>
          <div>
            <strong>Mobile</strong>
            <span>Layouts made for phone-first buyers</span>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h2>
            Measurable brand transformation.
          </h2>
          <p className="section-intro">
            A more polished online presence built around trust, conversion, visibility, and the details that make a local business feel established.
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <span className="service-kicker">{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="preview-frame">
            <img
              src="/services-preview.png"
              alt="Apex Web Design service examples featuring beauty, auto repair, and dog training websites"
            />
          </div>
        </div>
      </section>

      <section id="work-by-industry" className="section recent-work topic-section">
        <div className="container examples-section">
          <p className="eyebrow">Website Examples</p>
          <h2>
            More visual directions for service brands.
          </h2>
          <div className="filmstrip-showcase" aria-label="Website example cinematic film strip">
            <video className="filmstrip-video" autoPlay muted loop playsInline poster="/website-examples-service-business.png">
              <source src="/website-filmstrip.mp4" type="video/mp4" />
            </video>
            <div className="film-copy">
              <span>Website examples in motion</span>
              <p>Elevated web direction for service brands that need to look trusted before the first call.</p>
              <p className="film-detail">Built for pet care, cleaning, med spa, beauty, dental, therapy, and local brands, with polished options for booking forms, local SEO, before-and-after galleries, social feeds, financing, service alerts, promotions, and Google reviews.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section recent-work topic-section">
        <div className="container work-panel">
          <div>
            <p className="eyebrow">Recent Work</p>
            <h2>
              Elevated Auto & Diesel Repair.
            </h2>
            <p>
              A service-business website built to make the shop look credible, help local drivers understand
              the offer quickly, and move visitors toward contacting the team.
            </p>
          </div>
          <a
            className="button"
            href="https://www.elevateautoanddieselrepair.com"
            target="_blank"
            rel="noreferrer"
          >
            View Live Site
          </a>
        </div>
      </section>

      <section id="digital-trends" className="section topic-section digital-trends-section">
        <div className="container topic-panel">
          <p className="eyebrow">Digital Trends</p>
          <h2>Modern websites need more than good looks.</h2>
          <div className="topic-grid">
            <article className="card">
              <h3>Mobile-first buying</h3>
              <p>Most service customers compare options from their phone, so layouts need to be fast, direct, and easy to act on.</p>
            </article>
            <article className="card">
              <h3>Local search trust</h3>
              <p>Clear service pages, strong headings, and consistent business details help customers and search engines understand what you offer.</p>
            </article>
            <article className="card">
              <h3>Conversion-focused pages</h3>
              <p>Every section should move visitors toward a quote, call, or request instead of leaving them wondering what to do next.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section topic-section about-section">
        <div className="about-background" aria-hidden="true">
          {aboutExamples.map((example) => (
            <img
              src={example.src}
              alt=""
              key={example.src}
              style={{
                "--about-delay": example.delay,
                "--about-top": example.top,
                "--about-right": example.right,
                "--about-width": example.width,
                "--about-rotate": example.rotate,
              }}
            />
          ))}
        </div>
        <div className="container topic-panel about-content">
          <p className="eyebrow">About</p>
          <h2>Premium web design for service businesses that want to look established.</h2>
          <p>
            Apex Web Design Co creates polished websites for local businesses that need credibility, clarity,
            and a smoother path from first visit to inquiry. The focus is simple: make your business easier
            to trust, easier to understand, and easier to contact.
          </p>
        </div>
      </section>

      <section className="section split">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Process</p>
            <h2>
              A clear path from idea to launch.
            </h2>
          </div>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-row" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="container pricing-panel">
          <div>
            <p className="eyebrow">Starter Package</p>
            <h2>Launch-ready website essentials.</h2>
            <p>
              Perfect for a local service business that needs a credible, modern site with a sharp homepage,
              service section, mobile layout, and quote-focused contact flow.
            </p>
            <p>
              Monthly growth care is available for businesses that want hosting, SEO support, performance
              monitoring, and site updates handled under one polished plan.
            </p>
            <a className="button button-dark promo-button" href="#contact-form">
              Contact us Today for Current Promotions and New Business Discounts!
            </a>
          </div>
          <a className="button button-dark" href="#contact">
            Ask About Pricing
          </a>
        </div>
        <div className="container pricing-chart">
          <div className="chart-heading">
            <p className="eyebrow">Website Redesign Cost Guide</p>
            <h3>What many website builders charge</h3>
            <p>
              These industry ranges are shown for comparison. Apex Web Design Co creates polished,
              conversion-focused websites with smarter options for small businesses.
            </p>
            <a className="chart-cta" href="#contact-form">
              This is what other website builders charge. Reach out today to find out how Apex Web Design Co can save you money and help you take advantage of ongoing promotional discounts offered to small businesses.
            </a>
          </div>

          <div className="chart-grid" role="table" aria-label="Website redesign cost guide">
            <div className="chart-row chart-header" role="row">
              <span role="columnheader">Website Size</span>
              <span role="columnheader">Base Design</span>
              <span role="columnheader">Migration</span>
              <span role="columnheader">Marketing Strategy</span>
              <span role="columnheader">Custom Template</span>
              <span role="columnheader">Content</span>
            </div>
            <div className="chart-row" role="row">
              <strong role="cell">Large</strong>
              <span role="cell">$15k-$25k</span>
              <span role="cell">+$6k-$10k</span>
              <span role="cell">+$6k-$8k</span>
              <span role="cell">+$3k-$8k</span>
              <span role="cell">+$6k-$10k</span>
            </div>
            <div className="chart-row" role="row">
              <strong role="cell">Medium</strong>
              <span role="cell">$9k-$15k</span>
              <span role="cell">+$4k-$6k</span>
              <span role="cell">+$4k-$6k</span>
              <span role="cell">+$3k-$7k</span>
              <span role="cell">+$4k-$7k</span>
            </div>
            <div className="chart-row" role="row">
              <strong role="cell">Small</strong>
              <span role="cell">$3k-$5k</span>
              <span role="cell">+$2k-$5k</span>
              <span role="cell">+$3k-$5k</span>
              <span role="cell">+$2k-$5k</span>
              <span role="cell">+$2k-$4k</span>
            </div>
          </div>

          <p className="chart-credit">Original pricing chart reference credited to Savvy Panda.</p>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <p className="eyebrow">Questions</p>
          <h2>
            Simple answers before we start.
          </h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section reviews-section">
        <div className="container reviews-panel">
          <div className="reviews-copy">
            <p className="eyebrow">Google Reviews</p>
            <h2>Trust signals that support the first conversation.</h2>
            <p>
              Connect visitors to Apex Web Design Co's Google Business reviews so they can see real public feedback before they request a quote.
            </p>
            <a className="button" href={googleReviewsUrl} target="_blank" rel="noreferrer">
              View Reviews on Google
            </a>
          </div>
          <div className="google-review-card" aria-label="Google reviews connection">
            <span className="review-badge">Google</span>
            <strong>Reviews ready</strong>
            <div className="review-stars" aria-hidden="true">★★★★★</div>
            <p>
              Add your Google Business Profile review link, Place ID, or approved widget code to turn this panel into a live review feed.
            </p>
          </div>
        </div>
        <div className="container review-grid">
          {reviewHighlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <p className="eyebrow">Start here</p>
          <h2>Let's build your next website</h2>
          <form
            id="contact-form"
            className="contact-form"
            action="https://formsubmit.co/hello@apexwebdesignco.com"
            method="post"
          >
            <div className="form-intro form-wide">
              <h3>Information Request</h3>
              <p>Complete the form below and Apex Web Design will follow up with next steps.</p>
            </div>
            <input type="hidden" name="_subject" value="New Apex Web Design information request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="form-honey" tabIndex="-1" autoComplete="off" />
            <label className="form-field form-wide">
              <span>Name</span>
              <input type="text" name="name" placeholder="Name" required />
            </label>
            <label className="form-field form-wide">
              <span>Phone</span>
              <input type="tel" name="phone" placeholder="Phone" />
            </label>
            <label className="form-field form-wide">
              <span>Email</span>
              <input type="email" name="email" placeholder="Email" required />
            </label>
            <label className="form-field form-wide">
              <span>Website / Information Needed</span>
              <input type="text" name="information_needed" placeholder="Website / Information Needed" required />
            </label>
            <label className="form-field form-wide">
              <span>Tell us what you need</span>
              <textarea name="message" rows="5" placeholder="Tell us what you need" required />
            </label>
            <div className="form-actions form-wide">
              <button className="button" type="submit">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
