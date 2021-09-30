import React, { useState } from "react";
import Head from "next/head";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BasicButton, DeleteButton, Grid, GridItem, Text, Title } from "../styles/shared.styled";
import { fetchFavorites, removeFromFavorites } from "../redux/actions/favoritesActions";
import { ActionsContainer, CharacterImage, FavoritesContainer, HomeContainer } from "./Home.styled";
import Character from "../models/Character";
import Paginator from "../components/Paginator";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootStateOrAny) => state.favoritesReducer);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  React.useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  React.useEffect(() => {
    const totalPages = Math.ceil(favorites.length / 10);

    setTotalPages(totalPages);
    const offset = (page - 1) * 10 - 1;
    const filtered = favorites.slice(offset > 0 ? offset : 0, offset + 10);

    setFilteredFavorites(filtered);
  }, [favorites, page]);

  const handleDeleteFavorite = (favorite: Character) => {
    dispatch(removeFromFavorites(favorite));
  };

  const handleViewSelected = (favorite: Character) => {
    router.push("/characters/" + favorite.id);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <HomeContainer>
      <Head>
        <title>Rick and Morty</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <FavoritesContainer>
        <Title fontSize="6rem">Home</Title>
        {filteredFavorites.length && (
          <Grid>
            {filteredFavorites.map((favorite: Character) => (
              <GridItem key={favorite.id}>
                <CharacterImage alt={favorite.name} src={favorite.image} />
                <Text fontSize="2rem" fontWeight="bold" marginTop="2rem">
                  {favorite.name}
                </Text>
                <Text color="white">{favorite.species}</Text>
                <ActionsContainer>
                  <BasicButton onClick={() => handleViewSelected(favorite)}>View</BasicButton>
                  <DeleteButton onClick={() => handleDeleteFavorite(favorite)}>Delete</DeleteButton>
                </ActionsContainer>
              </GridItem>
            ))}
          </Grid>
        )}
        <Paginator
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          next={page + 1 <= totalPages ? page + 1 : null}
          page={page}
          prev={page - 1}
        />
      </FavoritesContainer>
    </HomeContainer>
  );
};

export default Home;
