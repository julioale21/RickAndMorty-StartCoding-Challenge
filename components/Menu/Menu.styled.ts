import styled from "styled-components";
import { ITheme, theme } from "../../theme";

export const StyledMenu = styled.nav<{ theme: ITheme; open: boolean }>`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: calc(100vh + 2rem);
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: absolute;
  text-align: left;
  top: -2rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${theme.mobile}) {
    width: 100vw;
    height: 100vh;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme.secondaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${theme.primaryHover};
    }
  }
`;
