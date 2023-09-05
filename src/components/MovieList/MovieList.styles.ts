import styled from "styled-components";

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
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

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

export { MovieListContainer, MovieItem, MoviePoster };
