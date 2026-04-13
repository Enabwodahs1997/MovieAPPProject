import { useEffect, useState } from 'react'

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'f5a49a4c'
const OMDB_BASE_URL = 'https://www.omdbapi.com/'

export function useMovies(searchTerm) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const normalizedSearch = searchTerm.trim()

  useEffect(() => {
    if (!normalizedSearch) {
      setMovies([])
      setErrorMessage('')
      return
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true)
        const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(normalizedSearch)}`
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()

        if (data.Response === 'False') {
          setMovies([])
          setErrorMessage(data.Error || 'No movies found.')
          return
        }

        setMovies(data.Search || [])
        setErrorMessage('')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setMovies([])
          setErrorMessage('Unable to fetch movies right now. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }, 450)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [normalizedSearch])

  return {
    movies,
    isLoading,
    errorMessage,
  }
}
