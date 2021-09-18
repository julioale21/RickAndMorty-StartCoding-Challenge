import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AvatarContainer,
  Image,
  ImageContainer,
  Line,
  MainContainer,
  VTitle,
} from "./Character.styled";
import { HStack, Text, VStack } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchCharacterById } from "../../redux/actions/characterActions";

const CharacterDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedCharacter: character, isLoading } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer,
  );
  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchCharacterById(id as string));
  }, [dispatch, id]);

  // let character: Character;

  // const { loading, data } = useQuery(FETCH_CHARACTER_BY_ID, {
  //   variables: {
  //     id,
  //   },
  // });

  // if (!loading) {
  //   character = data.character;
  // }

  if (isLoading) return "Loading...";

  if (!character) return null;

  return (
    <MainContainer>
      <VStack>
        <HStack maxWidth="80%">
          <img alt="" src="/rickandmorty.png" width="100%" />
        </HStack>
        <HStack>
          <VTitle>Character</VTitle>
          <Text
            display="inline"
            fontSize="3rem"
            fontWeight="bold"
            textShadow={`2px 2px 2px ${theme.secondaryDark}`}
          >
            {character.name}
          </Text>
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
        <ImageContainer>
          <Image alt={character.name} src={character.image} />
          <AvatarContainer>
            <Line />
            <Text>{character.name}</Text>
            <Line />
          </AvatarContainer>
        </ImageContainer>
      </HStack>
    </MainContainer>
  );
};

export default CharacterDetail;
