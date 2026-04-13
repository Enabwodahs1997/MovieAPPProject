import { useEffect, useState } from 'react'

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'f5a49a4c'
const OMDB_BASE_URL = 'https://www.omdbapi.com/'

export function useMovieDetails(imdbID) {
  const [movieDetails, setMovieDetails] = useState(null)
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)
  const [detailsError, setDetailsError] = useState('')

  useEffect(() => {
    if (!imdbID) {
      setMovieDetails(null)
      setDetailsError('')
      return
    }

    const controller = new AbortController()

    const fetchDetails = async () => {
      try {
        setIsLoadingDetails(true)
        const url = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()

        if (data.Response === 'False') {
          setMovieDetails(null)
          setDetailsError(data.Error || 'Movie details could not be loaded.')
          return
        }

        setMovieDetails(data)
        setDetailsError('')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setMovieDetails(null)
          setDetailsError('Unable to fetch movie details right now. Please try again.')
        }
      } finally {
        setIsLoadingDetails(false)
      }
    }

    fetchDetails()

    return () => {
      controller.abort()
    }
  }, [imdbID])

  return {
    movieDetails,
    isLoadingDetails,
    detailsError,
  }
}