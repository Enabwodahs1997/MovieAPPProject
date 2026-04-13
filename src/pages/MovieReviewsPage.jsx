import { useMovieReview } from '../hooks/useMovieReview'
import { StarRating } from '../components/StarRating'

export function ReviewsPage() {
    const {
        searchTerm,
        selectedMovie,
        reviewText,
        reviews,
        movies,
        isLoading,
        showDropdown,
        starRating,
        setReviewText,
        handleSelectMovie,
        handleSearchChange,
        handleSubmitReview,
        handleDeleteReview,
        handleStarRatingChange,
    } = useMovieReview()

    return (
        <section className="space-y-6 rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
            <header>
                <h1 className="mb-2 text-3xl font-bold text-fuchsia-900">Movie Reviews</h1>
                <p className="text-sm text-fuchsia-700">Share your thoughts on movies you've watched</p>
            </header>

            <div className="rounded-2xl border border-pink-200 bg-pink-50/50 p-4 text-sm text-fuchsia-800">
                <p>Search for a movie, select it from the dropdown, and write your review. Your reviews will appear on your Home page!</p>
            </div>

            <div className="space-y-4">
                <form onSubmit={handleSubmitReview} className="space-y-4 rounded-2xl border border-pink-200/50 bg-pink-50/30 p-6">
                    <div className="relative">
                        <label className="block mb-2 font-semibold text-fuchsia-900" htmlFor="movieSearch">Search Movie</label>
                        <input 
                            className="w-full rounded-lg border border-pink-200 bg-white/70 p-3 text-fuchsia-900 placeholder-fuchsia-400 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200/50" 
                            type="text" 
                            id="movieSearch" 
                            placeholder="Type a movie title..." 
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />

                        {showDropdown && searchTerm && (
                            <div className="absolute top-full left-0 right-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-lg border border-pink-200 bg-white shadow-lg">
                                {isLoading && (
                                    <div className="p-3 text-center text-fuchsia-700">Loading...</div>
                                )}
                                {!isLoading && movies.length === 0 && (
                                    <div className="p-3 text-center text-fuchsia-700">No movies found</div>
                                )}
                                {movies.map((movie) => (
                                    <button
                                        key={movie.imdbID}
                                        type="button"
                                        onClick={() => handleSelectMovie(movie)}
                                        className="w-full px-3 py-2 text-left hover:bg-pink-100 text-fuchsia-900 flex items-center gap-2"
                                    >
                                        {movie.Poster && movie.Poster !== 'N/A' && (
                                            <img src={movie.Poster} alt={movie.Title} className="h-10 w-8 object-cover rounded" />
                                        )}
                                        <div className="flex-1">
                                            <div className="font-semibold">{movie.Title}</div>
                                            <div className="text-xs text-fuchsia-700">{movie.Year}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedMovie && (
                        <div className="rounded-lg border border-pink-200 bg-pink-100/30 p-3">
                            <div className="flex items-center gap-3">
                                {selectedMovie.Poster && selectedMovie.Poster !== 'N/A' && (
                                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="h-16 w-12 object-cover rounded" />
                                )}
                                <div>
                                    <p className="font-semibold text-fuchsia-900">{selectedMovie.Title}</p>
                                    <p className="text-sm text-fuchsia-700">{selectedMovie.Year}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block mb-2 font-semibold text-fuchsia-900" htmlFor="review">Your Review</label>
                        <textarea 
                            className="w-full rounded-lg border border-pink-200 bg-white/70 p-3 text-fuchsia-900 placeholder-fuchsia-400 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200/50" 
                            id="review" 
                            name="review" 
                            rows="5" 
                            placeholder="Share your thoughts about this movie..." 
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            disabled={!selectedMovie}
                        />
                    </div>

                    <div>
                        <label className="block mb-3 font-semibold text-fuchsia-900">Star Rating</label>
                        <StarRating 
                            rating={starRating}
                            onRatingChange={handleStarRatingChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={!selectedMovie || !reviewText.trim()}
                        className="rounded-xl bg-linear-to-r from-pink-400 to-fuchsia-400 px-6 py-2 font-semibold text-white shadow-md transition hover:from-pink-500 hover:to-fuchsia-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

            {reviews.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-fuchsia-900">Your Reviews</h2>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {reviews.map((review) => (
                            <li key={review.imdbID} className="rounded-2xl border border-pink-200/50 bg-pink-50/30 p-4">
                                <div className="flex items-start gap-3">
                                    {review.Poster && review.Poster !== 'N/A' && (
                                        <img src={review.Poster} alt={review.Title} className="h-20 w-14 shrink-0 object-cover rounded" />
                                    )}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-fuchsia-900">{review.Title}</h3>
                                        <p className="text-xs text-fuchsia-700 mb-2">{review.Year} • {review.date}</p>
                                        {review.starRating && (
                                            <div className="flex items-center gap-1 mb-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span 
                                                        key={star}
                                                        className={`text-lg ${star <= review.starRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                                <span className="text-xs text-fuchsia-700 ml-1 font-semibold">({review.starRating}/5)</span>
                                            </div>
                                        )}
                                        <p className="text-sm text-fuchsia-800 mb-3">{review.review}</p>
                                        <button
                                            onClick={() => handleDeleteReview(review.imdbID)}
                                            className="text-xs text-pink-600 hover:text-pink-700 font-semibold"
                                        >
                                            Delete Review
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}