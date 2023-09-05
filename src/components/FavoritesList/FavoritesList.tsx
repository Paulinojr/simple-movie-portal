import React, { useEffect, useState } from "react";
import {
  FavoritesListContainer,
  FavoriteItem,
  FavoriteItemInfo,
  FavoriteItemControls,
  Button,
} from "./FavoritesList.styles";
import { Movie } from "../../types/Movie";

const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const moveItem = (index: number, direction: "up" | "down") => {
    const newFavorites = [...favorites];
    if (direction === "up" && index > 0) {
      [newFavorites[index], newFavorites[index - 1]] = [
        newFavorites[index - 1],
        newFavorites[index],
      ];
    } else if (direction === "down" && index < newFavorites.length - 1) {
      [newFavorites[index], newFavorites[index + 1]] = [
        newFavorites[index + 1],
        newFavorites[index],
      ];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <FavoritesListContainer>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((movie, index) => (
          <FavoriteItem key={movie.id}>
            <FavoriteItemInfo>
              <p>{movie.title}</p>
            </FavoriteItemInfo>
            <FavoriteItemControls>
              <Button onClick={() => moveItem(index, "up")}>Move Up</Button>
              <Button onClick={() => moveItem(index, "down")}>Move Down</Button>
            </FavoriteItemControls>
          </FavoriteItem>
        ))
      )}
    </FavoritesListContainer>
  );
};

export default FavoritesList;
