import { useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Sign Up & Onboard',
    description:
      'Create your account, set up your business profile with products, stock, and expenses.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3.5C10.134 3.5 7 6.634 7 10.5C7 13.048 8.372 15.274 10.42 16.478C7.098 17.85 4.692 20.93 4.2 24.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 3.5C17.866 3.5 21 6.634 21 10.5C21 13.048 19.628 15.274 17.58 16.478C20.902 17.85 23.308 20.93 23.8 24.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="10.5" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Enter Daily Data',
    description:
      'Log your daily sales, expenses, and inventory updates through simple forms.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="4"
          y="5"
          width="20"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 11H24" stroke="currentColor" strokeWidth="2" />
        <path d="M10 5V11" stroke="currentColor" strokeWidth="2" />
        <path d="M18 5V11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M9 16H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 20H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'AI Analyzes Everything',
    description:
      'Our AI engine processes your data, identifies patterns, and generates insights.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L16.5 8.5L22.5 9.5L18 14L19 20L14 17L9 20L10 14L5.5 9.5L11.5 8.5L14 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="12" r="2" fill="currentColor" />
        <path
          d="M14 17V24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 22H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Get Smart Reports',
    description:
      'Receive automated daily/weekly/monthly reports with AI recommendations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="3"
          width="18"
          height="22"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 9H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 13H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 17H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 17L19 19L23 15"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    };

    /* Animate individual step cards */
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hiw-step--visible');
          stepObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    stepsRef.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });

    /* Animate the connecting timeline line */
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw-timeline__line--visible');
            lineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (lineRef.current) lineObserver.observe(lineRef.current);

    /* Animate the section header */
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw-header--visible');
            headerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const header = sectionRef.current.querySelector('.hiw-header');
      if (header) headerObserver.observe(header);
    }

    return () => {
      stepObserver.disconnect();
      lineObserver.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  return (
    <section className="hiw" id="how-it-works" ref={sectionRef}>
      {/* Background accents */}
      <div className="hiw__bg">
        <div className="hiw__orb hiw__orb--1"></div>
        <div className="hiw__orb hiw__orb--2"></div>
      </div>

      <div className="hiw__content container">
        {/* Header */}
        <div className="hiw-header">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">
            From Data to Decisions in{' '}
            <span className="gradient-text">4 Steps</span>
          </h2>
          <p className="section-subtitle">
            Turn everyday business data into AI-driven insights in four simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="hiw-timeline">
          {/* Connecting line */}
          <div className="hiw-timeline__line" ref={lineRef}>
            <div className="hiw-timeline__line-fill"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`hiw-step hiw-step--${index % 2 === 0 ? 'left' : 'right'}`}
              ref={(el) => (stepsRef.current[index] = el)}
              style={{ '--step-index': index }}
            >
              {/* Number node on timeline */}
              <div className="hiw-step__node">
                <span className="hiw-step__number">{step.number}</span>
                <div className="hiw-step__pulse"></div>
              </div>

              {/* Card */}
              <div className="hiw-step__card">
                <div className="hiw-step__icon">{step.icon}</div>
                <h3 className="hiw-step__title">{step.title}</h3>
                <p className="hiw-step__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
