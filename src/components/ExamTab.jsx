// src/components/ExamTab.jsx
import { useState, useCallback } from 'react'
import { QUESTIONS } from '../data/questions.js'
import QuestionCard from './QuestionCard.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const EXAM_SIZE = 15
const PASS_SCORE = 11

// ─── Start Screen ───────────────────────────────────────────
function StartScreen({ onStart, lastSession }) {
  return (
    <div>
      <div className="exam-start-card">
        <div className="exam-start-icon">⚡</div>
        <div className="exam-start-title">Simulacro de Examen</div>
        <div className="exam-start-desc">
          {EXAM_SIZE} preguntas aleatorias del banco oficial
        </div>
        <div className="exam-start-goal">
          Necesitás {PASS_SCORE}/{EXAM_SIZE} para aprobar (73%)
        </div>

        {lastSession && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, color: 'var(--label-tertiary)', marginBottom: 8 }}>
              Último simulacro
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--fill-tertiary)', borderRadius: 12, padding: '10px 16px'
            }}>
              <span style={{
                fontSize: 22, fontWeight: 800, fontFamily: 'var(--font-mono)',
                color: lastSession.passed ? 'var(--green)' : 'var(--red)'
              }}>
                {lastSession.score}/{lastSession.total}
              </span>
              <span style={{ fontSize: 13, color: 'var(--label-secondary)' }}>
                {lastSession.passed ? '✓ Aprobado' : '✗ Desaprobado'}
              </span>
            </div>
          </div>
        )}

        <button className="btn btn-primary btn-large" onClick={onStart}>
          Comenzar simulacro →
        </button>
      </div>
    </div>
  )
}

// ─── Result Screen ──────────────────────────────────────────
function ResultScreen({ ok, total, answers, questions, onRestart }) {
  const passed = ok >= PASS_SCORE
  const pct = Math.round(ok / total * 100)
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
          <span className={`stat-value ${passed ? 'green' : 'red'}`}>
            {passed ? '✓' : '✗'}
          </span>
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

      <button
        className="btn btn-primary btn-large"
        style={{ marginTop: 20 }}
        onClick={onRestart}
      >
        Nuevo simulacro →
      </button>
    </div>
  )
}

// ─── Main ExamTab ───────────────────────────────────────────
export default function ExamTab({ onSessionComplete, lastSession }) {
  const [phase, setPhase]       = useState('start') // start | exam | result
  const [questions, setQuestions] = useState([])
  const [idx, setIdx]           = useState(0)
  const [ok, setOk]             = useState(0)
  const [answers, setAnswers]   = useState([])
  const [pendingNext, setPendingNext] = useState(false)

  function startExam() {
    setQuestions(shuffle(QUESTIONS).slice(0, EXAM_SIZE))
    setIdx(0); setOk(0); setAnswers([])
    setPhase('exam')
  }

  const handleAnswer = useCallback((chosen, correct, question) => {
    const newAnswers = [...answers, { qId: question.id, chosen, correct }]
    if (correct) setOk(o => o + 1)
    setAnswers(newAnswers)

    // Auto-advance after 1.8s
    setTimeout(() => {
      if (idx + 1 >= EXAM_SIZE) {
        const finalOk = (correct ? ok + 1 : ok)
        const session = {
          score: finalOk,
          total: EXAM_SIZE,
          passed: finalOk >= PASS_SCORE,
          answers: newAnswers,
        }
        onSessionComplete?.(session)
        setPhase('result')
      } else {
        setIdx(i => i + 1)
      }
    }, 1800)
  }, [answers, idx, ok, onSessionComplete])

  const progress = questions.length ? ((idx + 1) / EXAM_SIZE) * 100 : 0

  if (phase === 'start') {
    return <StartScreen onStart={startExam} lastSession={lastSession} />
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        ok={ok}
        total={EXAM_SIZE}
        answers={answers}
        questions={questions}
        onRestart={() => setPhase('start')}
      />
    )
  }

  const question = questions[idx]

  return (
    <div>
      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Stats */}
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
          <span className="stat-value red">{idx - ok}</span>
          <span className="stat-label">Errores</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{EXAM_SIZE - idx - 1}</span>
          <span className="stat-label">Restantes</span>
        </div>
      </div>

      {/* Question — key forces remount on idx change */}
      {question && (
        <QuestionCard
          key={`exam-${idx}-${question.id}`}
          question={question}
          onAnswer={(chosen, correct) => handleAnswer(chosen, correct, question)}
          showExplanation={true}
        />
      )}

      <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: 'var(--label-tertiary)' }}>
        La siguiente pregunta carga automáticamente
      </div>
    </div>
  )
}
