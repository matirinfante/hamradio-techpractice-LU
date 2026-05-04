// src/components/HistoryTab.jsx

function formatDate(ts) {
  if (!ts) return '—'
  return new Date(ts).toLocaleDateString('es-AR', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

function TrendChart({ trend }) {
  if (!trend?.length) return null
  const max = Math.max(...trend.map(t => t.pct), 100)

  return (
    <div style={{ padding: '16px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--label-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>
        Últimas {trend.length} sesiones
      </div>

      {/* Chart bars */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 72, marginBottom: 8 }}>
        {trend.map((t, i) => (
          <div
            key={i}
            title={`${t.score}/${t.total} (${t.pct}%)`}
            style={{
              flex: 1,
              height: `${(t.pct / 100) * 72}px`,
              minHeight: 4,
              background: t.passed ? 'var(--green)' : 'var(--red)',
              borderRadius: '3px 3px 0 0',
              opacity: 0.8 + (i / trend.length) * 0.2,
              transition: 'height 0.5s ease',
            }}
          />
        ))}
      </div>

      {/* Pass line */}
      <div style={{
        borderTop: '1px dashed var(--separator)',
        paddingTop: 6,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: 11, color: 'var(--label-tertiary)' }}>— mínimo 73%</span>
        <span style={{
          fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)',
          color: trend[trend.length - 1]?.passed ? 'var(--green)' : 'var(--red)'
        }}>
          {trend[trend.length - 1]?.pct}% último
        </span>
      </div>
    </div>
  )
}

function SummaryCards({ stats }) {
  return (
    <div className="stats-row" style={{ marginBottom: 12 }}>
      <div className="stat-card">
        <span className="stat-value blue">{stats.total}</span>
        <span className="stat-label">Simulacros</span>
      </div>
      <div className="stat-card">
        <span className="stat-value green">{stats.passed}</span>
        <span className="stat-label">Aprobados</span>
      </div>
      <div className="stat-card">
        <span className={`stat-value ${stats.avgScore >= 73 ? 'green' : stats.avgScore !== null ? 'red' : ''}`}>
          {stats.avgScore !== null ? `${stats.avgScore}%` : '—'}
        </span>
        <span className="stat-label">Prom. general</span>
      </div>
      <div className="stat-card">
        <span className={`stat-value ${stats.total > 0 ? (stats.passed / stats.total >= 0.5 ? 'green' : 'red') : ''}`}>
          {stats.total > 0 ? `${Math.round(stats.passed / stats.total * 100)}%` : '—'}
        </span>
        <span className="stat-label">% Aprobación</span>
      </div>
    </div>
  )
}

export default function HistoryTab({ history, loading, stats }) {
  if (loading) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">⏳</div>
        <div className="empty-state-text">Cargando historial…</div>
      </div>
    )
  }

  if (history.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📊</div>
        <div className="empty-state-text" style={{ lineHeight: 1.6 }}>
          Todavía no hiciste ningún simulacro.<br />
          ¡Completá el primero para ver tu progreso!
        </div>
      </div>
    )
  }

  return (
    <div>
      <SummaryCards stats={stats} />
      <TrendChart trend={stats.trend} />

      <p className="section-label">Historial de simulacros</p>

      {history.map((session, i) => {
        const pct = Math.round((session.score / session.total) * 100)
        return (
          <div key={i} className="history-item">
            <div className={`history-score-badge ${session.passed ? 'pass' : 'fail'}`}>
              {session.score}/{session.total}
            </div>
            <div className="history-info">
              <div className="history-date">{formatDate(session.timestamp)}</div>
              <div className="history-detail">
                {session.passed ? '✓ Aprobado' : '✗ Desaprobado'}
                {' · '}
                {session.total - session.score} error{session.total - session.score !== 1 ? 'es' : ''}
              </div>
            </div>
            <div className={`history-pct ${session.passed ? 'pass' : 'fail'}`}>
              {pct}%
            </div>
          </div>
        )
      })}
    </div>
  )
}
