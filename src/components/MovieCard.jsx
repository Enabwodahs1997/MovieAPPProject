const POSTER_FALLBACK = 'https://placehold.co/140x210?text=No+Poster'

export default function MovieCard({ movie, isFavorite, onToggleFavorite, onOpenDetails }) {
	const posterSrc = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : POSTER_FALLBACK
	const cardBaseClass =
		'group relative overflow-hidden rounded-2xl border p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg'
	const cardStateClass = isFavorite
		? 'border-pink-200 bg-gradient-to-br from-pink-50 via-rose-50 to-violet-50'
		: 'border-sky-200 bg-white/90'
	const cardInteractionClass = onOpenDetails ? 'cursor-pointer' : ''
	const actionButtonClass = isFavorite
		? 'border border-pink-300 bg-pink-100 text-pink-800 hover:bg-pink-200'
		: 'border border-cyan-300 bg-cyan-400 text-white hover:bg-cyan-500'

	const handleCardClick = () => {
		if (onOpenDetails) {
			onOpenDetails(movie)
		}
	}

	const handleCardKeyDown = (event) => {
		if (!onOpenDetails) {
			return
		}

		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			onOpenDetails(movie)
		}
	}

	const handleToggleFavorite = (event) => {
		event.stopPropagation()
		onToggleFavorite(movie)
	}

	return (
		<article
			className={`${cardBaseClass} ${cardStateClass} ${cardInteractionClass}`}
			onClick={handleCardClick}
			onKeyDown={handleCardKeyDown}
			role={onOpenDetails ? 'button' : undefined}
			tabIndex={onOpenDetails ? 0 : undefined}
		>
			{isFavorite && (
				<span className="absolute right-3 top-3 rounded-full border border-pink-300 bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-pink-700">
					Favorite
				</span>
			)}

			<div className="flex gap-4">
			<img
				className="h-40 w-28 rounded-xl object-cover shadow"
				src={posterSrc}
				alt={`${movie.Title} poster`}
			/>

				<div className="flex flex-1 flex-col justify-between">
					<div>
						<h3 className="pr-16 text-lg font-semibold leading-tight text-fuchsia-900">{movie.Title}</h3>
						<div className="mt-2 flex flex-wrap gap-2">
							<span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-800">
								{movie.Year}
							</span>
							<span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-sky-800">
								{movie.Type}
							</span>
						</div>
					</div>

					<button
						className={`mt-4 w-fit rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${actionButtonClass}`}
						onClick={handleToggleFavorite}
						type="button"
					>
						{isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
					</button>
				</div>
			</div>
		</article>
	)
}
