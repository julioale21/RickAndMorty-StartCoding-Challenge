import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "../../apollo/queries/characters";
import {
  Button,
  CharacterContainer,
  Grid,
  GridItem,
  Image,
  InfoContainer,
} from "./Characters.styled";

import { Text } from "../../styles/shared.styled";

const Characters = () => {
  const { data } = useQuery(FETCH_CHARACTERS);

  if (!data) return "Loading ...";

  return (
    <CharacterContainer>
      <Text fontSize="4.5rem" fontWeight="bolder" textShadow="2px 2px 2px white">
        Characters
      </Text>
      <Grid>
        {data.characters.results.map((item) => {
          return (
            <GridItem key={item.id}>
              <Image alt="image" src={item.image} />
              <InfoContainer>
                <Text fontSize="1.7rem" fontWeight="bold" marginTop="3rem">
                  {item.name}
                </Text>
                <Text fontSize="1.2rem" margin="0">
                  {item.species}
                </Text>
                <Button primary>View</Button>
              </InfoContainer>
            </GridItem>
          );
        })}
      </Grid>
    </CharacterContainer>
  );
};

export default Characters;
