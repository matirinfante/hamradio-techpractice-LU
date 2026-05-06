// src/components/ExamTab.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { QUESTIONS } from '../data/questions.js'
import { REG_QUESTIONS } from '../data/reg-questions.js'
import ExamModeSelector from './ExamModeSelector.jsx'

const LETTERS    = ['A', 'B', 'C', 'D', 'E']
const EXAM_SIZE  = 15
const PASS_SCORE = 11
const TIMER_SECS = 5

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Single Question with Timer ──────────────────────────────
function ExamQuestion({ question, onAnswer, onContinue }) {
  const [chosen, setChosen]     = useState(null)
  const [timerPct, setTimerPct] = useState(100)
  const [ready, setReady]       = useState(false)
  const intervalRef             = useRef(null)

  function handlePick(idx) {
    if (chosen !== null) return
    setChosen(idx)
    onAnswer(idx, idx === question.ans)
    const step = 100 / (TIMER_SECS * 20)
    intervalRef.current = setInterval(() => {
      setTimerPct(p => {
        const next = p - step
        if (next <= 0) { clearInterval(intervalRef.current); setReady(true); return 0 }
        return next
      })
    }, 50)
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const isCorrect = chosen !== null && chosen === question.ans

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
            <button key={i} className={cls} onClick={() => handlePick(i)} disabled={chosen !== null}>
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt}</span>
            </button>
          )
        })}
      </div>

      {chosen !== null && (
        <>
          <div className="explanation-box">
            <span className="explanation-title">
              {isCorrect ? '✅ Correcto' : '❌ Incorrecto'} — Explicación
            </span>
            {question.exp}
          </div>
          <div className="timer-wrap" style={{ marginTop: 14 }}>
            <div
              className={`timer-fill ${isCorrect ? 'correct' : 'wrong'}`}
              style={{ width: `${timerPct}%`, transition: 'width 0.05s linear' }}
            />
          </div>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
            <span style={{ fontSize: 13, color: 'var(--label-tertiary)', fontFamily: 'var(--font-mono)' }}>
              {ready ? 'Listo para continuar' : `Continuá en ${Math.max(1, Math.ceil(timerPct / 100 * TIMER_SECS))}s`}
            </span>
            {ready && (
              <button className="btn btn-primary" onClick={onContinue} style={{ animation: 'slideDown 0.2s ease' }}>
                Continuar →
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Result Card ─────────────────────────────────────────────
function ResultCard({ ok, total, answers, questions, label, color }) {
  const passed = ok >= PASS_SCORE
  const pct    = Math.round(ok / total * 100)
  return (
    <div className="result-hero" style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
        {label}
      </div>
      <div className="result-emoji">{passed ? '✅' : '📖'}</div>
      <div className="result-title">{passed ? '¡Aprobado!' : 'A seguir estudiando'}</div>
      <div className={`result-score ${passed ? 'pass' : 'fail'}`}>{ok}/{total}</div>
      <div className="result-msg">
        {pct}% · {passed ? 'Superaste el mínimo' : `Te faltaron ${PASS_SCORE - ok} respuesta${PASS_SCORE - ok !== 1 ? 's' : ''}`}
      </div>
    </div>
  )
}

// ─── Full Result Screen ───────────────────────────────────────
function ResultScreen({ results, onRestart }) {
  const allPassed = results.every(r => r.ok >= PASS_SCORE)

  return (
    <div>
      {/* Summary if dual exam */}
      {results.length === 2 && (
        <div className="result-hero" style={{ marginBottom: 16 }}>
          <div className="result-emoji">{allPassed ? '🏆' : '📖'}</div>
          <div className="result-title">
            {allPassed ? '¡Examen completo aprobado!' : 'Resultado del examen completo'}
          </div>
          <div className="stats-row" style={{ marginTop: 16 }}>
            {results.map((r, i) => (
              <div key={i} className="stat-card">
                <span className={`stat-value ${r.ok >= PASS_SCORE ? 'green' : 'red'}`}>{r.ok}/{r.total}</span>
                <span className="stat-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Individual results */}
      {results.map((r, i) => (
        <ResultCard key={i} {...r} />
      ))}

      {/* Error review — all errors from all results */}
      {results.map((r, ri) => {
        const errors = r.answers.filter(a => !a.correct)
        if (!errors.length) return null
        return (
          <div key={ri}>
            <p className="section-label">{r.label} — Preguntas incorrectas</p>
            {errors.map(({ qId, chosen }) => {
              const q = r.questions.find(q => q.id === qId)
              if (!q) return null
              return (
                <div key={qId} className="review-item">
                  <div className="review-q-text">{q.q}</div>
                  <div className="review-wrong">✗ Tu respuesta: {q.opts[chosen]}</div>
                  <div className="review-correct">✓ Correcta: {q.opts[q.ans]}</div>
                  <div className="review-exp">{q.exp}</div>
                </div>
              )
            })}
          </div>
        )
      })}

      {results.every(r => r.answers.filter(a => !a.correct).length === 0) && (
        <div className="empty-state">
          <div className="empty-state-icon">🎯</div>
          <div className="empty-state-text">¡Sin errores! Dominio total.</div>
        </div>
      )}

      <button className="btn btn-primary btn-large" style={{ marginTop: 20 }} onClick={onRestart}>
        Nuevo simulacro →
      </button>
    </div>
  )
}

// ─── Single Exam Block ────────────────────────────────────────
function ExamBlock({ questions: pool, label, color, onComplete }) {
  const [questions] = useState(() => shuffle(pool).slice(0, EXAM_SIZE))
  const [idx, setIdx]       = useState(0)
  const [ok, setOk]         = useState(0)
  const [answers, setAnswers] = useState([])
  const [pendingNext, setPendingNext] = useState(false)

  const progress = ((idx + 1) / EXAM_SIZE) * 100

  function handleAnswer(chosen, correct) {
    if (correct) setOk(o => o + 1)
    setAnswers(prev => [...prev, { qId: questions[idx].id, chosen, correct }])
    setPendingNext(false)
  }

  function handleContinue() {
    if (idx + 1 >= EXAM_SIZE) {
      const finalOk = answers.filter(a => a.correct).length + (answers.length < idx + 1 ? 0 : 0)
      // Use ok state which is already updated
      const allAnswers = answers
      onComplete({ ok: allAnswers.filter(a => a.correct).length, total: EXAM_SIZE, answers: allAnswers, questions, label, color })
    } else {
      setIdx(i => i + 1)
    }
  }

  const q = questions[idx]
  const errCount = answers.filter(a => !a.correct).length

  return (
    <div>
      {/* Header label */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'var(--fill-tertiary)', borderRadius: 'var(--radius-md)',
        padding: '10px 14px', marginBottom: 14,
      }}>
        <span style={{ fontSize: 18 }}>{color === 'var(--accent)' ? '🔧' : '📋'}</span>
        <span style={{ fontSize: 14, fontWeight: 700, color }}>{label}</span>
      </div>

      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="stats-row">
        <div className="stat-card"><span className="stat-value blue">{idx + 1}</span><span className="stat-label">Pregunta</span></div>
        <div className="stat-card"><span className="stat-value green">{ok}</span><span className="stat-label">Correctas</span></div>
        <div className="stat-card"><span className="stat-value red">{errCount}</span><span className="stat-label">Errores</span></div>
        <div className="stat-card"><span className="stat-value">{EXAM_SIZE - idx - 1}</span><span className="stat-label">Restantes</span></div>
      </div>

      {q && (
        <ExamQuestion
          key={`${label}-${idx}-${q.id}`}
          question={q}
          onAnswer={handleAnswer}
          onContinue={handleContinue}
        />
      )}
    </div>
  )
}

// ─── Main ExamTab ─────────────────────────────────────────────
export default function ExamTab({ onSessionComplete, lastSession }) {
  const [phase, setPhase]   = useState('select')   // select | exam1 | exam2 | result
  const [mode, setMode]     = useState(null)        // 'tecnica' | 'reglamentacion' | 'ambas'
  const [results, setResults] = useState([])

  function handleModeSelect(m) {
    setMode(m)
    setResults([])
    setPhase('exam1')
  }

  function handleExam1Complete(result) {
    const newResults = [result]
    if (mode === 'ambas') {
      setResults(newResults)
      setPhase('exam2')
    } else {
      finalize(newResults)
    }
  }

  function handleExam2Complete(result) {
    const newResults = [...results, result]
    finalize(newResults)
  }

  function finalize(allResults) {
    setResults(allResults)
    // Build session for history
    const session = {
      mode,
      score:   allResults.reduce((s, r) => s + r.ok, 0),
      total:   allResults.reduce((s, r) => s + r.total, 0),
      passed:  allResults.every(r => r.ok >= PASS_SCORE),
      results: allResults.map(r => ({ label: r.label, ok: r.ok, total: r.total, passed: r.ok >= PASS_SCORE })),
      answers: allResults.flatMap(r => r.answers),
    }
    onSessionComplete?.(session)
    setPhase('result')
  }

  function restart() {
    setPhase('select')
    setMode(null)
    setResults([])
  }

  // Which pool to use for exam1 and exam2
  const pool1 = mode === 'reglamentacion' ? REG_QUESTIONS : QUESTIONS
  const pool2 = REG_QUESTIONS

  const label1 = mode === 'reglamentacion' ? 'Reglamentación y Ética' : 'Parte Técnica'
  const color1 = mode === 'reglamentacion' ? 'var(--green)' : 'var(--accent)'

  if (phase === 'select') {
    return (
      <div>
        <ExamModeSelector onSelect={handleModeSelect} lastSession={lastSession} />
      </div>
    )
  }

  if (phase === 'exam1') {
    return (
      <ExamBlock
        key="exam1"
        questions={pool1}
        label={label1}
        color={color1}
        onComplete={handleExam1Complete}
      />
    )
  }

  if (phase === 'exam2') {
    return (
      <div>
        {/* Show interim result for exam1 */}
        {results.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <p className="section-label">Resultado Parte Técnica</p>
            <div className="stats-row">
              <div className="stat-card">
                <span className={`stat-value ${results[0].ok >= PASS_SCORE ? 'green' : 'red'}`}>
                  {results[0].ok}/{results[0].total}
                </span>
                <span className="stat-label">Técnica</span>
              </div>
              <div className="stat-card">
                <span className={`stat-value ${results[0].ok >= PASS_SCORE ? 'green' : 'red'}`}>
                  {results[0].ok >= PASS_SCORE ? '✓' : '✗'}
                </span>
                <span className="stat-label">Estado</span>
              </div>
            </div>
            <div style={{
              background: 'var(--green-bg)', border: '1px solid var(--green)',
              borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 8,
              fontSize: 14, color: 'var(--green)', fontWeight: 600,
            }}>
              ¡Ahora la segunda parte: Reglamentación y Ética!
            </div>
          </div>
        )}
        <ExamBlock
          key="exam2"
          questions={pool2}
          label="Reglamentación y Ética"
          color="var(--green)"
          onComplete={handleExam2Complete}
        />
      </div>
    )
  }

  if (phase === 'result') {
    return <ResultScreen results={results} onRestart={restart} />
  }

  return null
}