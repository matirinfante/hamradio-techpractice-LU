// src/components/ExamTab.jsx
import { useState, useEffect, useRef } from 'react'
import { QUESTIONS } from '../data/questions.js'
import { REG_QUESTIONS } from '../data/reg-questions.js'
import ExamModeSelector from './ExamModeSelector.jsx'

const LETTERS         = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const EXAM_SIZE       = 20
const PASS_SCORE      = 14
const TIMER_SECS      = 6
const EXAM_TIME_LIMIT = 45 * 60  // 2700 seconds

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function isCorrectAnswer(question, chosen) {
  const ans = question.ans
  if (Array.isArray(ans)) {
    if (chosen.length !== ans.length) return false
    return [...chosen].sort().every((v, i) => v === [...ans].sort()[i])
  }
  return chosen.length === 1 && chosen[0] === ans
}

function formatCountdown(secs) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ── Single Exam Question ──────────────────────────────────────
function ExamQuestion({ question, onDone }) {
  const isMulti    = Array.isArray(question.ans)
  const correctSet = isMulti ? question.ans : [question.ans]

  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect]   = useState(false)
  // Timer
  const [timerPct, setTimerPct] = useState(100)
  const [timerDone, setTimerDone] = useState(false)
  const timerRef = useRef(null)

  function startTimer() {
    const step = 100 / (TIMER_SECS * 20)
    timerRef.current = setInterval(() => {
      setTimerPct(p => {
        const next = p - step
        if (next <= 0) { clearInterval(timerRef.current); setTimerDone(true); return 0 }
        return next
      })
    }, 50)
  }

  useEffect(() => () => clearInterval(timerRef.current), [])

  function submit(sel) {
    const ok = isCorrectAnswer(question, sel)
    setSelected(sel)
    setSubmitted(true)
    setCorrect(ok)
    startTimer()
    // notify parent immediately with result
    onDone(sel, ok, false) // false = not advancing yet
  }

  function handleSingle(idx) {
    if (submitted) return
    submit([idx])
  }

  function handleToggle(idx) {
    if (submitted) return
    setSelected(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx])
  }

  function handleConfirm() {
    if (submitted || selected.length === 0) return
    submit(selected)
  }

  function handleContinue() {
    onDone(selected, correct, true) // true = advance now
  }

  function optClass(idx) {
    let c = 'option-btn'
    if (!submitted) {
      if (isMulti && selected.includes(idx)) c += ' selected'
      return c
    }
    if (correctSet.includes(idx)) c += ' correct'
    else if (selected.includes(idx)) c += ' wrong'
    return c
  }

  return (
    <div className="q-card">
      <div className="q-meta">
        <span className="q-badge">{question.cat}</span>
        <span className="q-num">#{question.id}</span>
        {isMulti && (
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', background: 'var(--orange-bg)', padding: '3px 9px', borderRadius: 100, fontFamily: 'var(--font-mono)' }}>
            MÚLTIPLE
          </span>
        )}
      </div>

      <p className="q-text">{question.q}</p>

      {isMulti && !submitted && (
        <p style={{ fontSize: 13, color: 'var(--label-tertiary)', marginBottom: 12, fontStyle: 'italic' }}>
          Seleccioná todas las opciones correctas y confirmá.
        </p>
      )}

      <div className="options-list">
        {question.opts.map((opt, i) => (
          <button
            key={i}
            className={optClass(i)}
            onClick={() => isMulti ? handleToggle(i) : handleSingle(i)}
            disabled={submitted}
          >
            {isMulti && !submitted ? (
              <span style={{
                width: 20, height: 20, borderRadius: 4, flexShrink: 0, marginTop: 1,
                border: `2px solid ${selected.includes(i) ? 'var(--accent)' : 'var(--separator-opaque)'}`,
                background: selected.includes(i) ? 'var(--accent)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s',
              }}>
                {selected.includes(i) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            ) : (
              <span className="option-letter">{LETTERS[i]}</span>
            )}
            <span className="option-text">{opt}</span>
          </button>
        ))}
      </div>

      {isMulti && !submitted && (
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="btn btn-primary"
            onClick={handleConfirm}
            disabled={selected.length === 0}
            style={{ opacity: selected.length > 0 ? 1 : 0.4 }}
          >
            Confirmar{selected.length > 0 ? ` (${selected.length})` : ''}
          </button>
        </div>
      )}

      {submitted && (
        <>
          <div className="explanation-box" style={{
            background: correct ? 'var(--green-bg)' : 'var(--red-bg)',
            borderLeft: `3px solid ${correct ? 'var(--green)' : 'var(--red)'}`,
          }}>
            <span className="explanation-title" style={{ color: correct ? 'var(--green)' : 'var(--red)' }}>
              {correct ? '✅ Correcto' : '❌ Incorrecto'} — Explicación
            </span>
            {question.exp}
          </div>

          <div className="timer-wrap" style={{ marginTop: 14 }}>
            <div
              className={`timer-fill ${correct ? 'correct' : 'wrong'}`}
              style={{ width: `${timerPct}%`, transition: 'width 0.05s linear' }}
            />
          </div>

          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 44 }}>
            <span style={{ fontSize: 13, color: 'var(--label-tertiary)', fontFamily: 'var(--font-mono)' }}>
              {timerDone ? 'Listo para continuar' : `Podés continuar en ${Math.max(1, Math.ceil(timerPct / 100 * TIMER_SECS))}s`}
            </span>
            {timerDone && (
              <button className="btn btn-primary" onClick={handleContinue} style={{ animation: 'slideDown 0.2s ease' }}>
                Continuar →
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ── Exam Block (20 questions from one pool) ───────────────────
function ExamBlock({ pool, label, color, onComplete, timeUp = false, timeLeft = null }) {
  const [questions] = useState(() => shuffle(pool).slice(0, EXAM_SIZE))
  const [idx, setIdx]         = useState(0)
  const [answers, setAnswers] = useState([])

  // Refs to access current values inside effects without stale closures
  const questionsRef  = useRef(questions)
  const answersRef    = useRef([])
  const onCompleteRef = useRef(onComplete)
  useEffect(() => { answersRef.current = answers }, [answers])
  useEffect(() => { onCompleteRef.current = onComplete }, [onComplete])

  // Force-complete when time runs out
  useEffect(() => {
    if (!timeUp) return
    const filled = [...answersRef.current]
    const qs     = questionsRef.current
    for (let i = filled.length; i < EXAM_SIZE; i++) {
      filled.push({ qId: qs[i].id, chosen: [], correct: false })
    }
    const finalOk = filled.filter(a => a.correct).length
    onCompleteRef.current({ ok: finalOk, total: EXAM_SIZE, answers: filled, questions: qs, label, color })
  }, [timeUp]) // eslint-disable-line react-hooks/exhaustive-deps

  const ok       = answers.filter(a => a.correct).length
  const errCount = answers.filter(a => !a.correct).length
  const progress = ((idx + 1) / EXAM_SIZE) * 100
  const q        = questions[idx]

  const isLow      = timeLeft !== null && timeLeft <= 300
  const isCritical = timeLeft !== null && timeLeft <= 60

  function handleDone(chosen, correct, advance) {
    // Record answer if not already recorded for this idx
    setAnswers(prev => {
      if (prev.length > idx) return prev // already recorded
      return [...prev, { qId: questions[idx].id, chosen, correct }]
    })

    if (!advance) return

    // Advance
    const newAnswers = answers.length > idx
      ? answers
      : [...answers, { qId: questions[idx].id, chosen, correct }]

    if (idx + 1 >= EXAM_SIZE) {
      const finalOk = newAnswers.filter(a => a.correct).length
      onComplete({ ok: finalOk, total: EXAM_SIZE, answers: newAnswers, questions, label, color })
    } else {
      setIdx(i => i + 1)
    }
  }

  return (
    <div>
      {/* Countdown timer — only shown for timed (full) exam */}
      {timeLeft !== null && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: isCritical ? 'var(--red-bg)' : isLow ? 'var(--orange-bg)' : 'var(--fill-tertiary)',
          border: `1px solid ${isCritical ? 'var(--red)' : isLow ? 'var(--orange)' : 'transparent'}`,
          borderRadius: 'var(--radius-md)', padding: '10px 14px', marginBottom: 14,
          transition: 'background 0.4s, border-color 0.4s',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 18 }}>{isCritical ? '🚨' : isLow ? '⚠️' : '⏱'}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: isCritical ? 'var(--red)' : isLow ? 'var(--orange)' : 'var(--label-secondary)' }}>
              Tiempo restante
            </span>
          </span>
          <span style={{
            fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-mono)',
            color: isCritical ? 'var(--red)' : isLow ? 'var(--orange)' : 'var(--label-primary)',
            letterSpacing: 1,
          }}>
            {formatCountdown(timeLeft)}
          </span>
        </div>
      )}

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
          onDone={handleDone}
        />
      )}
    </div>
  )
}

