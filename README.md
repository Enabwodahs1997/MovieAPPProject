# MovieAPPProject

A React-based movie application built with Vite that allows users to browse, search, view details, and manage their favorite movies.

## Features

- **Movie Browsing**: Browse and explore a catalog of movies
- **Search Functionality**: Search for movies by title or keywords
- **Movie Details**: View comprehensive details about individual movies
- **Movie Reviews**: Read and write reviews for movies
- **Favorites Management**: Save and manage your favorite movies with local storage persistence
- **Responsive Design**: Mobile-friendly interface
- **Routing**: Multi-page navigation with React Router

## Tech Stack

- **React** - UI library
- **Vite** - Modern build tool and dev server
- **React Router** - Client-side routing
- **CSS** - Styling
- **ESLint** - Code quality

## Project Structure

```
src/
├── pages/           # Page components (Home, Movies, Details, Reviews, About)
├── components/      # Reusable UI components (MovieCard, SearchBar, etc.)
├── hooks/          # Custom React hooks (useFavorites, useMovies, useMovieDetails, etc.)
├── layouts/        # Layout components
├── router/         # Route configuration
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Enabwodahs1997/MovieAPPProject.git
cd MovieAPPProject
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is part of a school assignment.
