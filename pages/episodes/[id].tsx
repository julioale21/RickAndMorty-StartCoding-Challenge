import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchEpisodeById } from "../../redux/actions/episodesActions";
import {
  EpisodeCharacter,
  EpisodeCharacterImage,
  EpisodeCharactersContainer,
  EpisodeDetailContainer,
} from "./Episode.styled";

const EpisodeDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, selectedEpisode: episode } = useSelector(
    (state: RootStateOrAny) => state.episodesReducer,
  );

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchEpisodeById(id as string));
  }, [dispatch, id]);

  if (isLoading) return "Loading...";
  if (!episode) return <h1>No data</h1>;

  return (
    <EpisodeDetailContainer>
      <h1>{episode.name}</h1>
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
  );
};

export default EpisodeDetail;
