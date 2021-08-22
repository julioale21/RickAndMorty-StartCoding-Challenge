import styled from "styled-components";
import { ITheme, theme } from "../../theme";

interface IButtonProps {
  primary?: boolean;
}

export const Button = styled.button<IButtonProps>`
  background: ${(props) => (props.primary ? `${theme.primaryLight}` : "white")};
  border-radius: 10px;
  border: 2px solid ${theme.primaryLight};
  color: ${(props) => (props.primary ? "white" : `${theme.primaryLight}`)};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  min-width: 100px;
  padding: 0.3rem 1rem;
  :hover {
    background-color: ${theme.primaryHover};
  }
`;

export const CharacterContainer = styled.div`
  background-image: url("/rick_and_morty-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 4rem;
  padding-top: 80px;
`;

export const Grid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;

  @media (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const GridItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 70%;
  z-index: 1;
  border: 5px solid white;
`;

export const InfoContainer = styled.div`
  align-items: center;
  background: rgba(0, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
  margin-top: -3rem;
`;
