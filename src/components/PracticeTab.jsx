// src/components/PracticeTab.jsx
import { useState, useMemo, useCallback } from 'react'
import { QUESTIONS, CATEGORIES } from '../data/questions.js'
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
  const [cat, setCat] = useState('Todas')
  const [queue, setQueue]       = useState(() => shuffle(QUESTIONS))
  const [idx, setIdx]           = useState(0)
  const [answered, setAnswered] = useState(false)
  const [ok, setOk]             = useState(0)
  const [err, setErr]           = useState(0)

  const filtered = useMemo(() =>
    cat === 'Todas' ? QUESTIONS : QUESTIONS.filter(q => q.cat === cat),
    [cat]
  )

  function changeCat(c) {
    setCat(c)
    setQueue(shuffle(cat === 'Todas' ? QUESTIONS : QUESTIONS.filter(q => q.cat === c)))
    setIdx(0); setOk(0); setErr(0); setAnswered(false)
  }

  // Re-shuffle queue when cat changes
  const currentQueue = useMemo(() => shuffle(filtered), [filtered])
  const [localQueue, setLocalQueue] = useState(currentQueue)

  const question = localQueue[idx % localQueue.length]
  const total    = ok + err
  const pct      = total ? Math.round(ok / total * 100) : null

  const handleAnswer = useCallback((chosen, correct) => {
    setAnswered(true)
    correct ? setOk(o => o + 1) : setErr(e => e + 1)
  }, [])

  function next() {
    setIdx(i => i + 1)
    setAnswered(false)
    // Restart when exhausted
    if ((idx + 1) >= localQueue.length) {
      setLocalQueue(shuffle(filtered))
      setIdx(0)
    }
  }

  function prev() {
    if (idx > 0) { setIdx(i => i - 1); setAnswered(false) }
  }

  // Weak questions (more fails than oks)
  const weakIds = Object.entries(questionStats)
    .filter(([, v]) => v.fail > v.ok)
    .map(([id]) => Number(id))

  const progress = localQueue.length > 0
    ? ((idx % localQueue.length) / localQueue.length) * 100
    : 0

  return (
    <div>
      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Respondidas</span>
        </div>
        <div className="stat-card">
          <span className="stat-value green">{ok}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-card">
          <span className="stat-value red">{err}</span>
          <span className="stat-label">Errores</span>
        </div>
        <div className="stat-card">
          <span className={`stat-value ${pct === null ? '' : pct >= 73 ? 'green' : 'red'}`}>
            {pct === null ? '—' : `${pct}%`}
          </span>
          <span className="stat-label">% Aciertos</span>
        </div>
      </div>

      {/* Category filter */}
      <div className="cat-scroll">
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`cat-pill ${cat === c ? 'active' : ''}`}
            onClick={() => changeCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Weak questions notice */}
      {weakIds.length > 0 && (
        <button
          className="btn btn-ghost mt-8"
          style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}
          onClick={() => {
            const weak = shuffle(QUESTIONS.filter(q => weakIds.includes(q.id)))
            setLocalQueue(weak); setIdx(0); setOk(0); setErr(0); setAnswered(false)
          }}
        >
          ⚠️ Repasar {weakIds.length} pregunta{weakIds.length !== 1 ? 's' : ''} débil{weakIds.length !== 1 ? 'es' : ''}
        </button>
      )}

      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      {question && (
        <QuestionCard
          key={`${idx}-${question.id}`}
          question={question}
          onAnswer={handleAnswer}
        />
      )}

      {/* Nav */}
      <div className="nav-row">
        <button className="btn btn-ghost" onClick={prev} disabled={idx === 0}>
          ← Anterior
        </button>
        <span className="nav-center">
          {(idx % localQueue.length) + 1} / {localQueue.length}
        </span>
        <button className="btn btn-primary" onClick={next}>
          Siguiente →
        </button>
      </div>
    </div>
  )
}
