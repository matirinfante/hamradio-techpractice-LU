// src/App.jsx
import { useState, useEffect } from 'react'
import StudyTab    from './components/StudyTab.jsx'
import PracticeTab from './components/PracticeTab.jsx'
import ExamTab     from './components/ExamTab.jsx'
import HistoryTab  from './components/HistoryTab.jsx'
import { useHistory } from './hooks/useHistory.js'

const TABS = [
  { id: 'study',    label: 'Estudiar',  icon: '📚', desc: 'Conceptos y teoría' },
  { id: 'practice', label: 'Practicar', icon: '🎯', desc: 'Preguntas aleatorias' },
  { id: 'exam',     label: 'Examen',    icon: '⚡', desc: 'Simulacro oficial' },
  { id: 'history',  label: 'Progreso',  icon: '📊', desc: 'Tu historial' },
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

  const currentTab = TABS.find(t => t.id === tab)

  return (
    <>
      {/* ─── DESKTOP LAYOUT (≥1024px) ─────────────────────── */}
      <div className="desktop-layout">

        {/* Sidebar */}
        <aside className="desktop-sidebar">
          {/* Branding */}
          <div className="sidebar-brand">
            <div className="sidebar-brand-tag">📡 LU / LW</div>
            <div className="sidebar-brand-title">Radio<br /><span>Novicio</span></div>
            <div className="sidebar-brand-sub">Categoría Novicio · ENACOM</div>
          </div>

          {/* Nav */}
          <nav className="sidebar-nav" role="tablist">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`sidebar-nav-item ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
                role="tab"
                aria-selected={tab === t.id}
              >
                <span className="sidebar-nav-icon">{t.icon}</span>
                <span className="sidebar-nav-text">
                  <span className="sidebar-nav-label">{t.label}</span>
                  <span className="sidebar-nav-desc">{t.desc}</span>
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom: stats pill + theme */}
          <div className="sidebar-bottom">
            {stats.total > 0 && (
              <div className="sidebar-stats">
                <div className="sidebar-stat">
                  <span className="sidebar-stat-val">{stats.total}</span>
                  <span className="sidebar-stat-lbl">Simulacros</span>
                </div>
                <div className="sidebar-stat-divider" />
                <div className="sidebar-stat">
                  <span className="sidebar-stat-val" style={{ color: stats.avgScore >= 70 ? 'var(--green)' : 'var(--red)' }}>
                    {stats.avgScore !== null ? `${stats.avgScore}%` : '—'}
                  </span>
                  <span className="sidebar-stat-lbl">Promedio</span>
                </div>
                <div className="sidebar-stat-divider" />
                <div className="sidebar-stat">
                  <span className="sidebar-stat-val" style={{ color: 'var(--green)' }}>{stats.passed}</span>
                  <span className="sidebar-stat-lbl">Aprobados</span>
                </div>
              </div>
            )}
            <button
              className="theme-toggle"
              onClick={toggle}
              style={{ margin: '0 auto', display: 'flex' }}
              aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <footer className="app-footer">© 2026 🇦🇷🧉 · Made with ❤️ on React</footer>
          </div>
        </aside>

        {/* Main content panel */}
        <main className="desktop-main">
          {/* Content header */}
          <div className="desktop-topbar">
            <div>
              <div className="desktop-topbar-title">
                {currentTab?.icon} {currentTab?.label}
              </div>
              <div className="desktop-topbar-sub">{currentTab?.desc}</div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="desktop-content">
            {tab === 'study'    && <StudyTab />}
            {tab === 'practice' && <PracticeTab questionStats={stats.byQuestion} />}
            {tab === 'exam'     && (
              <ExamTab onSessionComplete={handleExamComplete} lastSession={stats.lastSession} />
            )}
            {tab === 'history'  && (
              <HistoryTab history={history} loading={loading} stats={stats} />
            )}
          </div>
        </main>
      </div>

      {/* ─── MOBILE LAYOUT (<1024px) ──────────────────────── */}
      <div className="mobile-layout">
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
              aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </header>

          {tab === 'study'    && <StudyTab />}
          {tab === 'practice' && <PracticeTab questionStats={stats.byQuestion} />}
          {tab === 'exam'     && (
            <ExamTab onSessionComplete={handleExamComplete} lastSession={stats.lastSession} />
          )}
          {tab === 'history'  && (
            <HistoryTab history={history} loading={loading} stats={stats} />
          )}
        </div>

        <footer className="app-footer">© 2026 🇦🇷🧉 · Made with ❤️ on React</footer>

        {/* Fixed bottom tab bar */}
        <nav className="tab-bar tab-bar--mobile" role="tablist">
          {TABS.map(t => (
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
          ))}
        </nav>
      </div>
    </>
  )
}
