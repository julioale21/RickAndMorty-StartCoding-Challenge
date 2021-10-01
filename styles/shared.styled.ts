import styled from "styled-components";
import { ITheme, theme } from "../theme";

interface IButtonProps {
  primary?: boolean;
}

export const BasicButton = styled.button<IButtonProps>`
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

export const DeleteButton = styled.button<IButtonProps>`
  background: ${(props) => (props.primary ? `${theme.primaryLight}` : "white")};
  border-radius: 10px;
  border: 2px solid red;
  color: ${(props) => (props.primary ? "white" : `red`)};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  min-width: 100px;
  padding: 0.3rem 1rem;
  :hover {
    background-color: ${theme.primaryHover};
  }
`;

interface IMargins {
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
}
interface IPaddings {
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingTop?: string;
}

export const Container = styled.div<IPaddings>`
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${(props) => props.padding || 0};
  padding-bottom: ${(props) => props.paddingBottom || null};
  padding-left: ${(props) => props.paddingLeft || null};
  padding-right: ${(props) => props.paddingRight || null};
  padding-top: ${(props) => props.paddingTop || null};

  @media screen and (min-width: 1200px) {
    max-width: 80%;
  }
`;

interface IDivider {
  color?: string;
  weight?: string;
}
export const HDivider = styled.div<IDivider>`
  width: 100%;
  border: ${(props) => `${props.weight || "1px"} solid ${props.color || theme.primaryDark}`};
`;

export const Grid = styled.div<{ theme: ITheme }>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: minmax(100px, auto);
  padding: 1rem;
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

interface IText extends IMargins, IPaddings {
  color?: string;
  display?: "block" | "flex" | "inline" | "inline-flex" | "inline-block" | "none";
  fontSize?: string;
  fontWeight?: string;
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

export const Title = styled(Text)`
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

interface IStack extends IMargins {
  direction?: "row" | "column";
  alignItems?: "flex-start" | "center" | "flex-end" | "space-between" | "space-aroud";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-aroud";
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
  width: 100%;
`;

export const VStack = styled(Stack)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

interface ISeparator {
  size: string;
  isHorizontal?: boolean;
}
export const Separator = styled.div<ISeparator>`
  width: ${(props) => (props.isHorizontal ? props.size : 0)};
  height: ${(props) => (!props.isHorizontal ? props.size : 0)};
`;
