import styled from "styled-components";
import { theme } from "../../theme";

export const LocationsContainer = styled.div`
  background-image: url("/rick-and-morty-02.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
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
