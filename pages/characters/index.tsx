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

const Characters = ({ defaultCharacters, defaultInfo }) => {
  const router = useRouter();
  const [results, setResults] = useState(defaultCharacters);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState(defaultInfo);
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading } = await client.query({
        query: FETCH_CHARACTERS,
        variables: {
          page,
        },
      });

      setLoading(loading);
      setResults(data.characters.results);
      setInfo(data.characters.info);
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

  if (isLoading) return <CharacterListSkeleton />;

  return (
    <CharacterContainer>
      <Container paddingTop="5em">
        <CharacterTitle marginBottom="2rem">Characters</CharacterTitle>

        {results && (
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
        )}
      </Container>
    </CharacterContainer>
  );
};

export default Characters;

export const getServerSideProps = async ({ res }) => {
  try {
    const { data } = await client.query({
      query: FETCH_CHARACTERS,
    });

    return {
      props: { defaultCharacters: data.characters.results, defaultInfo: data.characters.info },
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: "Serer not found", code: res.statusCode } },
    };
  }
};
