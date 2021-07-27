import styled from "styled-components";
import { ITheme } from "../../theme";

export const Container = styled.div`
  // width: 100vw;
  // min-width: 100%;
`;

export const Grid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
`;

export const Title = styled.h1`
  text-align: center;
`;
