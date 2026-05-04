// src/hooks/useHistory.js
import { useState, useEffect, useCallback } from 'react'
import { saveExamSession, loadHistory } from '../lib/firebase.js'

export function useHistory() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadHistory().then(h => {
      setHistory(h)
      setLoading(false)
    })
  }, [])

  const addSession = useCallback(async (session) => {
    await saveExamSession(session)
    const updated = await loadHistory()
    setHistory(updated)
  }, [])

  // Stats derivadas
  const stats = {
    total: history.length,
    passed: history.filter(h => h.passed).length,
    avgScore: history.length
      ? Math.round(history.reduce((s, h) => s + (h.score / h.total) * 100, 0) / history.length)
      : null,
    lastSession: history[0] || null,
    trend: history.slice(0, 10).reverse().map(h => ({
      score: h.score,
      total: h.total,
      passed: h.passed,
      pct: Math.round((h.score / h.total) * 100),
    })),
    // Por pregunta: cuántas veces respondió bien/mal cada una
    byQuestion: history.reduce((acc, session) => {
      if (!session.answers) return acc
      session.answers.forEach(({ qId, correct }) => {
        if (!acc[qId]) acc[qId] = { ok: 0, fail: 0 }
        correct ? acc[qId].ok++ : acc[qId].fail++
      })
      return acc
    }, {}),
  }

  return { history, loading, addSession, stats }
}
