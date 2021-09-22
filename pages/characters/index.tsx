import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, CharacterContainer, Image, InfoContainer } from "./Characters.styled";
import { Container, Grid, GridItem, Separator } from "../../styles/shared.styled";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchCharacters } from "../../redux/actions/characterActions";
import { getPageNumber } from "../../utils";
import { Paginator } from "../../components";
import { Text, Title } from "../../styles/shared.styled";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Character from "../../models/Character";

const Characters = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { characters, info, isLoading } = useSelector(
    (state: RootStateOrAny) => state.charactersReducer,
  );
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  const handleSelectedCharacter = (character: Character) => {
    router.push("/characters/" + character.id);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <CharacterContainer>
      <Container paddingTop="5em">
        <Title marginBottom="2rem">Characters</Title>
        {isLoading && <ListSkeleton />}

        {characters && !isLoading ? (
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
                      <Button primary onClick={() => handleSelectedCharacter(character)}>
                        View
                      </Button>
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
        ) : null}
      </Container>
    </CharacterContainer>
  );
};

export default Characters;
