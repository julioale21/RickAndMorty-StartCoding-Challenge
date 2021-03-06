import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
  EpisodesContainer,
  InfoContainer,
  Image,
  ImagesContainer,
} from "../../styles/Episode.styled";
import { BasicButton, Grid, GridItem, Text, Title } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { Layout, Paginator } from "../../components";
import { getPageNumber } from "../../utils";
import { fetchEpisodes } from "../../redux/actions/episodesActions";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Episode from "../../models/Episode";
import { useRouter } from "next/router";
import { NoResultsContainer } from "../../styles/Search.styled";
import EpisodesFilterForm from "../../components/EpisodesFilterForm";

const Episodes: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { episodes, info, isLoadingEpisodes } = useSelector(
    (state: RootStateOrAny) => state.episodesReducer,
  );
  const [page, setPage] = useState(getPageNumber({ ...info }));
  const [search, setSearch] = useState({});

  useEffect(() => {
    dispatch(fetchEpisodes(page, search));
  }, [page, search, dispatch]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSelectedEpisode = (episode: Episode) => {
    router.push("/episodes/" + episode.id);
  };

  return (
    <Layout>
      <EpisodesContainer>
        <Title marginBottom="2rem" paddingTop="5rem">
          Episodes
        </Title>

        <EpisodesFilterForm onFilterChange={(filter) => setSearch(filter)} />

        {isLoadingEpisodes && <ListSkeleton />}

        {episodes.length && !isLoadingEpisodes ? (
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
                    <BasicButton onClick={() => handleSelectedEpisode(episode)}>View</BasicButton>
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
        ) : (
          <NoResultsContainer>
            <Text color="white">No results found</Text>
          </NoResultsContainer>
        )}
      </EpisodesContainer>
    </Layout>
  );
};

export default Episodes;
