import { NavLink, useOutletContext, useParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import { useMovieDetails } from '../hooks/useMovieDetails'

function MovieDetailsPage() {
  const context = useOutletContext() || {}
  const favorites = Array.isArray(context.favorites) ? context.favorites : []
  const movies = Array.isArray(context.movies) ? context.movies : []
  const onToggleFavorite = typeof context.onToggleFavorite === 'function' ? context.onToggleFavorite : () => {}
  const { imdbID } = useParams()
  const { movieDetails, isLoadingDetails, detailsError } = useMovieDetails(imdbID)
  const fallbackMovie =
    favorites.find((movie) => movie.imdbID === imdbID) ||
    movies.find((movie) => movie.imdbID === imdbID)
  const activeMovie = movieDetails || fallbackMovie

  if (isLoadingDetails) {
    return (
      <section className="rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
        <p className="text-fuchsia-700">Loading movie details...</p>
      </section>
    )
  }

  if (detailsError || !activeMovie) {
    return (
      <section className="rounded-3xl border border-rose-200/80 bg-rose-50/80 p-8 shadow-[0_16px_40px_rgba(251,113,133,0.15)]">
        <p className="text-rose-700">{detailsError || 'Movie details could not be found.'}</p>
        <div className="mt-4">
          <NavLink
            className="rounded-full bg-fuchsia-500 px-4 py-2 font-medium text-white hover:bg-fuchsia-600"
            to="/movies"
          >
            Back to Movies
          </NavLink>
        </div>
      </section>
    )
  }

  const isFavorite = favorites.some((movie) => movie.imdbID === activeMovie.imdbID)

  return (
    <section className="space-y-4 rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-fuchsia-900">Movie Details</h2>
        <NavLink
          className="rounded-full bg-fuchsia-500 px-4 py-2 font-medium text-white hover:bg-fuchsia-600"
          to="/movies"
        >
          Back to Movies
        </NavLink>
      </div>

      <MovieCard movie={activeMovie} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />

      {activeMovie.Plot && activeMovie.Plot !== 'N/A' && (
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-sm leading-relaxed text-sky-900">
          <h3 className="mb-2 text-base font-semibold text-fuchsia-900">Plot</h3>
          <p>{activeMovie.Plot}</p>
        </div>
      )}

      <div>
        <a
          className="inline-block rounded-full border border-fuchsia-300 bg-white px-4 py-2 text-sm font-medium text-fuchsia-800 hover:bg-fuchsia-50"
          href={`https://www.imdb.com/title/${activeMovie.imdbID}/`}
          rel="noreferrer"
          target="_blank"
        >
          View on IMDb
        </a>
      </div>
    </section>
  )
}

export default MovieDetailsPage
