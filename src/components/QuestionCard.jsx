// src/components/QuestionCard.jsx
// Supports both single-answer (ans: number) and multi-answer (ans: number[]) questions.

import { useState } from 'react'

const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function arraysEqual(a, b) {
  if (a.length !== b.length) return false
  return a.every(v => b.includes(v))
}

export default function QuestionCard({ question, onAnswer, showExplanation = true }) {
  const isMulti   = Array.isArray(question.ans)
  const correctSet = isMulti ? question.ans : [question.ans]

  const [selected, setSelected]   = useState([])       // indices seleccionados
  const [submitted, setSubmitted] = useState(false)     // ¿ya confirmó?
  const [isCorrect, setIsCorrect] = useState(null)

  // ── Single choice: click => submit immediately ─────────────
  function handleSingleClick(idx) {
    if (submitted) return
    const correct = idx === question.ans
    setSelected([idx])
    setSubmitted(true)
    setIsCorrect(correct)
    onAnswer?.([idx], correct)
  }

  // ── Multi choice: toggle selection ────────────────────────
  function handleMultiToggle(idx) {
    if (submitted) return
    setSelected(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  // ── Multi choice: confirm button ──────────────────────────
  function handleConfirm() {
    if (submitted || selected.length === 0) return
    const correct = arraysEqual(selected.sort(), [...correctSet].sort())
    setSubmitted(true)
    setIsCorrect(correct)
    onAnswer?.(selected, correct)
  }

  // ── Option styles ─────────────────────────────────────────
  function optionClass(idx) {
    let cls = 'option-btn'
    if (!submitted) {
      if (isMulti && selected.includes(idx)) cls += ' selected'
      return cls
    }
    const isCorrectOpt  = correctSet.includes(idx)
    const wasSelected   = selected.includes(idx)
    if (isCorrectOpt)  cls += ' correct'
    else if (wasSelected) cls += ' wrong'
    return cls
  }

  const canConfirm = isMulti && !submitted && selected.length > 0

  return (
    <div className="q-card">
      <div className="q-meta">
        <span className="q-badge">{question.cat}</span>
        <span className="q-num">#{question.id}</span>
        {isMulti && (
          <span style={{
            fontSize: 11, fontWeight: 700, color: 'var(--orange)',
            background: 'var(--orange-bg)', padding: '3px 9px', borderRadius: 100,
            fontFamily: 'var(--font-mono)',
          }}>
            MÚLTIPLE
          </span>
        )}
      </div>

      <p className="q-text">{question.q}</p>

      {isMulti && !submitted && (
        <p style={{ fontSize: 13, color: 'var(--label-tertiary)', marginBottom: 12, fontStyle: 'italic' }}>
          Seleccioná todas las opciones correctas y luego confirmá.
        </p>
      )}

      <div className="options-list">
        {question.opts.map((opt, i) => (
          <button
            key={i}
            className={optionClass(i)}
            onClick={() => isMulti ? handleMultiToggle(i) : handleSingleClick(i)}
            disabled={submitted}
          >
            {isMulti && !submitted && (
              <span style={{
                width: 20, height: 20, borderRadius: 4, flexShrink: 0, marginTop: 1,
                border: `2px solid ${selected.includes(i) ? 'var(--accent)' : 'var(--separator-opaque)'}`,
                background: selected.includes(i) ? 'var(--accent)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}>
                {selected.includes(i) && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            )}
            {(submitted || !isMulti) && (
              <span className="option-letter">{LETTERS[i]}</span>
            )}
            <span className="option-text">{opt}</span>
          </button>
        ))}
      </div>

      {/* Confirm button for multi */}
      {isMulti && !submitted && (
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="btn btn-primary"
            onClick={handleConfirm}
            disabled={!canConfirm}
            style={{ opacity: canConfirm ? 1 : 0.4 }}
          >
            Confirmar respuesta{selected.length > 1 ? 's' : ''}
            {selected.length > 0 && ` (${selected.length})`}
          </button>
        </div>
      )}

      {/* Explanation */}
      {submitted && showExplanation && (
        <div className="explanation-box" style={{
          background: isCorrect ? 'var(--green-bg)' : 'var(--red-bg)',
          borderLeft: `3px solid ${isCorrect ? 'var(--green)' : 'var(--red)'}`,
        }}>
          <span className="explanation-title" style={{ color: isCorrect ? 'var(--green)' : 'var(--red)' }}>
            {isCorrect ? '✅ Correcto' : '❌ Incorrecto'} — Explicación
          </span>
          {question.exp}
        </div>
      )}
    </div>
  )
}
