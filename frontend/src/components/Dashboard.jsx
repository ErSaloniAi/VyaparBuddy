import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// System Architecture Constant Layout Matrices
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard Overview', icon: '📊' },
  { id: 'sales', label: 'Sales & Invoices', icon: '💼' },
  { id: 'inventory', label: 'Inventory Planning', icon: '📦' },
  { id: 'reports', label: 'Automated Reports', icon: '📄' },
  { id: 'ai-insights', label: 'AI Business Advisor', icon: '✨' },
  { id: 'settings', label: 'System Settings', icon: '⚙️' }
];

const INITIAL_STATS = [
  { id: 'sales', label: "Today's Sales", value: '₹48,250', trend: '+18%', positive: true, context: 'vs. yesterday' },
  { id: 'revenue', label: 'Monthly Revenue', value: '₹12.4L', trend: '+9.2%', positive: true, context: 'MoM Growth' },
  { id: 'products', label: 'Active Stock Items', value: '1,284', trend: '14 Low Stock', positive: false, context: 'Action required' },
  { id: 'pending', label: 'Outstanding Dues', value: '₹62,400', trend: '47 Invoices', positive: false, context: 'Receivables aging' },
];

const REVENUE_DATA = [
  { day: 'Mon', value: '38%', amount: '₹32K', profit: '₹6,400' },
  { day: 'Tue', value: '54%', amount: '₹45K', profit: '₹9,100' },
  { day: 'Wed', value: '48%', amount: '₹40K', profit: '₹8,000' },
  { day: 'Thu', value: '76%', amount: '₹64K', profit: '₹13,200' },
  { day: 'Fri', value: '64%', amount: '₹53K', profit: '₹10,800' },
  { day: 'Sat', value: '88%', amount: '₹74K', profit: '₹15,500' },
  { day: 'Sun', value: '72%', amount: '₹60K', profit: '₹12,100' },
];

// Production Dummy Ledger Matrix for Sales & Invoices Sub-Module
const SAMPLE_INVOICES = [
  { id: 'INV-2048', customer: 'Mehta Traders', items: 12, total: '₹18,700', status: 'Paid', date: 'Today, 04:30 PM' },
  { id: 'INV-2047', label: 'Cash Sale', customer: 'Walk-in Customer', items: 3, total: '₹1,250', status: 'Paid', date: 'Today, 03:15 PM' },
  { id: 'INV-2046', customer: 'Karan Patel (Kiran Dairy)', items: 45, total: '₹42,400', status: 'Pending', date: 'Today, 11:00 AM' },
  { id: 'INV-2045', customer: 'Rohan Sharma', items: 7, total: '₹3,800', status: 'Overdue', date: 'Yesterday' }
];

