import styled from "styled-components";
import { theme } from "../../theme";

export const VTitle = styled.h1`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1rem;
  color: ${theme.secondaryDark};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${theme.tablet}) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 250px;
  margin-top: 2em;
  transform: rotate(-5deg);

  @media (min-width: ${theme.desktop}) {
    width: 400px;
    margin-top: 0;
  }
`;
