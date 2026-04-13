import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import App from '../App'
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage'
import NotFoundPage from '../pages/NotFoundPage'
import { ReviewsPage } from '../pages/MovieReviewsPage'
import { AboutPage } from '../pages/AboutPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <App />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'movies', element: <MoviesPage /> },
          { path: 'movies/:imdbID', element: <MovieDetailsPage /> },
          { path: 'reviews', element: <ReviewsPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])
