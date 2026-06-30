import './LandingPage.css'

const stats = [
  { value: '10K+', label: 'Businesses' },
  { value: '₹50Cr+', label: 'Managed' },
  { value: '99.9%', label: 'Uptime' },
]

const features = [
  {
    icon: '📊',
    title: 'Smart Analytics & Reports',
    copy: 'Understand sales, margins, and cash flow with clear daily insights.',
  },
  {
    icon: '📦',
    title: 'Inventory Management',
    copy: 'Track stock movement, reorder levels, and fast-moving products.',
  },
  {
    icon: '💰',
    title: 'Sales & Revenue Tracking',
    copy: 'Monitor every bill, payment, refund, and trend from one place.',
  },
  {
    icon: '🤖',
    title: 'AI Business Recommendations',
    copy: 'Get practical suggestions for pricing, purchases, and promotions.',
  },
  {
    icon: '📧',
    title: 'Automated Email Reports',
    copy: 'Send scheduled summaries to owners, managers, and accountants.',
  },
  {
    icon: '📱',
    title: 'Multi-Store Management',
    copy: 'Compare branches and manage teams across locations in real time.',
  },
]

const steps = ['Sign Up', 'Add Data', 'Get Insights', 'Grow Business']

const testimonials = [
  {
    quote:
      'VyaparBuddy helped us spot slow-moving stock before the festive season. Our purchase planning is much sharper now.',
    name: 'Ritika Shah',
    role: 'Owner, Shah Fashion House, Surat',
  },
  {
    quote:
      'The daily sales report lands before I open the shop. It feels like having a business analyst on call.',
    name: 'Imran Khan',
    role: 'Partner, Metro Hardware, Lucknow',
  },
  {
    quote:
      'We manage two outlets with one dashboard. The AI suggestions helped us improve weekday revenue.',
    name: 'Meera Nair',
    role: 'Founder, Spice Basket, Kochi',
  },
]

function LandingPage({ onLaunchDashboard }) {
  return (
    <div className="landing-page">
      <nav className="navbar" aria-label="Main navigation">
        <button className="brand-mark" type="button" onClick={onLaunchDashboard}>
          <span>VB</span>
          <strong>VyaparBuddy</strong>
        </button>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button className="button ghost" type="button" onClick={onLaunchDashboard}>
            Login
          </button>
          <button className="button primary" type="button" onClick={onLaunchDashboard}>
            Sign Up
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-gradient" aria-hidden="true"></div>
        <div className="hero-content">
          <p className="eyebrow">AI intelligence for Indian SMBs</p>
          <h1>Your AI-Powered Business Partner</h1>
          <p className="hero-copy">
            VyaparBuddy turns sales, inventory, and customer data into practical
            decisions for growing shops, distributors, and service businesses.
          </p>
          <div className="hero-actions">
            <button className="button primary large" type="button" onClick={onLaunchDashboard}>
              Get Started Free
            </button>
            <button className="button glass large" type="button" onClick={onLaunchDashboard}>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="VyaparBuddy impact">
        {stats.map((item) => (
          <div className="stat-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block" id="features">
        <div className="section-heading">
          <p className="eyebrow">Platform</p>
          <h2>Everything your business data wants to tell you</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block how-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From messy data to confident decisions</h2>
        </div>
        <div className="steps-flow">
          {steps.map((step, index) => (
            <div className="step-card" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Customer stories</p>
          <h2>Built with the rhythm of real Indian businesses</h2>
        </div>
        <div className="testimonial-carousel">
          {testimonials.map((story) => (
            <article className="testimonial-card" key={story.name}>
              <p>“{story.quote}”</p>
              <div>
                <strong>{story.name}</strong>
                <span>{story.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="pricing">
        <div>
          <p className="eyebrow">Start free</p>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Launch your AI dashboard in minutes and discover the next best move
            for your business.
          </p>
        </div>
        <button className="button primary large" type="button" onClick={onLaunchDashboard}>
          Create Free Account
        </button>
      </section>

      <footer className="footer">
        <div className="brand-mark">
          <span>VB</span>
          <strong>VyaparBuddy</strong>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="mailto:hello@vyaparbuddy.ai">Contact</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            in
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            ig
          </a>
          <a href="https://x.com" aria-label="X">
            x
          </a>
        </div>
        <p>© 2026 VyaparBuddy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
