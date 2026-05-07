// src/components/StudyTab.jsx
import { useState } from 'react'
import { CONCEPTS } from '../data/concepts.js'
import { REG_CONCEPTS } from '../data/reg-concepts.js'

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
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
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
      <button className="concept-header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="concept-emoji">{concept.icon}</span>
        <div className="concept-meta">
          <div className="concept-title">{concept.title}</div>
          <div className="concept-tags">{concept.tags[0]}</div>
        </div>
        <span className={`concept-chevron ${open ? 'open' : ''}`}>›</span>
      </button>
      {open && (
        <div className="concept-body">
          {concept.sections.map((s, i) => <ConceptSection key={i} section={s} />)}
        </div>
      )}
    </div>
  )
}

export default function StudyTab() {
  const [section, setSection] = useState('tecnica')

  const concepts = section === 'tecnica' ? CONCEPTS : REG_CONCEPTS
  const count = concepts.length

  return (
    <div>
      {/* Section switcher */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20,
      }}>
        <button
          onClick={() => setSection('tecnica')}
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-lg)',
            border: section === 'tecnica' ? '1.5px solid var(--accent)' : '1.5px solid var(--separator)',
            background: section === 'tecnica' ? 'var(--accent-bg)' : 'var(--bg-elevated)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}
        >
          <span style={{ fontSize: 24 }}>🔧</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: section === 'tecnica' ? 'var(--accent)' : 'var(--label-secondary)' }}>
            Técnica
          </span>
          <span style={{ fontSize: 11, color: 'var(--label-tertiary)', fontFamily: 'var(--font-mono)' }}>
            {CONCEPTS.length} temas
          </span>
        </button>
        <button
          onClick={() => setSection('reglamentacion')}
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-lg)',
            border: section === 'reglamentacion' ? '1.5px solid var(--green)' : '1.5px solid var(--separator)',
            background: section === 'reglamentacion' ? 'var(--green-bg)' : 'var(--bg-elevated)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}
        >
          <span style={{ fontSize: 24 }}>📋</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: section === 'reglamentacion' ? 'var(--green)' : 'var(--label-secondary)' }}>
            Reglamentación
          </span>
          <span style={{ fontSize: 11, color: 'var(--label-tertiary)', fontFamily: 'var(--font-mono)' }}>
            {REG_CONCEPTS.length} temas
          </span>
        </button>
      </div>

      {/* Label */}
      <p className="section-label">
        {section === 'tecnica' ? 'Teoría, Técnica, Propagación y Antenas' : 'Reglamentación y Ética Operativa — ENACOM'}
      </p>

      {/* Concepts list */}
      {concepts.map(c => <ConceptCard key={c.id} concept={c} />)}
    </div>
  )
}
