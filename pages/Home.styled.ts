import styled from "styled-components";
import { ITheme, theme } from "../theme";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const FavoritesGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GridHome = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;
  margin: 0 auto;

  @media (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const HomeContainer = styled.div`
  background-image: url("/rick-and-morty-04.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 1rem;
  padding-top: 80px;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const NoResultsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonCharacters = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${theme.secondaryLight};
  background-color: ${theme.primaryDark};
  &:hover {
    background-color: ${theme.primaryLight};
  }
`;
