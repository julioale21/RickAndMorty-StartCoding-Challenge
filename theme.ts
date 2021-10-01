export interface ITheme {
  primaryDark: string;
  primaryLight: string;
  primaryHover: string;
  secondaryLight: string;
  secondaryDark: string;
  mobile: string;
  tablet: string;
  desktop: string;
  black: string;
  white: string;
}

export const theme: ITheme = {
  primaryDark: "#055052",
  primaryLight: "#53B8BB",
  primaryHover: "#003638",
  secondaryLight: "#FFF7AE",
  secondaryDark: "#F6D167",
  mobile: "576px",
  tablet: "768px",
  desktop: "1200px",
  white: "#ffffff",
  black: "#000000",
};
