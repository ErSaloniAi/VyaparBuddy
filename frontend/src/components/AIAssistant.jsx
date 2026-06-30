import { useEffect, useRef } from 'react';
import './AIAssistant.css';

const questions = [
  'Why did my profit decrease this week?',
  'Which product should I stock more?',
  'How can I improve customer retention?',
  'What are my top-performing products?',
];

function AIAssistant() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ai-assistant--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ai-assistant" id="ai-assistant" ref={sectionRef}>
      {/* Background effects */}
      <div className="ai-assistant__bg">
        <div className="ai-assistant__orb ai-assistant__orb--1"></div>
        <div className="ai-assistant__orb ai-assistant__orb--2"></div>
      </div>

      <div className="ai-assistant__content container">
        {/* Left — Copy */}
        <div className="ai-assistant__info animate-fade-in-up">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.5 5H13L9.5 7.5L10.75 12L7 9L3.25 12L4.5 7.5L1 5H5.5L7 1Z" fill="currentColor" opacity="0.8" />
            </svg>
            AI ASSISTANT
          </span>
          <h2 className="section-title">
            Your Personal Business{' '}
            <span className="gradient-text">Advisor, Always On</span>
          </h2>
          <p className="ai-assistant__desc">
            Ask anything about your business in plain language. Get clear,
            actionable answers backed by your real-time data.
          </p>

          <div className="ai-assistant__questions">
            <span className="ai-assistant__questions-label">Try asking:</span>
            <ul className="ai-assistant__questions-list">
              {questions.map((q, i) => (
                <li
                  className="ai-assistant__question animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  key={q}
                >
                  <span className="ai-assistant__question-icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C3.686 1 1 3.462 1 6.5c0 1.537.67 2.938 1.75 3.958L2 12.5l2.625-1.125C5.35 11.775 6.15 12 7 12c3.314 0 6-2.462 6-5.5S10.314 1 7 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Mock Chat */}
        <div className="ai-assistant__chat-wrapper animate-fade-in-up animate-delay-2">
          <div className="ai-assistant__chat">
            {/* Chat header */}
            <div className="ai-assistant__chat-header">
              <div className="ai-assistant__chat-avatar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12 7H17L13 10L14.5 15.5L10 12L5.5 15.5L7 10L3 7H8L10 2Z" fill="var(--primary-light)" />
                </svg>
              </div>
              <div className="ai-assistant__chat-meta">
                <span className="ai-assistant__chat-name">VyaparBuddy AI</span>
                <span className="ai-assistant__chat-status">
                  <span className="ai-assistant__status-dot"></span>
                  Online
                </span>
              </div>
              <div className="ai-assistant__chat-actions">
                <span></span><span></span><span></span>
              </div>
            </div>

            {/* Chat body */}
            <div className="ai-assistant__chat-body">
              {/* User message */}
              <div className="ai-assistant__msg ai-assistant__msg--user">
                <div className="ai-assistant__msg-bubble ai-assistant__msg-bubble--user">
                  Why did my profit drop this week?
                </div>
                <span className="ai-assistant__msg-time">2:34 PM</span>
              </div>

              {/* AI response */}
              <div className="ai-assistant__msg ai-assistant__msg--ai">
                <div className="ai-assistant__msg-avatar">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L9.8 5.6H14L10.6 8.2L11.8 13L8 10L4.2 13L5.4 8.2L2 5.6H6.2L8 1Z" fill="var(--primary-light)" />
                  </svg>
                </div>
                <div className="ai-assistant__msg-content">
                  <div className="ai-assistant__msg-bubble ai-assistant__msg-bubble--ai">
                    <p>
                      Your profit decreased by <strong>₹4,230 (12%)</strong> this week.
                      Here's the breakdown:
                    </p>
                    <div className="ai-assistant__msg-insights">
                      <div className="ai-assistant__insight ai-assistant__insight--down">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 3V11M7 11L3.5 7.5M7 11L10.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span><strong>Widget B</strong> sales fell 23% — competitor pricing undercut you.</span>
                      </div>
                      <div className="ai-assistant__insight ai-assistant__insight--down">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 3V11M7 11L3.5 7.5M7 11L10.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Raw material costs rose <strong>₹1,850</strong> vs last week.</span>
                      </div>
                      <div className="ai-assistant__insight ai-assistant__insight--up">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 11V3M7 3L3.5 6.5M7 3L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span><strong>Widget A</strong> held strong with +8% growth.</span>
                      </div>
                    </div>
                    <p className="ai-assistant__msg-recommendation">
                      💡 <strong>Recommendation:</strong> Consider a 5% promotional discount on
                      Widget B to recapture market share, and renegotiate supplier rates.
                    </p>
                  </div>
                  <span className="ai-assistant__msg-time">2:34 PM</span>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="ai-assistant__msg ai-assistant__msg--ai">
                <div className="ai-assistant__msg-avatar">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L9.8 5.6H14L10.6 8.2L11.8 13L8 10L4.2 13L5.4 8.2L2 5.6H6.2L8 1Z" fill="var(--primary-light)" />
                  </svg>
                </div>
                <div className="ai-assistant__typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>

            {/* Chat input */}
            <div className="ai-assistant__chat-input">
              <div className="ai-assistant__input-field">
                <span className="ai-assistant__input-placeholder">Ask VyaparBuddy anything…</span>
              </div>
              <button className="ai-assistant__send-btn" aria-label="Send message">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L16 2L9 16L7.5 10.5L2 9Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative glow behind chat */}
          <div className="ai-assistant__chat-glow"></div>
        </div>
      </div>
    </section>
  );
}

export default AIAssistant;
