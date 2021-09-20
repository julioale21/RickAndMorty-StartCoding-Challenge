import React from "react";
import Head from "next/head";
import { Provider, RootStateOrAny, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { fetchFavorites } from "../redux/actions/favoritesActions";

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

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
};

export default AppWrapper;
