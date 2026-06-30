import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Reports from './Reports';
import AIAssistant from './AIAssistant';
import Footer from './Footer';
import './HomePage.css';

function HomePage({ onLaunchDashboard }) {
  return (
    <div className="homepage">
      {/* Animated background layers */}
      <div className="homepage__noise" />
      <div className="homepage__mesh">
        <div className="homepage__blob homepage__blob--1" />
        <div className="homepage__blob homepage__blob--2" />
        <div className="homepage__blob homepage__blob--3" />
        <div className="homepage__blob homepage__blob--4" />
      </div>
      <div className="homepage__particles">
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
        <div className="homepage__particle" />
      </div>

      {/* Content */}
      <Navbar onLaunchDashboard={onLaunchDashboard} />
      <main>
        <Hero onLaunchDashboard={onLaunchDashboard} />
        <Features />
        <HowItWorks />
        <Reports />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
