import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './assets/css/style.css'
import HomePage from './pages/home'
import MovieDetailPage from './pages/movieDetail'
import MoviePage from './pages/movie'
import ErrorPage from './pages/404'
import TrailerPage from './pages/trailer'
import SearchTVShowsPage from './pages/searchTVShows'
import TVShowsPage from './pages/tv-shows'
import TVDetail from './pages/tvDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie-detail/:id/:title",
    element: <MovieDetailPage />,
  },
  {
    path: "/movie-video/:id/:title",
    element: <TrailerPage />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },
  {
    path: "/tv-shows",
    element: <TVShowsPage />,
  },
  {
    path: "/search-tv-shows",
    element: <SearchTVShowsPage />
  },
  {
    path: "/tv-detail/:id/:title",
    element: <TVDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
