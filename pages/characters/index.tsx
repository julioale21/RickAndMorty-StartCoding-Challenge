import React, { useEffect, useState } from "react";
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

import client from "../../apollo/client";

import { Text } from "../../styles/shared.styled";
import Character from "../../models/Character";
import { Paginator } from "../../components";

const getPageNumber = ({ next, prev }) => {
  if (next !== 0 && next !== null) return next - 1;
  if (prev !== null) return prev + 1;
};

const Characters = ({ data }) => {
  const router = useRouter();
  const { info: defaultInfo, results: defaultResults } = data.characters;
  const [results, setResults] = useState(defaultResults);
  const [info, setInfo] = useState(defaultInfo);
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await client.query({
        query: FETCH_CHARACTERS,
        variables: {
          page,
        },
      });

      setResults(data.characters.results);
      setInfo(data.characters.info);
    };

    fetchData();
  }, [page]);

  if (!results) return "Loading ...";

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
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Characters
      </Text>
      <Grid>
        {results.map((item) => {
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
      {results && (
        <Paginator
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          next={info.next}
          page={page}
          prev={info.prev}
        />
      )}
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
      props: { data },
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: "Serer not found", code: res.statusCode } },
    };
  }
};
