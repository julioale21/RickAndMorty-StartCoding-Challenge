/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  RadioButtonContainer,
  RadioButtonLabel,
  SearchInput,
  SearchInputContainer,
} from "../../pages/Search.styled";

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
    <div>
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
          <input
            id="status"
            name="status"
            type="radio"
            value="Alive"
            onChange={handleRadioChange}
          />
          Alive
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input id="status" name="status" type="radio" value="Dead" onChange={handleRadioChange} />
          Dead
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input
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
          <input
            id="species"
            name="species"
            type="radio"
            value="Human"
            onChange={handleRadioChange}
          />
          Human
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input
            id="species"
            name="species"
            type="radio"
            value="Alien"
            onChange={handleRadioChange}
          />
          Alien
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input
            id="species"
            name="species"
            type="radio"
            value="Animal"
            onChange={handleRadioChange}
          />
          Animal
        </RadioButtonLabel>
        <RadioButtonLabel>
          <input
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
    </div>
  );
};

export default CharactersFilterForm;
