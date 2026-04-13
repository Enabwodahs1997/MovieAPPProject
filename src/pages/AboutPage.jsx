export function AboutPage() {
    return (
        <section className="space-y-6 rounded-3xl border border-pink-200/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(232,121,249,0.15)] backdrop-blur-sm">
            <header>
                <h1 className="mb-2 text-3xl font-bold text-fuchsia-900">About Movie Explorer</h1>
                <p className="text-sm text-fuchsia-700">Your personal movie discovery platform</p>
            </header>

            <div className="space-y-4 text-fuchsia-800">
                <p>
                    Welcome to <span className="font-semibold text-fuchsia-900">Movie Explorer</span>, your personal movie discovery and review platform!
                </p>
                
                <p>
                    Our app, built with React and powered by the OMDb API, allows you to search for movies, save your favorites, and share your thoughts through reviews. Whether you're a casual movie watcher or a film enthusiast, Movie Explorer helps you organize and remember the movies you love.
                </p>

                <div className="mt-6 pt-4 border-t border-pink-200">
                    <h2 className="mb-3 text-xl font-semibold text-fuchsia-900">Features</h2>
                    <ul className="space-y-2 list-inside list-disc text-fuchsia-800">
                        <li>Search movies by title</li>
                        <li>Save favorite movies for quick access</li>
                        <li>View detailed information about each movie</li>
                        <li>Write and read reviews</li>
                        <li>Persistent storage of your favorites and reviews</li>
                    </ul>
                </div>

                <div className="pt-4 border-t border-pink-200">
                    <h2 className="mb-3 text-xl font-semibold text-fuchsia-900">How to Use</h2>
                    <ol className="space-y-2 list-inside list-decimal text-fuchsia-800">
                        <li>Head to the <span className="font-semibold">Movies</span> page to search for films</li>
                        <li>Click on a movie to view its details</li>
                        <li>Add movies to your favorites with the heart button</li>
                        <li>Visit the <span className="font-semibold">Reviews</span> page to share your thoughts</li>
                    </ol>
                </div>

                <p className="mt-6 pt-4 border-t border-pink-200 text-sm text-fuchsia-700">
                    Made with passion for movie lovers everywhere. Happy watching! 🎬
                </p>
            </div>
        </section>
    );
}