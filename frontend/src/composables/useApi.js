import { ref } from 'vue'

// URL base de la API (variable de entorno en producción, localhost en dev)
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export function useApi() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async (url, options = {}) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(url, options)
      if (!res.ok) throw new Error(`Error ${res.status}`)
      data.value = await res.json()
    } catch (err) {
      // reintento una vez
      try {
        const res = await fetch(url, options)
        data.value = await res.json()
      } catch (err2) {
        error.value = err2.message
      }
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
