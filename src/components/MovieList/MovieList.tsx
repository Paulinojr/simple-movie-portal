import React from "react";
import { Movie } from "../../types/Movie";
import { MovieListContainer, MovieItem, MoviePoster } from "./MovieList.styles";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.id}</p>
        </MovieItem>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
