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
  padding: 0.5rem 1rem;
  :hover {
    background-color: ${theme.primaryHover};
  }
`;

export const Container = styled.div``;

export const Grid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;

  @media (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridItem = styled.div`
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const Title = styled.h1`
  text-align: center;
`;
