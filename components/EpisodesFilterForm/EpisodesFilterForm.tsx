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

const EpisodesFilterForm: React.FC<Props> = ({ onFilterChange }) => {
  const [inputName, setInputName] = useState("");
  const [inputEpisode, setInputEpisode] = useState("");
  const [search, setSearch] = useState({});

  React.useMemo(() => {
    if (inputName.length > 3 || inputName.length === 0) {
      setSearch({ ...search, name: inputName });
    }
  }, [inputName]);

  React.useMemo(() => {
    if (inputEpisode.length > 3 || inputEpisode.length === 0) {
      setSearch({ ...search, episode: inputEpisode });
    }
  }, [inputEpisode]);

  React.useEffect(() => {
    onFilterChange(search);
  }, [search]);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };

  const handleEpisodeChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputEpisode(e.currentTarget.value);
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
        placeholder="Search episode"
        type="text"
        value={inputEpisode}
        onChange={handleEpisodeChange}
      />
      <Separator size="2rem" />
    </Form>
  );
};

export default EpisodesFilterForm;
