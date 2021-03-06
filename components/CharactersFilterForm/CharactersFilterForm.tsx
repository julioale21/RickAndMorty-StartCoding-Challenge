/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  RadioButton,
  RadioButtonContainer,
  RadioButtonLabel,
  SearchInput,
  SearchInputContainer,
} from "../../styles/Search.styled";

interface Props {
  onFilterChange: (filter: object) => void;
}

const CharactersFilterForm: React.FC<Props> = ({ onFilterChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState({});

  React.useMemo(() => {
    if (inputValue.length > 3 || inputValue.length === 0) {
      setSearch({ ...search, name: inputValue });
    }
  }, [inputValue]);

  React.useEffect(() => {
    onFilterChange(search);
  }, [search]);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleRadioChange = (e: any) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SearchInputContainer>
        <SearchInput
          placeholder="Search name"
          type="text"
          value={inputValue}
          onChange={handleSearchChange}
        />
      </SearchInputContainer>

      <RadioButtonContainer>
        <RadioButtonLabel>
          <RadioButton
            id="status"
            name="status"
            type="radio"
            value="Alive"
            onChange={handleRadioChange}
          />
          Alive
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            id="status"
            name="status"
            type="radio"
            value="Dead"
            onChange={handleRadioChange}
          />
          Dead
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            defaultChecked
            id="status"
            name="status"
            type="radio"
            value=""
            onChange={handleRadioChange}
          />
          All
        </RadioButtonLabel>
      </RadioButtonContainer>
      <RadioButtonContainer>
        <RadioButtonLabel>
          <RadioButton
            id="species"
            name="species"
            type="radio"
            value="Human"
            onChange={handleRadioChange}
          />
          Human
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            id="species"
            name="species"
            type="radio"
            value="Alien"
            onChange={handleRadioChange}
          />
          Alien
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            id="species"
            name="species"
            type="radio"
            value="Animal"
            onChange={handleRadioChange}
          />
          Animal
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            defaultChecked
            id="species"
            name="species"
            type="radio"
            value=""
            onChange={handleRadioChange}
          />
          All
        </RadioButtonLabel>
      </RadioButtonContainer>
    </>
  );
};

export default CharactersFilterForm;
