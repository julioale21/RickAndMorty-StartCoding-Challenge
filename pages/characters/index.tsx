import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "../../apollo/queries/characters";

const Characters = () => {
  const { data } = useQuery(FETCH_CHARACTERS);

  if (!data) return "Loading ...";

  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};

export default Characters;
