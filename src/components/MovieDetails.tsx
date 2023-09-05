import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import { Movie as MovieDetailsType } from "../types/Movie";
import { addMovieToFavorites } from "../utils/favoriteUtils";

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;

const MoviePoster = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
`;

const MovieTitle = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const MovieOverview = styled.p`
  max-width: 600px;
  text-align: center;
  padding: 0 10px;
`;

interface MovieDetailsProps {
  movieId: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get<MovieDetailsType>(`/movie/${movieId}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <p>{movieDetails.release_date}</p>
      <MovieOverview>{movieDetails.overview}</MovieOverview>
      <button onClick={() => addMovieToFavorites(movieDetails)}>
        Add to Favorites
      </button>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
