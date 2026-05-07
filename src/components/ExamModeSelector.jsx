// src/components/ExamModeSelector.jsx
export default function ExamModeSelector({ onSelect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="exam-start-card" style={{ padding: '28px 24px', textAlign: 'left' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="exam-start-icon" style={{ fontSize: 52 }}>⚡</div>
          <div className="exam-start-title">Simulacro de Examen</div>
          <div className="exam-start-desc">¿Qué parte querés practicar?</div>
          <div className="exam-start-goal">15 preguntas · 11/15 para aprobar (73%)</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Técnica */}
          <button
            className="btn"
            onClick={() => onSelect('tecnica')}
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              padding: '16px 20px',
              background: 'var(--accent-bg)',
              border: '1.5px solid var(--accent)',
              borderRadius: 'var(--radius-lg)',
              gap: 14,
            }}
          >
            <span style={{ fontSize: 28 }}>🔧</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent)' }}>
                Solo Parte Técnica
              </div>
              <div style={{ fontSize: 13, color: 'var(--label-secondary)', marginTop: 2 }}>
                150 preguntas de teoría, técnica, propagación y antenas
              </div>
            </div>
          </button>

          {/* Reglamentación */}
          <button
            className="btn"
            onClick={() => onSelect('reglamentacion')}
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              padding: '16px 20px',
              background: 'var(--green-bg)',
              border: '1.5px solid var(--green)',
              borderRadius: 'var(--radius-lg)',
              gap: 14,
            }}
          >
            <span style={{ fontSize: 28 }}>📋</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--green)' }}>
                Solo Reglamentación y Ética
              </div>
              <div style={{ fontSize: 13, color: 'var(--label-secondary)', marginTop: 2 }}>
                150 preguntas del banco oficial ENACOM
              </div>
            </div>
          </button>

          {/* Ambas */}
          <button
            className="btn"
            onClick={() => onSelect('ambas')}
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              padding: '16px 20px',
              background: 'var(--gold-bg)',
              border: '1.5px solid var(--gold)',
              borderRadius: 'var(--radius-lg)',
              gap: 14,
            }}
          >
            <span style={{ fontSize: 28 }}>🏆</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--gold)' }}>
                Examen Completo (ambas partes)
              </div>
              <div style={{ fontSize: 13, color: 'var(--label-secondary)', marginTop: 2 }}>
                15 preguntas técnicas + 15 de reglamentación — 2 exámenes seguidos
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
