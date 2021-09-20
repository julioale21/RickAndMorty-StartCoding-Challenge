import styled from "styled-components";
import { Text } from "../styles/shared.styled";
import { theme } from "../theme";

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
