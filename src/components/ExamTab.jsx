// src/components/ExamTab.jsx
import { useState, useCallback, useEffect, useRef } from 'react'
import { QUESTIONS } from '../data/questions.js'

const LETTERS = ['A', 'B', 'C', 'D']
const EXAM_SIZE  = 15
const PASS_SCORE = 11
const TIMER_SECS = 5  // seconds to read feedback before "Continuar" appears

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Timer Bar + Continue button ────────────────────────────
function FeedbackTimer({ isCorrect, onContinue }) {
  const [pct, setPct] = useState(100)
  const [ready, setReady] = useState(false)
  const interval = useRef(null)

  useEffect(() => {
    const step = 100 / (TIMER_SECS * 20) // update every 50ms
    interval.current = setInterval(() => {
      setPct(p => {
        const next = p - step
        if (next <= 0) {
          clearInterval(interval.current)
          setReady(true)
          return 0
        }
        return next
      })
    }, 50)
    return () => clearInterval(interval.current)
  }, [])

  return (
    <div style={{ marginTop: 14 }}>
      {/* Timer bar */}
      <div className="timer-wrap">
        <div
          className={`timer-fill ${isCorrect ? 'correct' : 'wrong'}`}
          style={{
            width: `${pct}%`,
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      {/* Continue button — aparece cuando termina el timer */}
      <div style={{
        marginTop: 12,
        display: 'flex',
        justifyContent: 'flex-end',
        minHeight: 44,
        alignItems: 'center',
      }}>
        {ready ? (
          <button
            className="btn btn-primary"
            onClick={onContinue}
            style={{ animation: 'slideDown 0.2s ease' }}
          >
            Continuar →
          </button>
        ) : (
          <span style={{
            fontSize: 13,
            color: 'var(--label-tertiary)',
            fontFamily: 'var(--font-mono)',
          }}>
            Leé el feedback… {Math.ceil(pct / 100 * TIMER_SECS)}s
          </span>
        )}
      </div>
    </div>
  )
}

// ─── Single Question during exam ────────────────────────────
function ExamQuestion({ question, onNext }) {
  const [chosen, setChosen] = useState(null)

  function handleAnswer(idx) {
    if (chosen !== null) return
    setChosen(idx)
    onNext(idx, idx === question.ans)
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
            else if (i === chosen)  cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleAnswer(i)}
              disabled={chosen !== null}
            >
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt}</span>
            </button>
          )
        })}
      </div>

      {chosen !== null && (
        <>
          <div className="explanation-box">
            <span className="explanation-title">💡 Explicación</span>
            {question.exp}
          </div>
          <FeedbackTimer
            isCorrect={chosen === question.ans}
            onContinue={() => {}}  // handled by parent via onNext callback
          />
        </>
      )}
    </div>
  )
}

// ─── Start Screen ────────────────────────────────────────────
function StartScreen({ onStart, lastSession }) {
  return (
    <div className="exam-start-card">
      <div className="exam-start-icon">⚡</div>
      <div className="exam-start-title">Simulacro de Examen</div>
      <div className="exam-start-desc">{EXAM_SIZE} preguntas aleatorias del banco oficial</div>
      <div className="exam-start-goal">Necesitás {PASS_SCORE}/{EXAM_SIZE} para aprobar (73%)</div>

      {lastSession && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 13, color: 'var(--label-tertiary)', marginBottom: 8 }}>
            Último simulacro
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'var(--fill-tertiary)', borderRadius: 14, padding: '10px 18px',
          }}>
            <span style={{
              fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-mono)',
              color: lastSession.passed ? 'var(--green)' : 'var(--red)',
            }}>
              {lastSession.score}/{lastSession.total}
            </span>
            <span style={{ fontSize: 14, color: 'var(--label-secondary)' }}>
              {lastSession.passed ? '✓ Aprobado' : '✗ Desaprobado'}
            </span>
          </div>
        </div>
      )}

      <button className="btn btn-primary btn-large" onClick={onStart}>
        Comenzar simulacro →
      </button>
    </div>
  )
}

