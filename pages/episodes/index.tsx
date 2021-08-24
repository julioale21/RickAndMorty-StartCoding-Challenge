import React from "react";

import client from "../../apollo/client";
import { FETCH_EPISODES } from "../../apollo/queries/episodes";

import Episode from "../../models/Episode";
import { EpisodesContainer, InfoContainer } from "./Episode.styled";
import { Grid, GridItem, Text } from "../../styles/shared.styled";
import { theme } from "../../theme";

interface IInfo {
  prev: number | null;
  next: number | null;
}

interface Props {
  defaultInfo: IInfo;
  defaultEpisodes: Episode[];
}

const Episodes: React.FC<Props> = ({ defaultEpisodes, defaultInfo }) => {
  return (
    <EpisodesContainer>
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Episodes
      </Text>

      <Grid>
        {defaultEpisodes.map((episode) => (
          <GridItem key={episode.id}>
            <InfoContainer>
              <Text fontWeight="bold">{episode.name}</Text>
              <Text color={theme.white}>{episode.episode}</Text>
            </InfoContainer>
          </GridItem>
        ))}
      </Grid>
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
