import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { EpisodesContainer, InfoContainer, Image, ImagesContainer } from "./Episode.styled";
import { Grid, GridItem, Text, Title } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { Paginator } from "../../components";
import { getPageNumber } from "../../utils";
import { fetchEpisodes } from "../../redux/actions/episodesActions";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Episode from "../../models/Episode";

const Episodes: React.FC = () => {
  const dispatch = useDispatch();
  const { episodes, info, isLoading } = useSelector(
    (state: RootStateOrAny) => state.episodesReducer,
  );
  const [page, setPage] = useState(getPageNumber({ ...info }));

  useEffect(() => {
    dispatch(fetchEpisodes(page));
  }, [page, dispatch]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSelectedEpisode = (episode: Episode) => {
    console.log(episode);
  };

  return (
    <EpisodesContainer>
      <Title marginBottom="2rem" paddingTop="5rem">
        Episodes
      </Title>

      {isLoading && <ListSkeleton />}

      {episodes && !isLoading ? (
        <>
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
                  <button onClick={() => handleSelectedEpisode(episode)}>View</button>
                </InfoContainer>
              </GridItem>
            ))}
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
    </EpisodesContainer>
  );
};

export default Episodes;
