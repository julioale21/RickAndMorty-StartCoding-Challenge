/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import styled from "styled-components";
import { SearchInput } from "../../styles/Search.styled";
import { Separator } from "../../styles/shared.styled";

const Form = styled.div`
  with: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  onFilterChange: (filter: object) => void;
}

const LocationsFilterForm: React.FC<Props> = ({ onFilterChange }) => {
  const [inputName, setInputName] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputDimension, setInputDimension] = useState("");
  const [search, setSearch] = useState({});

  React.useMemo(() => {
    if (inputName.length > 3 || inputName.length === 0) {
      setSearch({ ...search, name: inputName });
    }
  }, [inputName]);

  React.useMemo(() => {
    if (inputType.length > 3 || inputType.length === 0) {
      setSearch({ ...search, type: inputType });
    }
  }, [inputType]);

  React.useMemo(() => {
    if (inputDimension.length > 3 || inputDimension.length === 0) {
      setSearch({ ...search, dimension: inputDimension });
    }
  }, [inputDimension]);

  React.useEffect(() => {
    onFilterChange(search);
  }, [search]);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };

  const handleTypeChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputType(e.currentTarget.value);
  };

  const handleDimensionChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputDimension(e.currentTarget.value);
  };

  return (
    <Form>
      <SearchInput
        placeholder="Search name"
        type="text"
        value={inputName}
        onChange={handleNameChange}
      />
      <Separator size="1rem" />
      <SearchInput
        placeholder="Search type"
        type="text"
        value={inputType}
        onChange={handleTypeChange}
      />
      <Separator size="1rem" />
      <SearchInput
        placeholder="Search dimension"
        type="text"
        value={inputDimension}
        onChange={handleDimensionChange}
      />
      <Separator size="2rem" />
    </Form>
  );
};

export default LocationsFilterForm;
