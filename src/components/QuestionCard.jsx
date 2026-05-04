// src/components/QuestionCard.jsx
import { useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuestionCard({ question, onAnswer, showExplanation = true }) {
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

      {chosen !== null && showExplanation && (
        <div className="explanation-box">
          <span className="explanation-title">💡 Explicación</span>
          <span>{question.exp}</span>
        </div>
      )}
    </div>
  )
}
