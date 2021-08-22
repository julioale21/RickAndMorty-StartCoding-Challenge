import styled from "styled-components";
import { theme } from "../../theme";

export const VTitle = styled.h1`
  writing-mode: vertical-rl;
  font-size: 1rem;
  color: ${theme.secondaryDark};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media (min-width: ${theme.tablet}) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 400px;
  transform: rotate(-5deg);
`;
