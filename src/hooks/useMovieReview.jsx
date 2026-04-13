import { useState } from 'react'
import { useMovies } from './useMovies'
import { useLocalStorage } from './useLocalStorage'

export function useMovieReview() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [reviewText, setReviewText] = useState('')
    const [reviews, setReviews] = useLocalStorage('movieReviews', [])
    const { movies, isLoading } = useMovies(searchTerm)
    const [showDropdown, setShowDropdown] = useState(false)

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie)
        setSearchTerm(movie.Title)
        setShowDropdown(false)
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value)
        setShowDropdown(value.length > 0)
        setSelectedMovie(null)
    }

    const handleSubmitReview = (e) => {
        e.preventDefault()
        if (!selectedMovie || !reviewText.trim()) return

        const newReview = {
            imdbID: selectedMovie.imdbID,
            Title: selectedMovie.Title,
            Poster: selectedMovie.Poster,
            Year: selectedMovie.Year,
            review: reviewText,
            date: new Date().toLocaleDateString(),
        }

        const updatedReviews = reviews.filter(r => r.imdbID !== selectedMovie.imdbID)
        setReviews([newReview, ...updatedReviews])

        setSelectedMovie(null)
        setSearchTerm('')
        setReviewText('')
        setShowDropdown(false)
    }

    const handleDeleteReview = (imdbID) => {
        setReviews(reviews.filter(r => r.imdbID !== imdbID))
    }

    return {
        searchTerm,
        selectedMovie,
        reviewText,
        reviews,
        movies,
        isLoading,
        showDropdown,
        setReviewText,
        handleSelectMovie,
        handleSearchChange,
        handleSubmitReview,
        handleDeleteReview,
    }
}
