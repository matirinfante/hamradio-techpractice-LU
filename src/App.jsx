// src/App.jsx
import { useState } from 'react'
import StudyTab    from './components/StudyTab.jsx'
import PracticeTab from './components/PracticeTab.jsx'
import ExamTab     from './components/ExamTab.jsx'
import HistoryTab  from './components/HistoryTab.jsx'
import { useHistory } from './hooks/useHistory.js'

const TABS = [
  { id: 'study',    label: 'Estudiar', icon: '📚' },
  { id: 'practice', label: 'Practicar', icon: '🎯' },
  { id: 'exam',     label: 'Examen',  icon: '⚡' },
  { id: 'history',  label: 'Progreso', icon: '📊' },
]

export default function App() {
  const [tab, setTab] = useState('study')
  const { history, loading, addSession, stats } = useHistory()

  async function handleExamComplete(session) {
    await addSession(session)
  }

  return (
    <>
      <div className="app-shell">
        {/* Header */}
        <header className="app-header">
          <div className="app-header-tag">📡 Radioaficionados AR</div>
          <h1 className="app-title">Categoría <span>Novicio</span></h1>
          <p className="app-subtitle">150 preguntas · Teoría, Técnica, Propagación y Antenas</p>
        </header>

        {/* Tab Content */}
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

      {/* Bottom Tab Bar */}
      <nav className="tab-bar" role="tablist">
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
    </>
  )
}
