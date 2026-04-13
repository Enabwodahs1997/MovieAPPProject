import MovieCard from '../components/MovieCard'
import { useOutletContext } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

function HomePage() {
  const context = useOutletContext() || {}
  const favorites = Array.isArray(context.favorites) ? context.favorites : []
  const searchTerm = typeof context.searchTerm === 'string' ? context.searchTerm : ''
  const onToggleFavorite = typeof context.onToggleFavorite === 'function' ? context.onToggleFavorite : () => {}
  const onOpenDetails = typeof context.onOpenDetails === 'function' ? context.onOpenDetails : () => {}
  const hasFavorites = favorites.length > 0
  const [reviews] = useLocalStorage('movieReviews', [])
  const hasReviews = reviews.length > 0

  return (
    <section className="space-y-6 rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
      <header>
        <h1 className="mb-2 text-3xl font-bold text-fuchsia-900">Movie Explorer App</h1>
        <p className="text-sm text-fuchsia-700">Last search: {searchTerm || ''}</p>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-fuchsia-900">Your Favorite Movies</h2>
        <span className="rounded-full bg-pink-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-800">
          {favorites.length} saved
        </span>
      </div>
    

      {!hasFavorites && (
        <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 text-sm text-sky-900">
          No favorites yet? Search for movies and tap Add to Favorites!
        </div>
      )}

      {hasFavorites && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {favorites.map((movie) => (
            <li key={`home-favorite-${movie.imdbID}`}>
              <MovieCard
                movie={movie}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onOpenDetails={onOpenDetails}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="border-t border-pink-200 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-fuchsia-900">Your Movie Reviews</h2>
          <span className="rounded-full bg-pink-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-800">
            {reviews.length} reviews
          </span>
        </div>

        {!hasReviews && (
          <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50/70 p-6 text-sm text-sky-900">
            No reviews yet? Head to the Reviews page to write your first one!
          </div>
        )}

        {hasReviews && (
          <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <li key={`home-review-${review.imdbID}`} className="rounded-2xl border border-pink-200/50 bg-pink-50/30 p-4">
                <div className="flex items-start gap-3">
                  {review.Poster && review.Poster !== 'N/A' && (
                    <img src={review.Poster} alt={review.Title} className="h-20 w-14 shrink-0 object-cover rounded" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-fuchsia-900">{review.Title}</h3>
                    <p className="text-xs text-fuchsia-700 mb-2">{review.Year} • {review.date}</p>
                    <p className="text-sm text-fuchsia-800">{review.review}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default HomePage