function Dashboard({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedChartIndex, setSelectedChartIndex] = useState(5); // Default focus on Saturday high point
  const [toastMessage, setToastMessage] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [aiChatLog, setAiChatLog] = useState([
    { sender: 'ai', text: 'Namaste Aditi! I have processed your operational logs for Sharma Kirana. Ask me anything about your business trends, low stocks, or profit optimization strategies!' }
  ]);

  // Toast System Handler for UI Interactive Response
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setAiChatLog(prev => [...prev, { sender: 'user', text: userMessage }]);
    setChatInput('');

    setTimeout(() => {
      let aiResponse = "I am processing your transaction logs. Would you like me to compile a strategic performance layout or inspect item velocity profiles?";
      
      if (userMessage.toLowerCase().includes('profit') || userMessage.toLowerCase().includes('why')) {
        aiResponse = "Your profit margin spiked by 18% on Thursday due to deep volume velocity in high-margin Spices and Personal Care categories, combined with cross-docking inventory efficiencies.";
      } else if (userMessage.toLowerCase().includes('stock') || userMessage.toLowerCase().includes('reorder')) {
        aiResponse = "Critical analysis recommendation: Reorder 50 units of Aashirvaad Atta 10kg right now. Customer velocity data models predict full stock exhaustion by Saturday evening.";
      } else if (userMessage.toLowerCase().includes('report') || userMessage.toLowerCase().includes('pdf')) {
        aiResponse = "I have formatted your Daily Snapshot data. Click the 'Export PDF Report' utility card to trigger the local multi-tenant document engine download pipeline.";
      }

      setAiChatLog(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 750);
  };

  return (
    <div className="dashboard-page">
      {/* GLOBAL TOAST INTERACTION PIPELINE */}
      {toastMessage && (
        <div className="system-toast-alert">
          <span className="toast-icon">⚡</span>
          <p>{toastMessage}</p>
        </div>
      )}

      {/* SIDEBAR ARCHITECTURE */}
      <aside className="sidebar">
        <button className="dashboard-brand" type="button" onClick={onNavigateHome}>
          <span>VB</span>
          <div>
            <strong>VyaparBuddy</strong>
            <small>AI Business Intel</small>
          </div>
        </button>

        <nav aria-label="Dashboard core navigation">
          {NAV_ITEMS.map((item) => (
            <button 
              className={activeTab === item.id ? 'active' : ''} 
              type="button" 
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                triggerToast(`Switched workspace view to: ${item.label}`);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label-text">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer-profile">
          <div className="mini-avatar">AS</div>
          <div className="profile-meta">
            <strong>Aditi Sharma</strong>
            <p>Store Owner</p>
          </div>
        </div>
      </aside>

      {/* DYNAMIC SUB-ROUTER INNER CORE CONTAINER */}
      <section className="dashboard-main">
        <header className="topbar">
          <div>
            <div className="breadcrumb-trail">Workspace / {NAV_ITEMS.find(n => n.id === activeTab)?.label}</div>
            <h1>Sharma Kirana & Daily Needs</h1>
          </div>
          
          <div className="topbar-actions">
            <div className="badge-wrapper" onClick={() => triggerToast('System alerts are fully sync-optimized with PostgreSQL database')}>
              <button className="icon-button" type="button" aria-label="Notifications System Alerts">
                🔔
              </button>
              <span className="notification-badge-dot"></span>
            </div>
            
            <div className="sync-status-indicator">
              <span className="sync-dot"></span>
              <p>Live Engine Connected</p>
            </div>
          </div>
        </header>

        {/* CONDITIONALLY RENDERED MULTI-MODULE CONTROLLER */}
        {activeTab === 'dashboard' && (
          <>
            {/* 4-COLUMN FINANCIAL CARD MATRIX */}
            <div className="stats-row">
              {INITIAL_STATS.map((item) => (
                <article className="dashboard-card stat-card" key={item.id}>
                  <div className="stat-card-meta">
                    <span>{item.label}</span>
                    <span className="stat-context">{item.context}</span>
                  </div>
                  <div className="stat-main-numeric">
                    <strong>{item.value}</strong>
                    <em className={item.positive ? 'trend-up' : 'trend-down'}>{item.trend}</em>
                  </div>
                  <div className="stat-card-progress-track">
                    <div className="progress-fill" style={{ width: item.positive ? '78%' : '42%' }}></div>
                  </div>
                </article>
              ))}
            </div>

            {/* TWO-COLUMN INTEL WORKSPACE LAYOUT */}
            <div className="dashboard-grid">
              
              {/* Chart Module: Revenue Performance Analytics with Local Dynamic State Integration */}
              <article className="dashboard-card revenue-card">
                <div className="card-heading">
                  <div>
                    <h2>Revenue & Gross Margin Trend</h2>
                    <p className="card-subheading-text">Click bars to inspect individual data points</p>
                  </div>
                  <div className="chart-legend-pills">
                    <span className="pill-revenue">Gross Revenue</span>
                  </div>
                </div>
                
                <div className="chart-interactive-workspace">
                  <div className="line-chart" aria-label="Live Revenue Framework">
                    {REVENUE_DATA.map((data, index) => (
                      <div 
                        key={index} 
                        className={`chart-bar-wrapper ${selectedChartIndex === index ? 'focused-bar' : ''}`} 
                        style={{ '--height': data.value }}
                        onClick={() => setSelectedChartIndex(index)}
                      >
                        <span className="bar-tooltip">{data.amount}</span>
                        <div className="chart-bar-fill"></div>
                        <span className="chart-axis-label">{data.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="chart-context-inspection-panel">
                    <div className="inspection-node">
                      <span>Selected Metric ({REVENUE_DATA[selectedChartIndex].day})</span>
                      <strong>{REVENUE_DATA[selectedChartIndex].amount}</strong>
                    </div>
                    <div className="inspection-node">
                      <span>AI Model Calculated Profit</span>
                      <strong style={{ color: 'var(--color-success)' }}>{REVENUE_DATA[selectedChartIndex].profit}</strong>
                    </div>
                  </div>
                </div>
              </article>

              {/* Chart Module: Sales Distribution Analytics by Category */}
              <article className="dashboard-card donut-card">
                <div className="card-heading">
                  <h2>Category Breakdown</h2>
                  <span>This Month</span>
                </div>
                <div className="donut-wrap">
                  <div className="donut-chart" aria-label="Sales split by department"></div>
                  <ul className="donut-metric-list">
                    <li><span className="legend-grocery"></span><strong>55%</strong> Grocery</li>
                    <li><span className="legend-dairy"></span><strong>30%</strong> Dairy</li>
                    <li><span className="legend-care"></span><strong>15%</strong> Personal Care</li>
                  </ul>
                </div>
              </article>

              {/* Core Feature Modality: Smart Dynamic Operations Alerts */}
              <article className="dashboard-card activity-card">
                <div className="card-heading">
                  <h2>Intelligent Engine Alerts</h2>
                  <span className="pulse-indicator">● Active Rules Engine</span>
                </div>
                <div className="alert-system-feed">
                  <div className="alert-system-item alert-type-critical">
                    <div className="alert-item-header">
                      <span className="alert-badge">Inventory Risk</span>
                      <strong className="alert-title">Low Stock Threshold Broken</strong>
                    </div>
                    <p className="alert-desc">Aashirvaad Atta 10kg has 14 units left. Reorder 50 units immediately to avoid weekend stockout.</p>
                    <button className="alert-action-btn" type="button" onClick={() => triggerToast('Purchase Order generated for 50 units of Atta')}>Auto-Generate Restock Order</button>
                  </div>

                  <div className="alert-system-item alert-type-warning">
                    <div className="alert-item-header">
                      <span className="alert-badge">Cash Flow</span>
                      <strong className="alert-title">Pending Supplier Payable Due</strong>
                    </div>
                    <p className="alert-desc">Mehta Traders invoice #VB-2048 payment of ₹18,700 is scheduled for tomorrow.</p>
                  </div>

                  <div className="alert-system-item alert-type-ai">
                    <div className="alert-item-header">
                      <span className="alert-badge">AI Opportunity</span>
                      <strong className="alert-title">Bundle Optimization Strategy Ready</strong>
                    </div>
                    <p className="alert-desc">Demand patterns predict a 22% spike in weekend spice sales. Strategy: Bundle top-selling spices.</p>
                  </div>
                </div>
              </article>

              {/* Interface Module: Conversational AI Business Assistant Platform */}
              <article className="dashboard-card ai-assistant-card">
                <div className="card-heading">
                  <h2>AI Business Assistant</h2>
                  <span className="ai-badge">Gemini Core Engine</span>
                </div>
                
                <div className="ai-chat-container">
                  <div className="ai-chat-messages">
                    {aiChatLog.map((msg, index) => (
                      <div key={index} className={`chat-bubble message-from-${msg.sender}`}>
                        <div className="avatar-icon">{msg.sender === 'ai' ? '🤖' : '👤'}</div>
                        <div className="chat-text-wrapper">
                          <p>{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSendMessage} className="ai-chat-input-row">
                    <input 
                      type="text" 
                      placeholder="Ask AI: 'Why did profit drop?' or 'What should I restock?'..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                    />
                    <button type="submit" aria-label="Query AI Engine">⚡ Query</button>
                  </form>
                </div>
              </article>

              {/* Operations Layout Module: Quick Business Actions Panel */}
              <article className="dashboard-card actions-card">
                <div className="card-heading">
                  <h2>Quick Actions Matrix</h2>
                  <span>Direct Shortcuts</span>
                </div>
                <div className="quick-actions">
                  <button type="button" className="btn-primary-action" onClick={() => triggerToast('Redirecting to GST Billing Core Engine')}>
                    <span className="action-icon">➕</span>
                    <span className="action-lbl">New GST Invoice</span>
                  </button>
                  <button type="button" className="btn-secondary-action" onClick={() => triggerToast('Opening Inventory Management panel')}>
                    <span className="action-icon">📦</span>
                    <span className="action-lbl">Restock Catalog</span>
                  </button>
                  <button type="button" className="btn-secondary-action" onClick={() => triggerToast('Compiling high-resolution analytics PDF report... Check email inbox.')}>
                    <span className="action-icon">📉</span>
                    <span className="action-lbl">Export PDF Report</span>
                  </button>
                  <button type="button" className="btn-secondary-action" onClick={() => {
                    setAiChatLog(prev => [...prev, { sender: 'ai', text: 'Analyzing monthly product rotation matrix... Recommendation: Mark down prices on low-velocity personal care stocks by 5% next week to clear space.' }]);
                    triggerToast('AI recommendations calculated!');
                  }}>
                    <span className="action-icon">✨</span>
                    <span className="action-lbl">Trigger AI Audit</span>
                  </button>
                </div>
              </article>

            </div>
          </>
        )}

        {/* COMPREHENSIVE SUB-ROUTER MODALITY FOR INTERNAL LEDGER APP PAGES */}
        {activeTab === 'sales' && (
          <article className="dashboard-card extended-view-card">
            <div className="extended-card-header">
              <div>
                <h2>Sales Ledger & Invoice Pipeline</h2>
                <p>Real-time transaction tracking and GST analytics monitoring dashboard</p>
              </div>
              <button className="action-btn-accent" onClick={() => triggerToast('Initializing multi-item invoice wizard...')}>+ Generate New Invoice</button>
            </div>
            
            <div className="production-data-table-container">
              <table className="production-data-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Customer Target</th>
                    <th>Date Generated</th>
                    <th>Item Volume</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_INVOICES.map((inv) => (
                    <tr key={inv.id}>
                      <td><strong>{inv.id}</strong></td>
                      <td>{inv.customer}</td>
                      <td>{inv.date}</td>
                      <td>{inv.items} Products</td>
                      <td><strong>{inv.total}</strong></td>
                      <td>
                        <span className={`status-pill pill-${inv.status.toLowerCase()}`}>
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        )}

        {activeTab !== 'dashboard' && activeTab !== 'sales' && (
          <article className="dashboard-card empty-state-card">
            <div className="empty-state-visual">📂</div>
            <h2>{NAV_ITEMS.find(n => n.id === activeTab)?.label} Core</h2>
            <p>This backend data module is fully prepared for API integration. Connect your Django endpoints to stream real-time JSON models here.</p>
          </article>
        )}
      </section>
    </div>
  );
}

export default Dashboard;