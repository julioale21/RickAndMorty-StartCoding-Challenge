import styled from "styled-components";

interface IText {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  textShadow?: string;
  textAlign?: "center" | "start" | "end";
}

export const Text = styled.p<IText>`
  color: ${(props) => props.color || null};
  font-size: ${(props) => props.fontSize || null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${(props) => props.margin || 0};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
  margin-top: ${(props) => props.marginTop || null};
  text-align: ${(props) => props.textAlign || "center"};
  text-shadow: ${(props) => props.textShadow || null};
  width: 100%;
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
