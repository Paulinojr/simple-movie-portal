import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { MoviesProvider } from "./context/MoviesContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MoviesProvider>
        <GlobalStyles />
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </Router>
      </MoviesProvider>
    </ThemeProvider>
  );
}

export default App;
