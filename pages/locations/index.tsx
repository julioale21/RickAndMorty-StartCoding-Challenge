/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import client from "../../apollo/client";
import { FETCH_LOCATIONS } from "../../apollo/queries/locations";
import Location from "../../models/Location";
import { getPageNumber } from "../../utils";

import { Paginator } from "../../components";
import { Grid, GridItem, Text } from "../../styles/shared.styled";
import { theme } from "../../theme";
import { LocationsContainer, LocationItem } from "./Locations.styled";

interface IInfo {
  next: number | null;
  prev: number | null;
}

interface Props {
  defaultInfo: IInfo;
  defaultLocations: Location[];
}

const Locations: React.FC<Props> = ({ defaultInfo, defaultLocations }) => {
  const [info, setInfo] = useState<IInfo>(defaultInfo);
  const [locations, setLocations] = useState<Location[]>(defaultLocations);
  const [page, setPage] = useState<number>(getPageNumber({ next: info.next, prev: info.prev }));

  useEffect(() => {
    const fetchLocations = async () => {
      const { data } = await client.query({
        query: FETCH_LOCATIONS,
        variables: {
          page,
        },
      });

      setLocations(data.locations.results);
      setInfo(data.locations.info);
    };

    fetchLocations();
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (!locations) return null;

  return (
    <LocationsContainer>
      <Text fontSize="3rem" fontWeight="bolder" marginBottom="2rem" textShadow="2px 2px 2px white">
        Locations
      </Text>
      <Grid>
        {locations.map((location) => (
          <GridItem key={location.id}>
            <LocationItem>
              <Text color={theme.primaryLight} fontWeight="bold">
                {location.name}
              </Text>
              <Text>{location.type}</Text>
              <Text>{location.dimension}</Text>
            </LocationItem>
          </GridItem>
        ))}
      </Grid>
      {locations && (
        <Paginator
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          next={info.next}
          page={page}
          prev={info.prev}
        />
      )}
    </LocationsContainer>
  );
};

export default Locations;

export const getServerSideProps = async ({ res }) => {
  try {
    const { data } = await client.query({
      query: FETCH_LOCATIONS,
    });

    return {
      props: {
        defaultInfo: data.locations.info,
        defaultLocations: data.locations.results,
      },
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: "Serer not found", code: res.statusCode } },
    };
  }
};
