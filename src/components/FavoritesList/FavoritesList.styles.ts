import styled from "styled-components";

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

export { FavoritesListContainer, FavoriteItem };
