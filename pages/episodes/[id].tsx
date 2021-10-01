import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchEpisodeById } from "../../redux/actions/episodesActions";
import {
  EpisodeCharacter,
  EpisodeCharacterImage,
  EpisodeCharactersContainer,
  EpisodeDetailContainer,
  EpisodeName,
  VTitle,
} from "./Episode.styled";
import { HStack } from "../../styles/shared.styled";
import Loading from "../../components/Loading/Loading";
import { Layout } from "../../components";

const EpisodeDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoadingEpisodes, selectedEpisode: episode } = useSelector(
    (state: RootStateOrAny) => state.episodesReducer,
  );

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchEpisodeById(id as string));
  }, [dispatch, id]);

  if (isLoadingEpisodes) return <Loading />;
  if (!episode) return <h1>No data</h1>;

  return (
    <Layout>
      <EpisodeDetailContainer>
        <HStack margin="0 auto" marginBottom="2rem" maxWidth="50%">
          <img alt="" src="/rickandmorty.png" width="100%" />
        </HStack>
        <HStack>
          <VTitle>Episode</VTitle>
          <EpisodeName fontWeight="bold" textShadow="1px 1px 5px white">
            {episode.name}
          </EpisodeName>
        </HStack>

        <h3>{episode.air_date}</h3>
        <h3>{episode.episode}</h3>
        <h2>Episode Characters:</h2>
        <EpisodeCharactersContainer>
          {episode.characters.map((character) => {
            return (
              <EpisodeCharacter key={character.id}>
                <EpisodeCharacterImage alt={character.name} src={character.image} />
              </EpisodeCharacter>
            );
          })}
        </EpisodeCharactersContainer>
      </EpisodeDetailContainer>
    </Layout>
  );
};

export default EpisodeDetail;
