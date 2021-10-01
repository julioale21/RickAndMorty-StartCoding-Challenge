import { theme } from "./../theme";
import styled from "styled-components";

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const SearchInput = styled.input`
  padding: 0.7rem 1rem;
  width: 250px;
  color: gray;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  :focus {
    outline: 2px solid ${theme.primaryLight};
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const RadioButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RadioButtonLabel = styled.label`
  color: ${theme.secondaryLight};
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
`;

export const RadioButton = styled.input`
  &:checked {
    background-color: red;
  }
`;
