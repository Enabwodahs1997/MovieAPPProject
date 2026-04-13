import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useMovies } from './hooks/useMovies'
import { useFavorites } from './hooks/useFavorites'

function App() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useLocalStorage('omdb-last-search', '')
  const { favorites, toggleFavorite } = useFavorites()
  const { movies, isLoading, errorMessage } = useMovies(searchTerm)

  const handleSearchSubmit = () => {
    navigate('/movies')
  }

  const handleOpenDetails = (movie) => {
    navigate(`/movies/${movie.imdbID}`)
  }

  const appContext = {
    favorites,
    searchTerm,
    movies,
    isLoading,
    errorMessage,
    onToggleFavorite: toggleFavorite,
    onOpenDetails: handleOpenDetails,
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSubmitSearch={handleSearchSubmit}
      />
      <nav className="mb-8 flex gap-3">
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 font-semibold text-white transition ${
              isActive ? 'bg-fuchsia-500 shadow-md shadow-fuchsia-300/50' : 'bg-fuchsia-300 hover:bg-fuchsia-400'
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 font-semibold text-white transition ${
              isActive ? 'bg-cyan-500 shadow-md shadow-cyan-300/50' : 'bg-cyan-300 hover:bg-cyan-400'
            }`
          }
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 font-semibold text-white transition ${
              isActive ? 'bg-green-500 shadow-md shadow-green-300/50' : 'bg-green-300 hover:bg-green-400'
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-full px-4 py-2 font-semibold text-white transition ${
              isActive ? 'bg-pink-500 shadow-md shadow-pink-300/50' : 'bg-pink-300 hover:bg-pink-400'
            }`
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet context={appContext} />
    </main>
  )
}

export default App
