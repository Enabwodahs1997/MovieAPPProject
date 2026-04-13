import MovieCard from './MovieCard'

export function MovieList({ movies, favorites, onToggleFavorite, onOpenDetails }) {
	const favoriteIds = new Set(favorites.map((favorite) => favorite.imdbID))
	const searchResultFavorites = movies.filter((movie) => favoriteIds.has(movie.imdbID))

	return (
		<div className="mt-6 space-y-8">
			{searchResultFavorites.length > 0 && (
				<section className="rounded-2xl border border-pink-200 bg-pink-50/70 p-4">
					<div className="mb-4 flex items-center justify-between gap-3">
						<h3 className="text-lg font-semibold text-fuchsia-900">Your Favorites in This Search</h3>
						<span className="rounded-full bg-pink-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-pink-800">
							{searchResultFavorites.length} saved
						</span>
					</div>
					<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{searchResultFavorites.map((movie) => (
							<li key={`favorite-${movie.imdbID}`}>
								<MovieCard
									movie={movie}
									isFavorite={true}
									onToggleFavorite={onToggleFavorite}
									onOpenDetails={onOpenDetails}
								/>
							</li>
						))}
					</ul>
				</section>
			)}

			<section>
				<h3 className="mb-4 text-lg font-semibold text-fuchsia-900">Search Results</h3>
				<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{movies.map((movie) => {
						const isFavorite = favoriteIds.has(movie.imdbID)

						return (
							<li key={movie.imdbID}>
								<MovieCard
									movie={movie}
									isFavorite={isFavorite}
									onToggleFavorite={onToggleFavorite}
									onOpenDetails={onOpenDetails}
								/>
							</li>
						)
					})}
				</ul>
			</section>
		</div>
	)
}
