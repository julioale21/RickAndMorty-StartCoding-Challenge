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
import { BasicButton, DeleteButton, HStack, Text, VStack } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchCharacterById } from "../../redux/actions/characterActions";
import {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
} from "../../redux/actions/favoritesActions";
import Character from "../../models/Character";
import Loading from "../../components/Loading/Loading";
import { NoResultsContainer } from "../Search.styled";
import { Layout } from "../../components";

const CharacterDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedCharacter: character, isLoadingCharacters } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer,
  );

  const { favorites } = useSelector((state: RootStateOrAny) => state.favoritesReducer);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(fetchCharacterById(id as string));

    return;
  }, [dispatch, id]);

  const exists = React.useMemo(() => {
    if (character) {
      return favorites.filter((item: Character) => item.id == character.id).length > 0;
    }

    return false;
  }, [favorites, character]);

  const handleSelected = () => {
    dispatch(fetchFavorites());
    dispatch(addToFavorites(character));
    router.push("/characters");
  };

  const removeFavorite = () => {
    dispatch(removeFromFavorites(character));
  };

  if (isLoadingCharacters) return <Loading />;

  return (
    <Layout>
      <MainContainer>
        {character ? (
          <>
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

              {!exists ? (
                <BasicButton onClick={handleSelected}>Add</BasicButton>
              ) : (
                <>
                  <Text color="red" marginTop="1rem">
                    Already in favorites
                  </Text>
                  <DeleteButton onClick={removeFavorite}>Remove</DeleteButton>
                </>
              )}
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
          </>
        ) : (
          <NoResultsContainer>
            <Text textAlign="center">No character found</Text>
          </NoResultsContainer>
        )}
      </MainContainer>
    </Layout>
  );
};

export default CharacterDetail;
