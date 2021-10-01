import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CharacterContainer, Image, InfoContainer } from "./Characters.styled";
import { NoResultsContainer, SearchInput, SearchInputContainer } from "../Search.styled";
import { BasicButton, Container, Grid, GridItem, Separator } from "../../styles/shared.styled";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchCharacters } from "../../redux/actions/characterActions";
import { getPageNumber } from "../../utils";
import { Layout, Paginator } from "../../components";
import { Text, Title } from "../../styles/shared.styled";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Character from "../../models/Character";
import { fetchFavorites } from "../../redux/actions/favoritesActions";

const Characters = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { characters, info, isLoadingCharacters } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer,
  );
  const { favorites } = useSelector((state: RootStateOrAny) => state.favoritesReducer);
  const [page, setPage] = useState(getPageNumber({ ...info }));
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchFavorites());
    dispatch(fetchCharacters(page, search));
  }, [dispatch, page, search]);

  const handleSelectedCharacter = (character: Character) => {
    router.push("/characters/" + character.id);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  React.useMemo(() => {
    if (inputValue.length > 3 || inputValue.length === 0) {
      setSearch(inputValue);
    }
  }, [inputValue]);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const isAlreadyInFavorites = (character: Character) => {
    return favorites.filter((item: Character) => item.id == character.id).length > 0;
  };

  return (
    <Layout>
      <CharacterContainer>
        <Container paddingTop="5em">
          <Title marginBottom="2rem">Characters</Title>
          <SearchInputContainer>
            <SearchInput
              placeholder="Search name"
              type="text"
              value={inputValue}
              onChange={handleSearchChange}
            />
          </SearchInputContainer>

          {isLoadingCharacters && <ListSkeleton />}

          {characters.length && !isLoadingCharacters ? (
            <>
              <Grid>
                {characters.map((character: Character) => {
                  return (
                    <GridItem key={character.id}>
                      <InfoContainer>
                        <Image alt="image" src={character.image} />
                        <Separator size="15px" />
                        <Text fontSize="1.2rem" fontWeight="bold" textShadow="1px 1px 1px white">
                          {character.name}
                        </Text>

                        <Text color="white" margin="0" textShadow="1px 1px 1px">
                          {character.species}
                        </Text>
                        {isAlreadyInFavorites(character) ? (
                          <Text color="red" marginBottom="1.5rem" marginTop="1rem">
                            Already in favorites
                          </Text>
                        ) : (
                          <BasicButton primary onClick={() => handleSelectedCharacter(character)}>
                            View
                          </BasicButton>
                        )}
                      </InfoContainer>
                    </GridItem>
                  );
                })}
              </Grid>
              <Paginator
                handleNext={handleNextPage}
                handlePrev={handlePrevPage}
                next={info.next}
                page={page}
                prev={info.prev}
              />
            </>
          ) : (
            <NoResultsContainer>
              <Text color="white">No results found</Text>
            </NoResultsContainer>
          )}
        </Container>
      </CharacterContainer>
    </Layout>
  );
};

export default Characters;
