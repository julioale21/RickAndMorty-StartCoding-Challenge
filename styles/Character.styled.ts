import styled from "styled-components";
import { theme } from "../theme";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 250px;
  margin-top: 2em;
  transform: rotate(-5deg);
  border: 5px solid ${theme.primaryLight};

  @media (min-width: ${theme.desktop}) {
    width: 400px;
    margin-top: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content-center;
`;

export const Line = styled.div`
  width: 100px;
  border: 1px solid ${theme.primaryLight};
  flex: 1;
  margin: 0 1em;

  @media (min-width: ${theme.desktop}) {
    width: 150px;
  }
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

export const VTitle = styled.h1`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1rem;
  color: ${theme.secondaryDark};
`;
