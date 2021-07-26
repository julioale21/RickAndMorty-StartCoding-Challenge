import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globals";
import { theme } from "../theme";
import client from "../apollo/client";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
