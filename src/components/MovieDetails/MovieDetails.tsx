import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Movie as MovieDetailsType } from "../../types/Movie";
import { addMovieToFavorites } from "../../utils/favoriteUtils";
import {
  MovieDetailsContainer,
  MoviePoster,
  MovieTitle,
  MovieOverview,
} from "./MovieDetails.styles";

interface MovieDetailsProps {
  movieId?: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = parseInt(id || "0", 10);

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
