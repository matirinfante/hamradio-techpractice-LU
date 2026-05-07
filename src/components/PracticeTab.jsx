// src/components/PracticeTab.jsx
import { useState, useMemo, useCallback } from 'react'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
import { REG_QUESTIONS, REG_CATEGORIES } from '../data/reg-questions.js'
import QuestionCard from './QuestionCard.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function PracticeTab({ questionStats = {} }) {
  const [bank, setBank]         = useState('tecnica')
  const [cat, setCat]           = useState('Todas')
  const [idx, setIdx]           = useState(0)
  const [ok, setOk]             = useState(0)
  const [err, setErr]           = useState(0)
  const [queueSeed, setQueueSeed] = useState(0)
  const [answered, setAnswered]   = useState(false)

  const allQ   = bank === 'tecnica' ? QUESTIONS : REG_QUESTIONS
  const allCat = bank === 'tecnica' ? CATEGORIES : REG_CATEGORIES
  const accentColor = bank === 'tecnica' ? 'var(--accent)' : 'var(--green)'

  const filtered = useMemo(
    () => cat === 'Todas' ? allQ : allQ.filter(q => q.cat === cat),
    [allQ, cat]
  )
  const queue = useMemo(() => shuffle(filtered), [filtered, queueSeed])

  const question = queue[idx % queue.length]
  const total    = ok + err
  const pct      = total ? Math.round(ok / total * 100) : null

  const multiCount = useMemo(
    () => filtered.filter(q => Array.isArray(q.ans)).length,
    [filtered]
  )

  function switchBank(b) {
    setBank(b); setCat('Todas'); resetStats()
  }

  function changeCat(c) {
    setCat(c); resetStats()
  }

  function resetStats() {
    setIdx(0); setOk(0); setErr(0); setAnswered(false); setQueueSeed(s => s + 1)
  }

  const handleAnswer = useCallback((chosen, correct) => {
    setAnswered(true)
    correct ? setOk(o => o + 1) : setErr(e => e + 1)
  }, [])

  function next() {
    const nextIdx = idx + 1
    if (nextIdx >= queue.length) {
      setQueueSeed(s => s + 1)
      setIdx(0)
    } else {
      setIdx(nextIdx)
    }
    setAnswered(false)
  }

  function prev() {
    if (idx > 0) { setIdx(i => i - 1); setAnswered(false) }
  }

  const progress = queue.length > 0 ? ((idx % queue.length) / queue.length) * 100 : 0

  return (
    <div>
      {/* Bank switcher */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        {[
          { id: 'tecnica', label: 'Técnica', icon: '🔧', color: 'var(--accent)', bg: 'var(--accent-bg)', count: QUESTIONS.length },
          { id: 'reglamentacion', label: 'Reglamentación', icon: '📋', color: 'var(--green)', bg: 'var(--green-bg)', count: REG_QUESTIONS.length },
        ].map(b => (
          <button
            key={b.id}
            onClick={() => switchBank(b.id)}
            style={{
              padding: '11px 16px', borderRadius: 'var(--radius-md)',
              border: bank === b.id ? `1.5px solid ${b.color}` : '1.5px solid var(--separator)',
              background: bank === b.id ? b.bg : 'var(--bg-elevated)',
              cursor: 'pointer', transition: 'all 0.2s',
              fontSize: 14, fontWeight: 700,
              color: bank === b.id ? b.color : 'var(--label-secondary)',
              fontFamily: 'var(--font-ui)',
              display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
            }}
          >
            {b.icon} {b.label}
            <span style={{ fontSize: 11, fontWeight: 400, fontFamily: 'var(--font-mono)', opacity: 0.7 }}>
              ({b.count})
            </span>
          </button>
        ))}
      </div>

      {/* Multi-choice notice */}
      {multiCount > 0 && (
        <div style={{
          background: 'var(--orange-bg)', border: '1px solid var(--orange)',
          borderRadius: 'var(--radius-md)', padding: '9px 14px', marginBottom: 12,
          fontSize: 13, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>⚠️</span>
          <span><strong>{multiCount}</strong> pregunta{multiCount !== 1 ? 's' : ''} con respuesta múltiple en este banco</span>
        </div>
      )}

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card"><span className="stat-value">{total}</span><span className="stat-label">Respondidas</span></div>
        <div className="stat-card"><span className="stat-value green">{ok}</span><span className="stat-label">Correctas</span></div>
        <div className="stat-card"><span className="stat-value red">{err}</span><span className="stat-label">Errores</span></div>
        <div className="stat-card">
          <span className={`stat-value ${pct === null ? '' : pct >= 73 ? 'green' : 'red'}`}>
            {pct === null ? '—' : `${pct}%`}
          </span>
          <span className="stat-label">% Aciertos</span>
        </div>
      </div>

      {/* Category filter */}
      <div className="cat-scroll">
        {allCat.map(c => (
          <button
            key={c}
            className={`cat-pill ${cat === c ? 'active' : ''}`}
            style={cat === c && bank === 'reglamentacion' ? { background: 'var(--green)', color: 'white' } : {}}
            onClick={() => changeCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="progress-wrap">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: bank === 'reglamentacion'
              ? 'linear-gradient(90deg, var(--green), var(--teal))'
              : undefined,
          }}
        />
      </div>

      {/* Question */}
      {question && (
        <QuestionCard
          key={`${bank}-${idx}-${question.id}-${queueSeed}`}
          question={question}
          onAnswer={handleAnswer}
        />
      )}

      {/* Nav */}
      <div className="nav-row" style={{ marginTop: 16 }}>
        <button className="btn btn-ghost" onClick={prev} disabled={idx === 0}>
          ← Anterior
        </button>
        <span className="nav-center">
          {(idx % queue.length) + 1} / {queue.length}
        </span>
        <button
          className="btn btn-primary"
          style={bank === 'reglamentacion' ? { background: 'var(--green)' } : {}}
          onClick={next}
        >
          Siguiente →
        </button>
      </div>
    </div>
  )
}
