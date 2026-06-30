import { useState } from 'react'
import Dashboard from './components/Dashboard'
import HomePage from './components/HomePage'
import './App.css'

function App() {
  const [view, setView] = useState('landing')

  const showDashboard = () => setView('dashboard')
  const showLanding = () => setView('landing')

  return (
    <main className="app-shell">
      {view === 'dashboard' ? (
        <Dashboard onNavigateHome={showLanding} />
      ) : (
        <HomePage onLaunchDashboard={showDashboard} />
      )}
    </main>
  )
}

export default App
