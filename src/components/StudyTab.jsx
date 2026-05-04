// src/components/StudyTab.jsx
import { useState } from 'react'
import { CONCEPTS } from '../data/concepts.js'

function ConceptSection({ section }) {
  return (
    <div className="concept-section">
      <div className="concept-section-heading">{section.heading}</div>

      {section.text && <p className="concept-text">{section.text}</p>}

      {section.formulas?.map((f, i) => (
        <code key={i} className="concept-formula">{f}</code>
      ))}

      {section.items && (
        <ul className="concept-items">
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}

      {section.table && (
        <div className="concept-table-wrap">
          <table className="concept-table">
            <thead>
              <tr>{section.table.headers.map(h => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.note && <p className="concept-note">💡 {section.note}</p>}
    </div>
  )
}

function ConceptCard({ concept }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="concept-item">
      <button
        className="concept-header"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="concept-emoji">{concept.icon}</span>
        <div className="concept-meta">
          <div className="concept-title">{concept.title}</div>
          <div className="concept-tags">{concept.tags[0]}</div>
        </div>
        <span className={`concept-chevron ${open ? 'open' : ''}`}>›</span>
      </button>

      {open && (
        <div className="concept-body">
          {concept.sections.map((s, i) => (
            <ConceptSection key={i} section={s} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function StudyTab() {
  return (
    <div>
      <p className="section-label">Temas del examen</p>
      {CONCEPTS.map(c => <ConceptCard key={c.id} concept={c} />)}
    </div>
  )
}
