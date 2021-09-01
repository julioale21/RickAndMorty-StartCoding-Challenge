import styled from "styled-components";
import { theme } from "../../theme";
import { Text } from "../../styles/shared.styled";

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

export const CharacterTitle = styled(Text)`
  font-size: 3rem;
  font-weight: bolder;
  text-shadow: 2px 2px 2px white;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 5rem;
  }
`;

export const CharacterContainer = styled.div`
  background-image: url("/rick_and_morty-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 1rem;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 80%;
  z-index: 1;
  border: 5px solid white;
`;

export const InfoContainer = styled.div`
  align-items: center;
  background: rgba(0, 255, 255, 0.3);
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
  padding-top: 1rem;
  box-shadow: 2px 2px 5px ${theme.primaryLight};
`;
