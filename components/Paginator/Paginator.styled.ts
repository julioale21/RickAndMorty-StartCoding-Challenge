import styled from "styled-components";
import { theme } from "../../theme";

export const Page = styled.div`
  border: 1px solid ${theme.primaryDark};
  color: ${theme.white};
  border-radius: 50%;
  font-weight: bold;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button`
  background-color: ${theme.primaryDark};
  border-radius: 50%;
  border: none;
  color: ${theme.white};
  cursor: pointer;
  font-size: 0.8rem;
  height: 40px;
  width: 40px;
`;

export const PageText = styled.p`
  margin: 0;
  color: ${theme.primaryDark};
  font-weight: bolder;
`;

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
`;
