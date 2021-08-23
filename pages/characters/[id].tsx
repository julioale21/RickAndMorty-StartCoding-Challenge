import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Image, MainContainer, VTitle } from "./Character.styled";
import { HStack, Text, VStack } from "../../styles/shared.styled";
import { theme } from "../../theme";
import Character from "../../models/Character";
import { FETCH_CHARACTER_BY_ID } from "../../apollo/queries/characters";

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  let character: Character;

  const { loading, data } = useQuery(FETCH_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  if (!loading) {
    character = data.character;
  }

  if (loading) return "Loading...";

  return (
    <MainContainer>
      <VStack>
        <HStack>
          <h1>{character.name}</h1>
          <VTitle>Character</VTitle>
        </HStack>
        <VStack>
          <Text color={theme.secondaryDark} fontSize="1.2rem" fontWeight="bold">
            Origin
          </Text>
          <Text>{character.origin.name}</Text>
        </VStack>

        <VStack marginTop="1rem">
          <Text color={theme.secondaryDark} fontSize="1.2rem" fontWeight="bold">
            Specie
          </Text>
          <Text>{character.species}</Text>
        </VStack>

        <VStack marginTop="1rem">
          <Text color={theme.secondaryDark} fontSize="1.2rem" fontWeight="bold">
            Gender
          </Text>
          <Text>{character.gender}</Text>
        </VStack>

        <VStack marginTop="1rem">
          <Text color={theme.secondaryDark} fontSize="1.2rem" fontWeight="bold">
            Status
          </Text>
          <Text>{character.status}</Text>
        </VStack>
      </VStack>
      <HStack>
        <Image alt={character.name} src={character.image} />
      </HStack>
    </MainContainer>
  );
};

export default CharacterDetail;
