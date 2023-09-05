import { Movie } from "../types/Movie";

export const addMovieToFavorites = (movie: Movie) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites.push(movie);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
