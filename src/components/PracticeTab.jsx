// src/components/PracticeTab.jsx
import { useState, useMemo, useCallback } from 'react'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
import { REG_QUESTIONS, REG_CATEGORIES } from '../data/reg-questions.js'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function QuestionCard({ question, onAnswer }) {
  const [chosen, setChosen] = useState(null)

  function handleAnswer(idx) {
    if (chosen !== null) return
    setChosen(idx)
    onAnswer?.(idx, idx === question.ans)
  }

  return (
    <div className="q-card">
      <div className="q-meta">
        <span className="q-badge">{question.cat}</span>
        <span className="q-num">#{question.id}</span>
      </div>
      <p className="q-text">{question.q}</p>
      <div className="options-list">
        {question.opts.map((opt, i) => {
          let cls = 'option-btn'
          if (chosen !== null) {
            if (i === question.ans) cls += ' correct'
            else if (i === chosen) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={chosen !== null}>
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt}</span>
            </button>
          )
        })}
      </div>
      {chosen !== null && (
        <div className="explanation-box">
          <span className="explanation-title">💡 Explicación</span>
          {question.exp}
        </div>
      )}
    </div>
  )
}

export default function PracticeTab({ questionStats = {} }) {
  const [bank, setBank]         = useState('tecnica')       // 'tecnica' | 'reglamentacion'
  const [cat, setCat]           = useState('Todas')
  const [idx, setIdx]           = useState(0)
  const [ok, setOk]             = useState(0)
  const [err, setErr]           = useState(0)
  const [queueKey, setQueueKey] = useState(0)               // force re-shuffle

  const allQuestions = bank === 'tecnica' ? QUESTIONS : REG_QUESTIONS
  const allCategories = bank === 'tecnica' ? CATEGORIES : REG_CATEGORIES
  const accentColor   = bank === 'tecnica' ? 'var(--accent)' : 'var(--green)'

  const filtered = useMemo(
    () => cat === 'Todas' ? allQuestions : allQuestions.filter(q => q.cat === cat),
    [allQuestions, cat]
  )

  const queue = useMemo(() => shuffle(filtered), [filtered, queueKey])

  const question = queue[idx % queue.length]
  const total    = ok + err
  const pct      = total ? Math.round(ok / total * 100) : null

  function switchBank(b) {
    setBank(b); setCat('Todas'); setIdx(0); setOk(0); setErr(0); setQueueKey(k => k + 1)
  }

  function changeCat(c) {
    setCat(c); setIdx(0); setOk(0); setErr(0); setQueueKey(k => k + 1)
  }

  const handleAnswer = useCallback((chosen, correct) => {
    correct ? setOk(o => o + 1) : setErr(e => e + 1)
  }, [])

  function next() {
    setIdx(i => {
      const next = i + 1
      if (next >= queue.length) { setQueueKey(k => k + 1); return 0 }
      return next
    })
  }

  function prev() {
    if (idx > 0) setIdx(i => i - 1)
  }

  // Weak questions from history
  const weakIds = Object.entries(questionStats)
    .filter(([, v]) => v.fail > v.ok)
    .map(([id]) => id)

  const progress = queue.length > 0 ? ((idx % queue.length) / queue.length) * 100 : 0

  return (
    <div>
      {/* Bank switcher */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => switchBank('tecnica')}
          style={{
            padding: '11px 16px', borderRadius: 'var(--radius-md)',
            border: bank === 'tecnica' ? '1.5px solid var(--accent)' : '1.5px solid var(--separator)',
            background: bank === 'tecnica' ? 'var(--accent-bg)' : 'var(--bg-elevated)',
            cursor: 'pointer', transition: 'all 0.2s',
            fontSize: 14, fontWeight: 700,
            color: bank === 'tecnica' ? 'var(--accent)' : 'var(--label-secondary)',
            fontFamily: 'var(--font-ui)',
            display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
          }}
        >
          🔧 Técnica
        </button>
        <button
          onClick={() => switchBank('reglamentacion')}
          style={{
            padding: '11px 16px', borderRadius: 'var(--radius-md)',
            border: bank === 'reglamentacion' ? '1.5px solid var(--green)' : '1.5px solid var(--separator)',
            background: bank === 'reglamentacion' ? 'var(--green-bg)' : 'var(--bg-elevated)',
            cursor: 'pointer', transition: 'all 0.2s',
            fontSize: 14, fontWeight: 700,
            color: bank === 'reglamentacion' ? 'var(--green)' : 'var(--label-secondary)',
            fontFamily: 'var(--font-ui)',
            display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
          }}
        >
          📋 Reglamentación
        </button>
      </div>

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
        {allCategories.map(c => (
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

      {/* Weak questions shortcut (only for técnica) */}
      {bank === 'tecnica' && weakIds.length > 0 && (
        <button
          className="btn btn-ghost mt-8"
          style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}
          onClick={() => {
            const weak = shuffle(allQuestions.filter(q => weakIds.includes(String(q.id))))
            setQueueKey(k => k + 1); setIdx(0); setOk(0); setErr(0)
          }}
        >
          ⚠️ Repasar {weakIds.length} pregunta{weakIds.length !== 1 ? 's' : ''} débil{weakIds.length !== 1 ? 'es' : ''}
        </button>
      )}

      {/* Progress bar */}
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
          key={`${bank}-${idx}-${question.id}`}
          question={question}
          onAnswer={handleAnswer}
        />
      )}

      {/* Nav */}
      <div className="nav-row">
        <button className="btn btn-ghost" onClick={prev} disabled={idx === 0}>← Anterior</button>
        <span className="nav-center">{(idx % queue.length) + 1} / {queue.length}</span>
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