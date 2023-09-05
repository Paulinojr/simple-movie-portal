import styled from "styled-components";

const FavoritesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const FavoriteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FavoriteItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FavoriteItemControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 5px;
`;

export {
  FavoritesListContainer,
  FavoriteItem,
  FavoriteItemInfo,
  FavoriteItemControls,
  Button,
};
