import styled from "styled-components";
import { ITheme, theme } from "../theme";

export const Grid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const GridItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

interface IText {
  color?: string;
  display?: "block" | "flex" | "inline" | "inline-flex" | "inline-block" | "none";
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingTop?: string;
  shadow?: string;
  textShadow?: string;
  textAlign?: "center" | "start" | "end";
  width?: string;
}

export const Text = styled.p<IText>`
  color: ${(props) => props.color || null};
  display: ${(props) => props.display || null};
  font-size: ${(props) => props.fontSize || null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${(props) => props.margin || 0};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  margin-top: ${(props) => props.marginTop || null};
  padding: ${(props) => props.padding || 0};
  padding-bottom: ${(props) => props.paddingBottom || null};
  padding-left: ${(props) => props.paddingLeft || null};
  padding-right: ${(props) => props.paddingRight || null};
  padding-top: ${(props) => props.paddingTop || null};
  shadow: ${(props) => props.shadow || null};
  text-align: ${(props) => props.textAlign || "center"};
  text-shadow: ${(props) => props.textShadow || null};
  width: ${(props) => props.textShadow || "auto"};
`;

interface IStack {
  direction?: "row" | "column";
  alignItems?: "flex-start" | "center" | "flex-end" | "space-between" | "space-aroud";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-aroud";
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  maxWidth?: string;
}

export const Stack = styled.div<IStack>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.margin || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginLeft || null};
  margin-top: ${(props) => props.marginTop || null};
  max-width: ${(props) => props.maxWidth || null};
`;

export const HStack = styled(Stack)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
`;

export const VStack = styled(Stack)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
