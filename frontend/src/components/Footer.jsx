import './Footer.css';

const footerLinks = {
  Product: [
    { label: 'Dashboard', href: '#' },
    { label: 'Reports', href: '#reports' },
    { label: 'AI Assistant', href: '#ai-assistant' },
    { label: 'Alerts', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const SocialIcons = () => (
  <div className="footer__socials">
    {/* Twitter / X */}
    <a href="#" className="footer__social-link" aria-label="Twitter">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
          fill="currentColor"
        />
      </svg>
    </a>
    {/* LinkedIn */}
    <a href="#" className="footer__social-link" aria-label="LinkedIn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.839 20.452H3.834V9h3.005v11.452ZM22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2Z"
          fill="currentColor"
        />
      </svg>
    </a>
    {/* GitHub */}
    <a href="#" className="footer__social-link" aria-label="GitHub">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          fill="currentColor"
        />
      </svg>
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-icon">⚡</span>
              <span className="footer__logo-text">VyaparBuddy</span>
            </a>
            <p className="footer__tagline">
              AI-powered business intelligence for smarter decisions.
            </p>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <p className="footer__newsletter-title">Stay in the loop</p>
              <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer__newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__col">
                <h4 className="footer__col-title">{category}</h4>
                <ul className="footer__col-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 VyaparBuddy. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
