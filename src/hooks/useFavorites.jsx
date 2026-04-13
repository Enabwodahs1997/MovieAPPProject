import { useLocalStorage } from './useLocalStorage'

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('omdb-favorites', [])

  const toggleFavorite = (movie) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some((favorite) => favorite.imdbID === movie.imdbID)

      if (alreadyFavorite) {
        return currentFavorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
      }

      return [...currentFavorites, movie]
    })
  }

  return { favorites, toggleFavorite }
}
