import React, { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import { FavoritesListContainer, FavoriteItem } from "./FavoritesList.styles";

const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <FavoritesListContainer>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((movie) => (
          <FavoriteItem key={movie.id}>
            <p>{movie.title}</p>
          </FavoriteItem>
        ))
      )}
    </FavoritesListContainer>
  );
};

export default FavoritesList;
