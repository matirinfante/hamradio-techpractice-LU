// src/App.jsx
import { useState, useEffect } from 'react'
import StudyTab    from './components/StudyTab.jsx'
import PracticeTab from './components/PracticeTab.jsx'
import ExamTab     from './components/ExamTab.jsx'
import HistoryTab  from './components/HistoryTab.jsx'
import { useHistory } from './hooks/useHistory.js'

const TABS = [
  { id: 'study',    label: 'Estudiar',  icon: '📚' },
  { id: 'practice', label: 'Practicar', icon: '🎯' },
  { id: 'exam',     label: 'Examen',    icon: '⚡' },
  { id: 'history',  label: 'Progreso',  icon: '📊' },
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('radio_theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('radio_theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}

export default function App() {
  const [tab, setTab] = useState('study')
  const { history, loading, addSession, stats } = useHistory()
  const { theme, toggle } = useTheme()

  async function handleExamComplete(session) {
    await addSession(session)
  }

  const navItems = TABS.map(t => (
    <button
      key={t.id}
      className={`tab-item ${tab === t.id ? 'active' : ''}`}
      onClick={() => setTab(t.id)}
      role="tab"
      aria-selected={tab === t.id}
    >
      <span className="tab-icon">{t.icon}</span>
      <span>{t.label}</span>
    </button>
  ))

  return (
    <>
      {/* ── Shell: header + desktop-tab + content ── */}
      <div className="app-shell">
        <header className="app-header">
          <div className="app-header-left">
            <div className="app-header-tag">📡 Radioaficionados AR</div>
            <h1 className="app-title">Categoría <span>Novicio</span></h1>
            <p className="app-subtitle">150 preguntas · Teoría, Técnica, Propagación y Antenas</p>
          </div>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </header>

        {/* Desktop nav — inline, styled as tab underline (visible ≥768px) */}
        <nav className="tab-bar tab-bar--desktop" role="tablist">
          {navItems}
        </nav>

        {/* Content */}
        {tab === 'study'    && <StudyTab />}
        {tab === 'practice' && <PracticeTab questionStats={stats.byQuestion} />}
        {tab === 'exam'     && (
          <ExamTab
            onSessionComplete={handleExamComplete}
            lastSession={stats.lastSession}
          />
        )}
        {tab === 'history'  && (
          <HistoryTab history={history} loading={loading} stats={stats} />
        )}
      </div>

      {/* Mobile nav — fixed bottom (visible <768px) */}
      <nav className="tab-bar tab-bar--mobile" role="tablist">
        {navItems}
      </nav>
    </>
  )
}