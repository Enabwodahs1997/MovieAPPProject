import { MovieList } from '../components/MovieList'
import { StatusMessage } from '../components/StatusMessage'
import { useOutletContext } from 'react-router-dom'

function MoviesPage() {
  const context = useOutletContext() || {}
  const isLoading = Boolean(context.isLoading)
  const errorMessage = typeof context.errorMessage === 'string' ? context.errorMessage : ''
  const searchTerm = typeof context.searchTerm === 'string' ? context.searchTerm : ''
  const movies = Array.isArray(context.movies) ? context.movies : []
  const favorites = Array.isArray(context.favorites) ? context.favorites : []
  const onToggleFavorite = typeof context.onToggleFavorite === 'function' ? context.onToggleFavorite : () => {}
  const onOpenDetails = typeof context.onOpenDetails === 'function' ? context.onOpenDetails : () => {}
  const trimmedSearch = searchTerm.trim()

  return (
    <section className="rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-fuchsia-900">Movies</h2>
        {favorites.length > 0 && (
          <span className="rounded-full bg-pink-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-800">
            {favorites.length} favorites
          </span>
        )}
      </div>
      {trimmedSearch && (
        <p className="mb-4 text-sm text-fuchsia-700">
          Showing results for <span className="font-semibold text-fuchsia-900">"{trimmedSearch}"</span>
        </p>
      )}

      <StatusMessage
        isLoading={isLoading}
        errorMessage={errorMessage}
        searchTerm={searchTerm}
        movieCount={movies.length}
      />

      {!isLoading && movies.length > 0 && (
        <MovieList
          movies={movies}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onOpenDetails={onOpenDetails}
        />
      )}
    </section>
  )
}

export default MoviesPage
