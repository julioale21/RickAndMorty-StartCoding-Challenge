import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { LocationsContainer, LocationItem } from "./Locations.styled";
import { BasicButton, Grid, GridItem, Text, Title } from "../../styles/shared.styled";
import { fetchLocations } from "../../redux/actions/locationActions";
import { getPageNumber } from "../../utils";
import { Paginator } from "../../components";
import { theme } from "../../theme";
import { useRouter } from "next/router";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import Location from "../../models/Location";
import { NoResultsContainer, SearchInput, SearchInputContainer } from "../Search.styled";

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locations, info, isLoading } = useSelector(
    (state: RootStateOrAny) => state.locationsReducer,
  );
  const [page, setPage] = useState<number>(getPageNumber({ next: info.next, prev: info.prev }));
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  useMemo(() => {
    if (inputValue.length > 3 || inputValue.length === 0) {
      setSearch(inputValue);
    }
  }, [inputValue]);

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

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <LocationsContainer>
      <Title marginBottom="2rem" paddingTop="5rem">
        Locations
      </Title>

      <SearchInputContainer>
        <SearchInput
          placeholder="Search name"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </SearchInputContainer>

      {isLoading && <ListSkeleton />}

      {locations.length && !isLoading ? (
        <>
          <Grid>
            {locations.map((location: Location) => (
              <GridItem key={location.id}>
                <LocationItem>
                  <Text color={theme.primaryLight} fontWeight="bold">
                    {location.name}
                  </Text>
                  <Text>{location.type}</Text>
                  <Text>{location.dimension}</Text>
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
  );
};

export default Locations;
