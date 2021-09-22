import React from "react";
import Head from "next/head";
import { Provider, RootStateOrAny, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { Grid, GridItem, Text, Title } from "../styles/shared.styled";
import { fetchFavorites, removeFromFavorites } from "../redux/actions/favoritesActions";
import { FavoritesContainer, HomeContainer } from "./Home.styled";
import Character from "../models/Character";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { favorites, isLoading } = useSelector((state: RootStateOrAny) => state.favoritesReducer);

  React.useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const handleDeleteFavorite = (favorite: Character) => {
    dispatch(removeFromFavorites(favorite));
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
        {favorites && (
          <Grid>
            {favorites.map((favorite: Character) => (
              <GridItem key={favorite.id}>
                <img alt={favorite.name} src={favorite.image} />
                <Text fontSize="2rem">{favorite.name}</Text>
                <Text>{favorite.species}</Text>
                <div>
                  <button>View</button>
                  <button onClick={() => handleDeleteFavorite(favorite)}>Delete</button>
                </div>
              </GridItem>
            ))}
          </Grid>
        )}
      </FavoritesContainer>
    </HomeContainer>
  );
};

export default AppWrapper;
