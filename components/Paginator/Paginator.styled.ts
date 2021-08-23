import styled from "styled-components";
import { theme } from "../../theme";

export const Page = styled.div`
  border: 1px solid ${theme.primaryDark};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button`
  color: ${theme.secondaryLight};
  background-color: ${theme.secondaryDark};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.8rem;
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
