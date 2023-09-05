import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  const [movies, setMovies] = React.useState([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6f84d94abf6ee02052af90bf7f4a03b8&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <NavigationBar />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetails movieId={1858} />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
