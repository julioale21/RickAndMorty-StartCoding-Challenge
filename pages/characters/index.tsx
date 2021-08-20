import React from "react";
import { useQuery } from "@apollo/client";
import { FETCH_CHARACTERS } from "../../apollo/queries/characters";
import { Container, Grid, GridItem, Button, Title } from "./Characters.styled";

const Characters = () => {
  const { data } = useQuery(FETCH_CHARACTERS);

  if (!data) return "Loading ...";

  return (
    <Container>
      <Title>Charactes</Title>
      <Grid>
        {data.characters.results.map((item) => {
          return (
            <GridItem key={item.id}>
              <img alt="image" src={item.image} />
              <h2>{item.name}</h2>
              <p>{item.species}</p>
              <Button primary>Detail</Button>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Characters;
