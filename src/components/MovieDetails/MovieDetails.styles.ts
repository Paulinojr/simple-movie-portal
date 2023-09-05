import styled from "styled-components";

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

export { MovieDetailsContainer, MoviePoster, MovieTitle, MovieOverview };