// ─── Result Screen ───────────────────────────────────────────
function ResultScreen({ ok, total, answers, questions, onRestart }) {
  const passed = ok >= PASS_SCORE
  const pct    = Math.round(ok / total * 100)
  const errors = answers.filter(a => !a.correct)

  return (
    <div>
      <div className="result-hero">
        <div className="result-emoji">{passed ? '🏆' : '📖'}</div>
        <div className="result-title">{passed ? '¡Aprobado!' : 'A seguir estudiando'}</div>
        <div className={`result-score ${passed ? 'pass' : 'fail'}`}>{ok}/{total}</div>
        <div className="result-msg">
          {pct}% de aciertos ·{' '}
          {passed
            ? 'Superaste el mínimo requerido'
            : `Te faltaron ${PASS_SCORE - ok} respuesta${PASS_SCORE - ok !== 1 ? 's' : ''} para aprobar`}
        </div>
      </div>

      <div className="stats-row" style={{ marginBottom: 20 }}>
        <div className="stat-card">
          <span className="stat-value green">{ok}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-card">
          <span className="stat-value red">{total - ok}</span>
          <span className="stat-label">Errores</span>
        </div>
        <div className="stat-card">
          <span className={`stat-value ${passed ? 'green' : 'red'}`}>{pct}%</span>
          <span className="stat-label">Puntaje</span>
        </div>
        <div className="stat-card">
          <span className={`stat-value ${passed ? 'green' : 'red'}`}>{passed ? '✓' : '✗'}</span>
          <span className="stat-label">Estado</span>
        </div>
      </div>

      {errors.length > 0 && (
        <>
          <p className="section-label">Preguntas incorrectas — repasá</p>
          {errors.map(({ qId, chosen }) => {
            const q = questions.find(q => q.id === qId)
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
        </>
      )}

      {errors.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">🎯</div>
          <div className="empty-state-text">¡Sin errores! Dominio total del simulacro.</div>
        </div>
      )}

      <button className="btn btn-primary btn-large" style={{ marginTop: 20 }} onClick={onRestart}>
        Nuevo simulacro →
      </button>
    </div>
  )
}

// ─── Main ExamTab ─────────────────────────────────────────────
export default function ExamTab({ onSessionComplete, lastSession }) {
  const [phase, setPhase]         = useState('start')
  const [questions, setQuestions] = useState([])
  const [idx, setIdx]             = useState(0)
  const [ok, setOk]               = useState(0)
  const [answers, setAnswers]     = useState([])
  // pendingAdvance holds the result of the current answer until user clicks Continuar
  const [pendingAdvance, setPendingAdvance] = useState(null)

  function startExam() {
    setQuestions(shuffle(QUESTIONS).slice(0, EXAM_SIZE))
    setIdx(0); setOk(0); setAnswers([]); setPendingAdvance(null)
    setPhase('exam')
  }

  // Called immediately when user picks an option
  function handleAnswer(chosen, correct) {
    const isCorrect = chosen === question.ans
    setPendingAdvance({ chosen, correct: isCorrect })
    if (isCorrect) setOk(o => o + 1)
    setAnswers(prev => [...prev, { qId: question.id, chosen, correct: isCorrect }])
  }

  // Called when timer ends and user clicks Continuar
  function handleContinue() {
    setPendingAdvance(null)
    if (idx + 1 >= EXAM_SIZE) {
      // Build final session using current ok count (already updated via state)
      setPhase('finish')
    } else {
      setIdx(i => i + 1)
    }
  }

  // Transition to result when finish phase is set
  useEffect(() => {
    if (phase === 'finish') {
      const finalOk = answers.filter(a => a.correct).length
      const session = {
        score: finalOk,
        total: EXAM_SIZE,
        passed: finalOk >= PASS_SCORE,
        answers,
      }
      onSessionComplete?.(session)
      setPhase('result')
    }
  }, [phase])

  const progress  = questions.length ? ((idx + 1) / EXAM_SIZE) * 100 : 0
  const question  = questions[idx]
  const errCount  = answers.filter(a => !a.correct).length

  if (phase === 'start') {
    return <StartScreen onStart={startExam} lastSession={lastSession} />
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        ok={answers.filter(a => a.correct).length}
        total={EXAM_SIZE}
        answers={answers}
        questions={questions}
        onRestart={() => setPhase('start')}
      />
    )
  }

  return (
    <div>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value blue">{idx + 1}</span>
          <span className="stat-label">Pregunta</span>
        </div>
        <div className="stat-card">
          <span className="stat-value green">{ok}</span>
          <span className="stat-label">Correctas</span>
        </div>
        <div className="stat-card">
          <span className="stat-value red">{errCount}</span>
          <span className="stat-label">Errores</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{EXAM_SIZE - idx - 1}</span>
          <span className="stat-label">Restantes</span>
        </div>
      </div>

      {/* Key on idx forces a fresh component (resets chosen state) */}
      {question && (
        <ExamQuestionWithTimer
          key={`exam-${idx}-${question.id}`}
          question={question}
          onAnswer={handleAnswer}
          onContinue={handleContinue}
        />
      )}
    </div>
  )
}

// Wrapper that owns chosen + timer state together cleanly
function ExamQuestionWithTimer({ question, onAnswer, onContinue }) {
  const [chosen, setChosen]   = useState(null)
  const [timerPct, setTimerPct] = useState(100)
  const [ready, setReady]     = useState(false)
  const intervalRef           = useRef(null)

  function handlePick(idx) {
    if (chosen !== null) return
    setChosen(idx)
    onAnswer(idx, idx === question.ans)
    // Start countdown
    const step = 100 / (TIMER_SECS * 20)
    intervalRef.current = setInterval(() => {
      setTimerPct(p => {
        const next = p - step
        if (next <= 0) {
          clearInterval(intervalRef.current)
          setReady(true)
          return 0
        }
        return next
      })
    }, 50)
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const isCorrect = chosen === question.ans

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
            else if (i === chosen)  cls += ' wrong'
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

          {/* Timer bar */}
          <div className="timer-wrap" style={{ marginTop: 14 }}>
            <div
              className={`timer-fill ${isCorrect ? 'correct' : 'wrong'}`}
              style={{ width: `${timerPct}%`, transition: 'width 0.05s linear' }}
            />
          </div>

          {/* Countdown / Continuar */}
          <div style={{
            marginTop: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 44,
          }}>
            <span style={{ fontSize: 13, color: 'var(--label-tertiary)', fontFamily: 'var(--font-mono)' }}>
              {ready ? 'Listo para continuar' : `Podés continuar en ${Math.max(1, Math.ceil(timerPct / 100 * TIMER_SECS))}s`}
            </span>
            {ready && (
              <button
                className="btn btn-primary"
                onClick={onContinue}
                style={{ animation: 'slideDown 0.2s ease' }}
              >
                Continuar →
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}