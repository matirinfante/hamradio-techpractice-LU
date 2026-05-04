// src/lib/firebase.js
// Firebase v10 modular SDK
// ──────────────────────────────────────────────────────────
// Si las variables de entorno no están configuradas, la app
// usa localStorage como fallback transparente.
// ──────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const FIREBASE_ENABLED = Boolean(firebaseConfig.apiKey)

let db = null

async function getDb() {
  if (!FIREBASE_ENABLED) return null
  if (db) return db
  const { initializeApp, getApps } = await import('firebase/app')
  const { getFirestore }           = await import('firebase/firestore')
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  db = getFirestore(app)
  return db
}

// ── Generar / recuperar un userId anónimo persistente ──────
export function getOrCreateUserId() {
  let uid = localStorage.getItem('radio_uid')
  if (!uid) {
    uid = 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2)
    localStorage.setItem('radio_uid', uid)
  }
  return uid
}

// ── Estructura de una sesión de examen ─────────────────────
// {
//   uid, timestamp, score, total, passed,
//   answers: [{ qId, correct, chosen }]
// }

export async function saveExamSession(session) {
  const uid = getOrCreateUserId()
  const record = { ...session, uid, timestamp: Date.now() }

  // 1) Siempre guardar en localStorage
  const local = getLocalHistory()
  local.unshift(record)
  localStorage.setItem('radio_history', JSON.stringify(local.slice(0, 200)))

  // 2) Si Firebase disponible, también en Firestore
  if (!FIREBASE_ENABLED) return
  try {
    const firestore = await getDb()
    const { collection, addDoc } = await import('firebase/firestore')
    await addDoc(collection(firestore, 'sessions'), record)
  } catch (e) {
    console.warn('Firestore write failed, localStorage used as fallback:', e)
  }
}

export async function loadHistory() {
  // Si Firebase disponible, cargar las últimas 50 sesiones del usuario
  if (FIREBASE_ENABLED) {
    try {
      const uid = getOrCreateUserId()
      const firestore = await getDb()
      const { collection, query, where, orderBy, limit, getDocs } = await import('firebase/firestore')
      const q = query(
        collection(firestore, 'sessions'),
        where('uid', '==', uid),
        orderBy('timestamp', 'desc'),
        limit(50)
      )
      const snap = await getDocs(q)
      if (!snap.empty) {
        return snap.docs.map(d => d.data())
      }
    } catch (e) {
      console.warn('Firestore read failed, using localStorage:', e)
    }
  }
  return getLocalHistory()
}

function getLocalHistory() {
  try {
    return JSON.parse(localStorage.getItem('radio_history') || '[]')
  } catch {
    return []
  }
}

// ── Guardar progreso de práctica ───────────────────────────
export function savePracticeProgress(data) {
  localStorage.setItem('radio_practice', JSON.stringify(data))
}

export function loadPracticeProgress() {
  try {
    return JSON.parse(localStorage.getItem('radio_practice') || 'null')
  } catch {
    return null
  }
}
