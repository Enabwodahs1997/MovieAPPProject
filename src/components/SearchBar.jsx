export default function SearchBar({ searchTerm, onSearchTermChange, onSubmitSearch }) {
    const handleInputChange = (event) => {
        onSearchTermChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitSearch();
    };

    return (
        <form className="search-bar control-card mb-6 rounded-3xl border border-pink-200/80 bg-white/80 p-5 shadow-[0_12px_28px_rgba(232,121,249,0.14)] backdrop-blur-sm" onSubmit={handleSubmit}>
            <label className="text-fuchsia-900" htmlFor="global-search" style={{ fontWeight: 'bold' }}>
                Find your new favorite movies now!
            </label>
            <div className="mt-2 flex gap-2">
                <input
                    id="global-search"
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="w-full rounded-full border border-pink-300 bg-pink-50/70 px-4 py-2 text-fuchsia-900 placeholder:text-fuchsia-400 focus:border-fuchsia-400 focus:outline-none"
                />
                <button
                    type="submit"
                    className="rounded-full bg-fuchsia-500 px-5 py-2 font-semibold text-white transition hover:bg-fuchsia-600"
                >
                    Search
                </button>
            </div>
        </form>
    );
}