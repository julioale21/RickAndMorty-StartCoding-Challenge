import styled from "styled-components";
import { ITheme, theme } from "../../theme";
import { Text } from "../../styles/shared.styled";

export const LocationsContainer = styled.div`
  background-image: url("/rick-and-morty-07.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 1rem;
  padding-top: 100px;
  min-height: calc(100vh + 2rem);
  @media screen and (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export const LocationItem = styled.div`
  align-items: center;
  background-color: ${theme.primaryDark};
  box-shadow: 1px 1px 15px ${theme.primaryLight};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;

export const LocationDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 80%;
  margin: 0 auto;
`;

export const LocationName = styled(Text)`
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const LocationResidentsGrid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 0.5rem;
  margin: 0 auto;

  @media (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: ${theme.desktop}) {
    grid-template-columns: repeat(10, 1fr);
  }
`;

export const LocationResidentImage = styled.img`
  border-radius: 50%;
`;

export const VTitle = styled.h1`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1rem;
  color: ${theme.secondaryDark};
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
