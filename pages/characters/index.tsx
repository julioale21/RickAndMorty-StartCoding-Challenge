import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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
import Character from "../../models/Character";

const Characters = () => {
  const { data } = useQuery(FETCH_CHARACTERS);
  const router = useRouter();

  if (!data) return "Loading ...";

  const handleSelectedCharacter = (character: Character) => {
    router.push("/characters/" + character.id);
  };

  return (
    <CharacterContainer>
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Characters
      </Text>
      <Grid>
        {data.characters.results.map((item) => {
          return (
            <GridItem key={item.id}>
              <Image alt="image" src={item.image} />
              <InfoContainer>
                <Text
                  fontSize="1.2rem"
                  fontWeight="bold"
                  marginTop="3rem"
                  textShadow="1px 1px 1px white"
                >
                  {item.name}
                </Text>
                <Text color="white" margin="0">
                  {item.species}
                </Text>
                <Button primary onClick={() => handleSelectedCharacter(item)}>
                  View
                </Button>
              </InfoContainer>
            </GridItem>
          );
        })}
      </Grid>
    </CharacterContainer>
  );
};

export default Characters;