// ── Result Screen ─────────────────────────────────────────────
function ResultScreen({ results, onRestart, timeRanOut = false }) {
  const allPassed = results.every(r => r.ok >= PASS_SCORE)

  return (
    <div>
      {timeRanOut && (
        <div style={{
          background: 'var(--red-bg)', border: '1px solid var(--red)',
          borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 14,
          fontSize: 14, color: 'var(--red)', fontWeight: 600,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 18 }}>⏰</span>
          Se acabó el tiempo — el examen finalizó automáticamente. Las preguntas no respondidas se contaron como incorrectas.
        </div>
      )}

      {results.length === 2 && (
        <div className="result-hero" style={{ marginBottom: 16 }}>
          <div className="result-emoji">{allPassed ? '🏆' : '📖'}</div>
          <div className="result-title">{allPassed ? '¡Examen completo aprobado!' : 'Resultado del examen completo'}</div>
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

      {results.map((r, ri) => {
        const passed = r.ok >= PASS_SCORE
        const pct    = Math.round(r.ok / r.total * 100)
        const errors = r.answers.filter(a => !a.correct)

        return (
          <div key={ri}>
            <div className="result-hero" style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: r.color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{r.label}</div>
              <div className="result-emoji">{passed ? '✅' : '📖'}</div>
              <div className="result-title">{passed ? '¡Aprobado!' : 'A seguir estudiando'}</div>
              <div className={`result-score ${passed ? 'pass' : 'fail'}`}>{r.ok}/{r.total}</div>
              <div className="result-msg">{pct}% · {passed ? 'Superaste el mínimo' : `Te faltaron ${PASS_SCORE - r.ok} respuesta${PASS_SCORE - r.ok !== 1 ? 's' : ''}`}</div>
            </div>

            {errors.length === 0 ? (
              <div className="empty-state" style={{ padding: '20px' }}>
                <div className="empty-state-icon" style={{ fontSize: 36 }}>🎯</div>
                <div className="empty-state-text">¡Sin errores en esta parte!</div>
              </div>
            ) : (
              <>
                <p className="section-label">{r.label} — Preguntas incorrectas</p>
                {errors.map(({ qId, chosen }) => {
                  const q = r.questions.find(q => q.id === qId)
                  if (!q) return null
                  const correctSet = Array.isArray(q.ans) ? q.ans : [q.ans]
                  return (
                    <div key={qId} className="review-item">
                      <div className="review-q-text">{q.q}</div>
                      <div className="review-wrong">
                        {chosen.length === 0
                          ? '✗ Sin respuesta'
                          : `✗ Tu respuesta: ${chosen.map(i => `${LETTERS[i]}) ${q.opts[i]}`).join(' + ')}`}
                      </div>
                      <div className="review-correct">
                        ✓ Correcta: {correctSet.map(i => `${LETTERS[i]}) ${q.opts[i]}`).join(' + ')}
                      </div>
                      <div className="review-exp">{q.exp}</div>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        )
      })}

      <button className="btn btn-primary btn-large" style={{ marginTop: 20 }} onClick={onRestart}>
        Nuevo simulacro →
      </button>
    </div>
  )
}

// ── Main ExamTab ──────────────────────────────────────────────
export default function ExamTab({ onSessionComplete, lastSession }) {
  const [phase, setPhase]     = useState('select')
  const [mode, setMode]       = useState(null)
  const [results, setResults] = useState([])
  const [timeLeft, setTimeLeft]     = useState(EXAM_TIME_LIMIT)
  const [timeUp, setTimeUp]         = useState(false)
  const [timeRanOut, setTimeRanOut] = useState(false)

  const timeUpRef  = useRef(false)
  const timerRef   = useRef(null)

  useEffect(() => () => clearInterval(timerRef.current), [])

  function startExamTimer() {
    clearInterval(timerRef.current)
    setTimeLeft(EXAM_TIME_LIMIT)
    setTimeUp(false)
    timeUpRef.current = false
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setTimeUp(true)
          timeUpRef.current = true
          setTimeRanOut(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  function stopExamTimer() {
    clearInterval(timerRef.current)
  }

  function handleModeSelect(m) {
    setMode(m)
    setResults([])
    setTimeRanOut(false)
    if (m === 'ambas') startExamTimer()
    setPhase('exam1')
  }

  function handleExam1Complete(result) {
    // If time ran out during exam1, skip directly to result (no exam2)
    if (mode === 'ambas' && !timeUpRef.current) {
      setResults([result])
      setPhase('exam2')
    } else {
      finalize([result])
    }
  }

  function handleExam2Complete(result) { finalize([...results, result]) }

  function finalize(allResults) {
    stopExamTimer()
    setResults(allResults)
    onSessionComplete?.({
      mode,
      score:   allResults.reduce((s, r) => s + r.ok, 0),
      total:   allResults.reduce((s, r) => s + r.total, 0),
      passed:  allResults.every(r => r.ok >= PASS_SCORE),
      results: allResults.map(r => ({ label: r.label, ok: r.ok, total: r.total, passed: r.ok >= PASS_SCORE })),
      answers: allResults.flatMap(r => r.answers),
    })
    setPhase('result')
  }

  function restart() {
    stopExamTimer()
    setTimeUp(false)
    timeUpRef.current = false
    setTimeRanOut(false)
    setPhase('select')
    setMode(null)
    setResults([])
  }

  const pool1  = mode === 'reglamentacion' ? REG_QUESTIONS : QUESTIONS
  const label1 = mode === 'reglamentacion' ? 'Reglamentación y Ética' : 'Parte Técnica'
  const color1 = mode === 'reglamentacion' ? 'var(--green)' : 'var(--accent)'

  const examTimeLeft = mode === 'ambas' ? timeLeft : null

  if (phase === 'select') return <ExamModeSelector onSelect={handleModeSelect} lastSession={lastSession} />

  if (phase === 'exam1') return (
    <ExamBlock
      key="e1"
      pool={pool1}
      label={label1}
      color={color1}
      onComplete={handleExam1Complete}
      timeUp={timeUp}
      timeLeft={examTimeLeft}
    />
  )

  if (phase === 'exam2') return (
    <div>
      <div style={{
        background: 'var(--green-bg)', border: '1px solid var(--green)',
        borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: 14,
        fontSize: 14, color: 'var(--green)', fontWeight: 600,
      }}>
        Técnica: {results[0]?.ok}/{results[0]?.total} {results[0]?.ok >= PASS_SCORE ? '✓ Aprobado' : '✗ Desaprobado'} · Ahora: Reglamentación y Ética →
      </div>
      <ExamBlock
        key="e2"
        pool={REG_QUESTIONS}
        label="Reglamentación y Ética"
        color="var(--green)"
        onComplete={handleExam2Complete}
        timeUp={timeUp}
        timeLeft={examTimeLeft}
      />
    </div>
  )

  if (phase === 'result') return (
    <ResultScreen results={results} onRestart={restart} timeRanOut={timeRanOut} />
  )

  return null
}
