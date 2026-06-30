import { useEffect, useRef } from 'react';
import dashboardPreview from '../assets/dashboard-preview.png';
import './Hero.css';

function Hero({ onLaunchDashboard }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Background Effects */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge animate-fade-in-up">
            <span className="hero__badge-dot"></span>
            AI-Powered Business Intelligence
          </div>

          <h1 className="hero__title animate-fade-in-up animate-delay-1">
            Your Business Deserves a{' '}
            <span className="gradient-text">Smarter Advisor</span>
          </h1>

          <p className="hero__subtitle animate-fade-in-up animate-delay-2">
            Turn raw business data into actionable insights, automated reports,
            and AI-driven recommendations — focus on growing, not guessing.
          </p>

          <div className="hero__cta animate-fade-in-up animate-delay-3">
            <button onClick={onLaunchDashboard} className="hero__btn hero__btn--primary" id="hero-cta-primary">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#how-it-works" className="hero__btn hero__btn--secondary" id="hero-cta-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 7L13 10L8 13V7Z" fill="currentColor"/>
              </svg>
              <span>See How It Works</span>
            </a>
          </div>

          <div className="hero__stats animate-fade-in-up animate-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-value">500+</span>
              <span className="hero__stat-label">Businesses</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">10K+</span>
              <span className="hero__stat-label">Reports Generated</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">98%</span>
              <span className="hero__stat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-fade-in-up animate-delay-3">
          <div className="hero__dashboard-frame">
            <div className="hero__dashboard-bar">
              <div className="hero__dashboard-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="hero__dashboard-url">app.vyaparbuddy.com/dashboard</span>
            </div>
            <img
              src={dashboardPreview}
              alt="VyaparBuddy AI-powered business dashboard showing analytics, revenue charts, and AI insights"
              className="hero__dashboard-img"
            />
          </div>

          {/* Floating Cards */}
          <div className="hero__float-card hero__float-card--revenue">
            <div className="hero__float-icon hero__float-icon--green">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 13L7 9L10 12L15 5" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="hero__float-label">Revenue Today</div>
              <div className="hero__float-value">₹24,580 <span className="hero__float-change hero__float-change--up">+12.3%</span></div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--ai">
            <div className="hero__float-icon hero__float-icon--purple">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L11 7H16L12 10L13.5 15.5L9 12L4.5 15.5L6 10L2 7H7L9 2Z" fill="#8B5CF6"/>
              </svg>
            </div>
            <div>
              <div className="hero__float-label">AI Insight</div>
              <div className="hero__float-value hero__float-value--small">Stock Widget A — reorder soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
