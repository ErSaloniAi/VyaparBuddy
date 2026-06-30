import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ onLaunchDashboard }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reports', href: '#reports' },
    { label: 'AI Assistant', href: '#ai-assistant' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" id="logo">
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logo-grad)" />
              <path d="M8 14L12 10L16 14L20 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 18L12 14L16 18L20 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#06D6A0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">
            Vyapar<span className="navbar__logo-accent">Buddy</span>
          </span>
        </a>

        <nav className={`navbar__nav ${mobileMenuOpen ? 'navbar__nav--open' : ''}`} id="main-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button onClick={onLaunchDashboard} className="navbar__btn navbar__btn--ghost" id="login-btn">
            Log In
          </button>
          <button onClick={onLaunchDashboard} className="navbar__btn navbar__btn--primary" id="signup-btn">
            Get Started
          </button>
        </div>

        <button
          className={`navbar__hamburger ${mobileMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <button onClick={onLaunchDashboard} className="navbar__btn navbar__btn--ghost">Log In</button>
            <button onClick={onLaunchDashboard} className="navbar__btn navbar__btn--primary">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
