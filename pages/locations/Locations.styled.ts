import styled from "styled-components";
import { theme } from "../../theme";

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
  background-color: ${theme.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const LocationDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-item: center;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 80%;
  margin: 0 auto;
`;
