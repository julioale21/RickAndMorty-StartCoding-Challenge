import styled from "styled-components";

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CharacterImage = styled.img`
  border-radius: 1rem;
  max-width: 200px;
`;

export const FavoritesContainer = styled.div`
  padding-top: 4rem;
  display: flex:
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HomeContainer = styled.div`
  background-image: url("/rick-and-morty-04.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 1rem;
  min-height: calc(100vh + 2rem);
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`;
