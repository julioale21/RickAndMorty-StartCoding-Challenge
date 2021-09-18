import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FETCH_CHARACTERS } from "../../apollo/queries/characters";
import {
  Button,
  CharacterContainer,
  CharacterTitle,
  Image,
  InfoContainer,
} from "./Characters.styled";
import { Container, Grid, GridItem, Separator } from "../../styles/shared.styled";

import client from "../../apollo/client";

import { Text } from "../../styles/shared.styled";
import Character from "../../models/Character";
import { Paginator } from "../../components";
import { getPageNumber } from "../../utils";
import CharacterListSkeleton from "../../components/skeletons/CharacterListSkeleton";

const initialInfo = {
  next: null,
  prev: null,
};
const Characters = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [info, setInfo] = useState(initialInfo);
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await client.query({
        query: FETCH_CHARACTERS,
        variables: {
          page,
        },
      });

      setResults(data.characters.results);
      setInfo(data.characters.info);
      setLoading(false);
    };

    fetchData();
  }, [page]);

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
        <CharacterTitle fontWeight="bold" marginBottom="2rem" textShadow="2px 2px 10px">
          Characters
        </CharacterTitle>
        {isLoading && <CharacterListSkeleton />}

        {results && !isLoading ? (
          <>
            <Grid>
              {results.map((item) => {
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
