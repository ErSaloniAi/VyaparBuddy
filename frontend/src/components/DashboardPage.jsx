import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Sparkles, 
  LogOut, 
  LayoutDashboard, 
  Activity, 
  Bell, 
  ChevronRight, 
  User, 
  Briefcase, 
  Calendar,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { authService } from '../api/authService';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchUser() {
      try {
        const userData = await authService.getCurrentUser();
        if (isMounted) {
          setUser(userData);
          setError('');
        }
      } catch (err) {
        console.error('Failed to fetch user:', err);
        if (isMounted) {
          setError('Failed to load user profile. Please try reloading.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await authService.logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
      // Even if API logout fails, authService clears localStorage, so we redirect
      navigate('/login');
    } finally {
      setLogoutLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 text-indigo-500 animate-spin" />
          <p className="text-gray-400 text-sm font-medium">Fetching dashboard data...</p>
        </div>
      </div>
    );
  }

  // Fallback values for names if empty from backend
  const fullName = user?.full_name || 'Business Partner';
  const businessName = user?.business_name || 'Vyapar Enterprise';
  const email = user?.email || 'user@example.com';
  const dateJoined = user?.date_joined 
    ? new Date(user.date_joined).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Recently';

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col md:flex-row text-gray-100 font-sans">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-gray-900/40 backdrop-blur-md border-r border-gray-800 p-6 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-none">VyaparBuddy</h1>
              <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">AI Platform</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <a href="#dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-indigo-600/10 border border-indigo-500/20 rounded-xl transition duration-200">
              <LayoutDashboard className="h-4 w-4 text-indigo-400" />
              Overview
            </a>
            <a href="#analytics" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-xl transition duration-200">
              <Activity className="h-4 w-4" />
              Analytics
            </a>
            <a href="#insights" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-xl transition duration-200">
              <Sparkles className="h-4 w-4" />
              AI Insights
              <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded-full">3 New</span>
            </a>
          </nav>
        </div>

        {/* Sidebar user footer */}
        <div className="mt-8 pt-6 border-t border-gray-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <User className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">{fullName}</p>
              <p className="text-[10px] text-gray-400 truncate">{email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={logoutLoading}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-red-400 hover:text-red-300 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-xl transition duration-200 disabled:opacity-50"
          >
            {logoutLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogOut className="h-4 w-4" />
            )}
            Log Out
          </button>
        </div>
      </aside>

      {/* Main dashboard content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 max-w-7xl mx-auto w-full">
        {/* Top Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Business Overview</h2>
            <p className="text-sm text-gray-400 mt-1">Welcome back, {fullName}. Here is your company's intelligence report.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative p-2.5 bg-gray-900 border border-gray-800 rounded-xl hover:bg-gray-800 transition duration-150 cursor-pointer">
              <Bell className="h-5 w-5 text-gray-400" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-[#030712]" />
            </div>
          </div>
        </header>

        {/* User profile details banner */}
        {error ? (
          <div className="p-4 bg-red-950/40 border border-red-500/20 rounded-2xl text-red-300 text-sm flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
            <span>{error}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/10 border border-indigo-500/10 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
                <Briefcase className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Business Name</p>
                <p className="text-base font-semibold text-white mt-0.5">{businessName}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
                <Mail className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Account Email</p>
                <p className="text-base font-semibold text-white mt-0.5">{email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
                <Calendar className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Member Since</p>
                <p className="text-base font-semibold text-white mt-0.5">{dateJoined}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Monthly Revenue</span>
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <DollarSign className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mt-4">$24,890</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-green-400 font-medium">
              <span>+12.3%</span>
              <span className="text-gray-500">from last month</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Customers</span>
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mt-4">1,482</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-indigo-400 font-medium">
              <span>+4.7%</span>
              <span className="text-gray-500">vs last week</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Operations Run</span>
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mt-4">8,940</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-purple-400 font-medium">
              <span>+28%</span>
              <span className="text-gray-500">high accuracy metrics</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition duration-200">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Growth Index</span>
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Activity className="h-4 w-4" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mt-4">98.4</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-indigo-400 font-medium">
              <span>Stable</span>
              <span className="text-gray-500">optimal performance</span>
            </div>
          </div>
        </section>

        {/* Visual Charts and Insights Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Placeholder */}
          <div className="lg:col-span-2 bg-gray-900/40 border border-gray-800 rounded-3xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-base font-bold text-white">Revenue Analytics</h3>
                <p className="text-xs text-gray-400">Showing monthly analytics comparison</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-lg">Real-time</span>
            </div>

            {/* High-end SVG Area Chart Graphic */}
            <div className="flex-1 min-h-[220px] flex items-end justify-center relative select-none">
              <svg viewBox="0 0 500 200" className="w-full h-full text-indigo-500">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                
                {/* Area path */}
                <path 
                  d="M0,160 Q60,110 120,130 T240,80 T360,50 T500,30 L500,200 L0,200 Z" 
                  fill="url(#chartGradient)" 
                />
                {/* Line path */}
                <path 
                  d="M0,160 Q60,110 120,130 T240,80 T360,50 T500,30" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />
                
                {/* Data points */}
                <circle cx="120" cy="130" r="5" fill="rgb(99, 102, 241)" stroke="#030712" strokeWidth="2" />
                <circle cx="240" cy="80" r="5" fill="rgb(99, 102, 241)" stroke="#030712" strokeWidth="2" />
                <circle cx="360" cy="50" r="5" fill="rgb(99, 102, 241)" stroke="#030712" strokeWidth="2" />
                <circle cx="500" cy="30" r="5" fill="rgb(99, 102, 241)" stroke="#030712" strokeWidth="2" />
              </svg>
            </div>
            
            <div className="flex justify-between items-center text-xs text-gray-500 mt-4 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* AI Insights Card */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <h3 className="text-base font-bold text-white">AI Assistant Insights</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400">Revenue Warning</span>
                    <span className="text-[10px] text-gray-500">10m ago</span>
                  </div>
                  <p className="text-xs text-gray-300">Revenue is up 12.3% this month. Increase marketing budget for optimal client conversion.</p>
                </div>

                <div className="p-4 rounded-xl bg-gray-800/40 border border-gray-800/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">Inventory Alert</span>
                    <span className="text-[10px] text-gray-500">2h ago</span>
                  </div>
                  <p className="text-xs text-gray-300">Fast moving items in regional warehouses are running low. restock recommended.</p>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-1.5 py-3 px-4 text-xs font-semibold text-indigo-400 hover:text-white bg-indigo-500/5 hover:bg-indigo-600/20 border border-indigo-500/15 hover:border-indigo-500/35 rounded-xl transition duration-200 mt-6">
              View All Recommendations
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
