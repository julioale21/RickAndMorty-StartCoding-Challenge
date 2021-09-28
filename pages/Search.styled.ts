import styled from "styled-components";

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  width: 300px;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;
