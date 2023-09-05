import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { Movie } from "../types/Movie";

export const MoviesContext = createContext<{
  movies: Movie[];
  setMovies: Dispatch<SetStateAction<Movie[]>>;
  handleSearch: (query: string) => void;
}>({
  movies: [],
  setMovies: () => {},
  handleSearch: () => {},
});

export const MoviesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = useCallback(async (query: string) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6f84d94abf6ee02052af90bf7f4a03b8&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, []);

  useEffect(() => {
    handleSearch("");
  }, [handleSearch]);

  return (
    <MoviesContext.Provider
      value={{ movies: movies, setMovies: setMovies, handleSearch }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
