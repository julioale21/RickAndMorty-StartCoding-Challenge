import React, { useEffect, useState } from "react";

import client from "../../apollo/client";
import { FETCH_EPISODES } from "../../apollo/queries/episodes";

import Episode from "../../models/Episode";
import { EpisodesContainer, InfoContainer, Image, ImagesContainer } from "./Episode.styled";
import { Grid, GridItem, Text } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { Paginator } from "../../components";
import { getPageNumber } from "../../utils";

interface IInfo {
  prev: number | null;
  next: number | null;
}

interface Props {
  defaultInfo: IInfo;
  defaultEpisodes: Episode[];
}

const Episodes: React.FC<Props> = ({ defaultEpisodes, defaultInfo }) => {
  const [episodes, setEpisodes] = useState<Episode[]>(defaultEpisodes);
  const [info, setInfo] = useState<IInfo>(defaultInfo);
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data } = await client.query({
        query: FETCH_EPISODES,
        variables: {
          page,
        },
      });

      setEpisodes(data.episodes.results);
      setInfo(data.episodes.info);
    };

    fetchEpisodes();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <EpisodesContainer>
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Episodes
      </Text>

      <Grid>
        {episodes.map((episode) => (
          <GridItem key={episode.id}>
            <InfoContainer>
              <Text fontSize="1.2em" fontWeight="bold">
                {episode.name}
              </Text>
              <Text color={theme.white} marginTop="0.5em">
                {episode.episode}
              </Text>
              <Text color={theme.white}>{episode.air_date}</Text>
              <Text fontSize="0.8em" fontWeight="bold" margin="1em 0">
                Characters:
              </Text>
              <ImagesContainer>
                {episode.characters.slice(0, 10).map((character) => (
                  <Image key={character.id} src={character.image} width="40px" />
                ))}
              </ImagesContainer>
            </InfoContainer>
          </GridItem>
        ))}
      </Grid>

      {episodes && (
        <Paginator
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          next={info.next}
          page={page}
          prev={info.prev}
        />
      )}
    </EpisodesContainer>
  );
};

export default Episodes;

export const getServerSideProps = async ({ res }) => {
  try {
    const { data } = await client.query({
      query: FETCH_EPISODES,
    });

    return {
      props: {
        defaultEpisodes: data.episodes.results,
        defaultInfo: data.episodes.info,
      },
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: "Server not found", code: res.statusCode } },
    };
  }
};
