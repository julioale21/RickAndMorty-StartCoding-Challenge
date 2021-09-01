import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";
import { Layout } from "../components";
import { theme } from "../theme";
import store from "../redux/store";
import client from "../apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
