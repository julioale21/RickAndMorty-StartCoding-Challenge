import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "../../apollo/queries/characters";
import { Title } from "./styles";

const Characters = () => {
  const { data } = useQuery(FETCH_CHARACTERS);

  if (!data) return "Loading ...";

  return (
    <div>
      <Title>Characters</Title>
    </div>
  );
};

export default Characters;
