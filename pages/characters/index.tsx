import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  CharacterContainer,
  CharacterTitle,
  Image,
  InfoContainer,
} from "./Characters.styled";
import { Container, Grid, GridItem, Separator } from "../../styles/shared.styled";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { fetchCharacters } from "../../redux/actions/characterActions";
import { getPageNumber } from "../../utils";
import { Paginator } from "../../components";
import { Text } from "../../styles/shared.styled";
import CharacterListSkeleton from "../../components/skeletons/CharacterListSkeleton";
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
        <CharacterTitle marginBottom="2rem">Characters</CharacterTitle>
        {isLoading && <CharacterListSkeleton />}

        {characters && !isLoading ? (
          <>
            <Grid>
              {characters.map((item) => {
                return (
                  <GridItem key={item.id}>
                    <InfoContainer>
                      <Image alt="image" src={item.image} />
                      <Separator size="15px" />
                      <Text fontSize="1.2rem" fontWeight="bold" textShadow="1px 1px 1px white">
                        {item.name}
                      </Text>

                      <Text color="white" margin="0" textShadow="1px 1px 1px">
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
