import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BasicButton, DeleteButton, GridItem, Text, Title } from "../styles/shared.styled";
import { fetchFavorites, removeFromFavorites } from "../redux/actions/favoritesActions";
import {
  ActionsContainer,
  CharacterImage,
  ButtonCharacters,
  FavoritesContainer,
  FavoritesGridContainer,
  GridHome,
  HomeContainer,
  NoResultsContent,
} from "../styles/Home.styled";
import Character from "../models/Character";
import Paginator from "../components/Paginator";
import { Layout } from "../components";
import { NoResultsContainer } from "../styles/Search.styled";

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

  const goToCharacters = () => {
    router.push("/characters");
  };

  return (
    <Layout>
      <HomeContainer>
        <FavoritesContainer>
          <Title fontSize="5rem" paddingTop="6rem">
            Favorites Characters
          </Title>
          {filteredFavorites.length ? (
            <FavoritesGridContainer>
              <GridHome>
                {filteredFavorites.map((favorite: Character) => (
                  <GridItem key={favorite.id}>
                    <CharacterImage alt={favorite.name} src={favorite.image} />
                    <Text fontSize="2rem" fontWeight="bold" marginTop="2rem">
                      {favorite.name}
                    </Text>
                    <Text color="white">{favorite.species}</Text>
                    <ActionsContainer>
                      <BasicButton onClick={() => handleViewSelected(favorite)}>View</BasicButton>
                      <DeleteButton onClick={() => handleDeleteFavorite(favorite)}>
                        Delete
                      </DeleteButton>
                    </ActionsContainer>
                  </GridItem>
                ))}
              </GridHome>
              <Paginator
                handleNext={handleNextPage}
                handlePrev={handlePrevPage}
                next={page + 1 <= totalPages ? page + 1 : null}
                page={page}
                prev={page - 1}
              />
            </FavoritesGridContainer>
          ) : (
            <NoResultsContainer>
              <NoResultsContent>
                <Text color="white">There are not favorites added.</Text>
                <ButtonCharacters onClick={goToCharacters}>Go to characters</ButtonCharacters>
              </NoResultsContent>
            </NoResultsContainer>
          )}
        </FavoritesContainer>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
