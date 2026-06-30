import { useEffect, useRef } from 'react';
import './Reports.css';

const reportCards = [
  {
    id: 'daily',
    title: 'Daily Snapshot',
    description: "Everything you need to know about today's performance at a glance.",
    color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10H25" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 4V10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 4V10" stroke="currentColor" strokeWidth="1.8" />
        <rect x="7" y="13" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="12" y="13" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="17" y="13" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="7" y="18" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="12" y="18" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    items: [
      'Revenue & profit summary',
      'Orders & transactions count',
      'Top-selling products',
      'Expense breakdown',
      'AI daily insight & tip',
    ],
  },
  {
    id: 'weekly',
    title: 'Weekly Analysis',
    description: 'Spot trends early and plan your week with data-backed insights.',
    color: 'purple',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 18V14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M11 18V11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 18V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M19 18V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      'Inventory planning alerts',
      'Performance trend charts',
      'Payment tracking summary',
      'Week-over-week comparison',
      'AI recommendations',
    ],
  },
  {
    id: 'monthly',
    title: 'Monthly Growth',
    description: 'The big picture — understand where your business is heading.',
    color: 'amber',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 15L14 18L24 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6H24V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      'Revenue growth analysis',
      'Customer trend insights',
      'Cash flow overview',
      'Business health score',
      'AI strategy suggestions',
    ],
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5L6.5 12L13 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Reports() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reports--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="reports" id="reports" ref={sectionRef}>
      {/* Background glow */}
      <div className="reports__bg">
        <div className="reports__orb reports__orb--1"></div>
        <div className="reports__orb reports__orb--2"></div>
      </div>

      <div className="reports__content container">
        <div className="reports__header">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11V5H5V11H2Z" fill="currentColor" opacity="0.6" />
              <path d="M5.5 11V3H8.5V11H5.5Z" fill="currentColor" opacity="0.8" />
              <path d="M9 11V7H12V11H9Z" fill="currentColor" />
            </svg>
            SMART REPORTS
          </span>
          <h2 className="section-title">
            Reports That Actually{' '}
            <span className="gradient-text">Help You Grow</span>
          </h2>
          <p className="section-subtitle">
            AI-curated daily, weekly, and monthly reports with actionable insights.
          </p>
        </div>

        <div className="reports__grid">
          {reportCards.map((card, index) => (
            <div
              className={`reports__card reports__card--${card.color} animate-fade-in-up`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              key={card.id}
            >
              <div className="reports__card-border"></div>
              <div className="reports__card-inner">
                <div className={`reports__card-icon reports__card-icon--${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="reports__card-title">{card.title}</h3>
                <p className="reports__card-desc">{card.description}</p>

                <ul className="reports__card-list">
                  {card.items.map((item) => (
                    <li className="reports__card-item" key={item}>
                      <span className={`reports__check reports__check--${card.color}`}>
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`reports__card-btn reports__card-btn--${card.color}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8C2 4.686 4.686 2 8 2s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 5.5L10 8L6.5 10.5V5.5Z" fill="currentColor" />
                  </svg>
                  View Sample
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reports;
