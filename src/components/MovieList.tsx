import React from "react";
import styled from "styled-components";
import { Movie } from "../types/Movie";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    justify-content: flex-start;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const MovieItem = styled.div`
  width: 100%;
  margin: 10px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 48%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 30%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 23%;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  border-radius: 4px;
`;

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
