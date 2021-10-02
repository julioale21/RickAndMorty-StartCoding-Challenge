import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { LocationsContainer, LocationItem } from "../../styles/Locations.styled";
import { BasicButton, Grid, GridItem, Text, Title } from "../../styles/shared.styled";
import { fetchLocations } from "../../redux/actions/locationActions";
import { getPageNumber } from "../../utils";
import { Layout, Paginator } from "../../components";
import { theme } from "../../theme";
import { useRouter } from "next/router";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Location from "../../models/Location";
import { NoResultsContainer } from "../../styles/Search.styled";
import LocationsFilterForm from "../../components/LocationsFilterForm";

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locations, info, isLoadingLocations } = useSelector(
    (state: RootStateOrAny) => state.locationsReducer,
  );
  const [page, setPage] = useState<number>(getPageNumber({ next: info.next, prev: info.prev }));
  const [search, setSearch] = useState({});

  useEffect(() => {
    dispatch(fetchLocations(page, search));
  }, [page, search, dispatch]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSelected = (location: Location) => {
    router.push("/locations/" + location.id);
  };

  return (
    <Layout>
      <LocationsContainer>
        <Title marginBottom="2rem" paddingTop="5rem">
          Locations
        </Title>

        <LocationsFilterForm onFilterChange={(filter) => setSearch(filter)} />

        {isLoadingLocations && <ListSkeleton />}

        {locations.length && !isLoadingLocations ? (
          <>
            <Grid>
              {locations.map((location: Location) => (
                <GridItem key={location.id}>
                  <LocationItem>
                    <Text color={theme.primaryLight} fontSize="1.5rem" fontWeight="bold">
                      {location.name}
                    </Text>
                    <Text color="white">{location.type}</Text>
                    <Text color="white">{location.dimension}</Text>
                    <BasicButton onClick={() => handleSelected(location)}>View</BasicButton>
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
        ) : (
          <NoResultsContainer>
            <Text color="white">No results found</Text>
          </NoResultsContainer>
        )}
      </LocationsContainer>
    </Layout>
  );
};

export default Locations;
