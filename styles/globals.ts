import { ITheme } from "./../theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    width: 100%;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

  #__next {
    width: 100%;
    border: 0;
    padding: 0;
    font-size: 16px;
  }
  `;
