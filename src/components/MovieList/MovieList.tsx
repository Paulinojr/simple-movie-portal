import React from "react";
import { MovieListContainer, MovieItem, MoviePoster } from "./MovieList.styles";
import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import SearchBar from "../SearchBar/SearchBar";

const MovieList: React.FC = () => {
  const { movies, setMovies } = useMovies();

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
    <>
      <SearchBar onSearch={handleSearch} />

      <MovieListContainer>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </Link>
          </MovieItem>
        ))}
      </MovieListContainer>
    </>
  );
};

export default MovieList;
