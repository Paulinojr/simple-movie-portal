import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 70%;
    margin-bottom: 0;
  }
`;

const SearchButton = styled.button`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 20%;
  }
`;

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
