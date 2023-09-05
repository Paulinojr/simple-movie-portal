import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Movie } from "../types/Movie";

const FavoritesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const FavoriteItem = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
  }
`;

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
