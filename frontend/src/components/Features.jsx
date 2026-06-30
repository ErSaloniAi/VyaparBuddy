import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
  {
    title: 'Smart Dashboard',
    desc: 'Real-time revenue, KPIs, and interactive charts at a glance.',
    color: 'purple',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="14" width="5" height="8" rx="1.5" fill="#8B5CF6" opacity="0.7" />
        <rect x="10.5" y="9" width="5" height="13" rx="1.5" fill="#8B5CF6" opacity="0.85" />
        <rect x="18" y="4" width="5" height="18" rx="1.5" fill="#8B5CF6" />
        <path d="M3 5L10 8L17 3L23 6" stroke="#C4B5FD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="3" cy="5" r="1.5" fill="#C4B5FD" />
        <circle cx="10" cy="8" r="1.5" fill="#C4B5FD" />
        <circle cx="17" cy="3" r="1.5" fill="#C4B5FD" />
        <circle cx="23" cy="6" r="1.5" fill="#C4B5FD" />
      </svg>
    ),
  },
  {
    title: 'AI Business Advisor',
    desc: 'Ask in natural language. Get personalized insights powered by Gemini AI.',
    color: 'green',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L15.5 8H20.5L16.5 11.5L18 17L13 13.5L8 17L9.5 11.5L5.5 8H10.5L13 3Z" fill="#06D6A0" opacity="0.25" />
        <path d="M13 3L15.5 8H20.5L16.5 11.5L18 17L13 13.5L8 17L9.5 11.5L5.5 8H10.5L13 3Z" stroke="#06D6A0" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="13" cy="20" r="1" fill="#34E0B5" />
        <circle cx="9" cy="22" r="0.8" fill="#34E0B5" opacity="0.6" />
        <circle cx="17" cy="22" r="0.8" fill="#34E0B5" opacity="0.6" />
        <path d="M10 19.5C10 19.5 11.5 21 13 21C14.5 21 16 19.5 16 19.5" stroke="#34E0B5" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Automated Reports',
    desc: 'Daily, weekly, and monthly reports auto-generated with PDF export.',
    color: 'warm',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="3" width="16" height="20" rx="2.5" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
        <path d="M9 9H17" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 13H17" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 17H13" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 15L19 17L23 13" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Inventory Intelligence',
    desc: 'AI predicts demand, suggests reorders, and alerts on stock levels.',
    color: 'blue',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="8" width="8" height="7" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="14" y="8" width="8" height="7" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="4" y="17" width="8" height="7" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.1)" />
        <rect x="14" y="17" width="8" height="7" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.1)" />
        <path d="M13 2V6" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 4L13 2L16 4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Payment Tracker',
    desc: 'Track payments, pending dues, and send automated reminders.',
    color: 'rose',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="7" width="20" height="14" rx="2.5" stroke="#F43F5E" strokeWidth="1.5" />
        <path d="M3 12H23" stroke="#F43F5E" strokeWidth="1.5" />
        <circle cx="17" cy="17" r="2" fill="rgba(244,63,94,0.25)" stroke="#F43F5E" strokeWidth="1" />
        <circle cx="19.5" cy="17" r="2" fill="rgba(244,63,94,0.15)" stroke="#FB7185" strokeWidth="1" />
        <rect x="7" y="15" width="5" height="2" rx="1" fill="#FB7185" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Smart Alerts',
    desc: 'Instant alerts on low stock, declining sales, and expense spikes.',
    color: 'cyan',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 4C9.5 4 7 7 7 10V15L5 18H21L19 15V10C19 7 16.5 4 13 4Z" stroke="#06B6D4" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.5 20C10.5 21.5 11.5 23 13 23C14.5 23 15.5 21.5 15.5 20" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="6" r="3" fill="#06B6D4" opacity="0.9" />
        <circle cx="19" cy="6" r="5" fill="none" stroke="#06B6D4" strokeWidth="0.8" opacity="0.3" />
      </svg>
    ),
  },
];

function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features">
      {/* Ambient background */}
      <div className="features__bg-orb" />

      <div className="container">
        {/* Section Header */}
        <div className="features__header">
          <span className="section-label">Core Features</span>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="gradient-text">Run Smarter</span>
          </h2>
          <p className="section-subtitle">
            All the tools to manage, analyze, and grow your business — one platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="features__grid">
          {features.map((f, i) => (
            <div
              className="features__card"
              key={f.title}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className={`features__icon features__icon--${f.color}`}>
                {f.icon}
              </div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
