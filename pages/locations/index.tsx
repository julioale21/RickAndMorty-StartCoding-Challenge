import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { LocationsContainer, LocationItem } from "./Locations.styled";
import { Grid, GridItem, Text, Title } from "../../styles/shared.styled";
import { fetchLocations } from "../../redux/actions/locationActions";
import { getPageNumber } from "../../utils";
import { Paginator } from "../../components";
import { theme } from "../../theme";
import ListSkeleton from "../../components/skeletons/ListSkeleton";

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const { locations, info, isLoading } = useSelector(
    (state: RootStateOrAny) => state.locationsReducer,
  );
  const [page, setPage] = useState<number>(getPageNumber({ next: info.next, prev: info.prev }));

  useEffect(() => {
    dispatch(fetchLocations(page));
  }, [page, dispatch]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (!locations) return null;

  return (
    <LocationsContainer>
      <Title marginBottom="2rem" paddingTop="5rem">
        Locations
      </Title>

      {isLoading && <ListSkeleton />}

      {locations && !isLoading ? (
        <>
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

          <Paginator
            handleNext={handleNextPage}
            handlePrev={handlePrevPage}
            next={info.next}
            page={page}
            prev={info.prev}
          />
        </>
      ) : null}
    </LocationsContainer>
  );
};

export default Locations;
