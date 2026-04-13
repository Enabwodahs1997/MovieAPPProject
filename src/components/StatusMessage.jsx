export function StatusMessage({ isLoading, errorMessage, searchTerm, movieCount }) {
    const hasQuery = searchTerm.trim().length > 0;

    if (isLoading) {
        return (
            <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-4 shadow-sm">
                <p className="text-sky-900">Loading movies...</p>
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 shadow-sm">
                <p className="text-rose-700">{errorMessage}</p>
            </div>
        );
    }

    if (!hasQuery) {
        return (
            <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4 shadow-sm">
                <p className="text-violet-900">Type a movie title in the search box.</p>
            </div>
        );
    }

    if (movieCount === 0) {
        return (
            <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4 shadow-sm">
                <p className="text-violet-900">No movies found.</p>
            </div>
        );
    }

    return null;
}
