import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { EpisodesContainer, InfoContainer, Image, ImagesContainer } from "./Episode.styled";
import { Grid, GridItem, Text } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { Paginator } from "../../components";
import { getPageNumber } from "../../utils";
import { fetchEpisodes } from "../../redux/actions/episodesActions";

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

  return (
    <EpisodesContainer>
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Episodes
      </Text>

      {isLoading && <h1>Cargando...</h1>}

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
