import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchLocationById } from "../../redux/actions/locationActions";
import {
  LocationDetailContainer,
  LocationResidentsGrid,
  LocationName,
  VTitle,
  LocationResidentImage,
} from "./Locations.styled";
import { HStack, Text, VStack, GridItem } from "../../styles/shared.styled";
import { theme } from "../../theme";
import Character from "../../models/Character";
import Loading from "../../components/Loading/Loading";
import { Layout } from "../../components";

const LocationDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const { isLoadingLocations, selectedLocation } = useSelector(
    (state: RootStateOrAny) => state.locationsReducer,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchLocationById(id as string));
    }
  }, [dispatch, id]);

  if (isLoadingLocations) return <Loading />;
  if (!selectedLocation) return "";

  return (
    <Layout>
      <LocationDetailContainer>
        <HStack margin="0 auto" marginBottom="2rem" maxWidth="50%">
          <img alt="" src="/rickandmorty.png" width="100%" />
        </HStack>
        <HStack>
          <VTitle>Location</VTitle>
          <LocationName fontWeight="bold" textShadow="1px 1px 5px white">
            {selectedLocation.name}
          </LocationName>
        </HStack>
        <VStack marginTop="2rem">
          <Text color={theme.secondaryDark} fontWeight="bold">
            Type
          </Text>
          <Text fontSize="1.5rem">{selectedLocation.type}</Text>
        </VStack>
        <VStack marginTop="2rem">
          <Text color={theme.secondaryDark} fontWeight="bold">
            Dimension
          </Text>
          <Text fontSize="1.5rem">{selectedLocation.dimension}</Text>
        </VStack>

        <Text
          color={theme.secondaryDark}
          fontSize="2rem"
          fontWeight="bold"
          marginBottom="1.5rem"
          marginTop="3rem"
        >
          Residents
        </Text>

        {selectedLocation.residents.length ? (
          <LocationResidentsGrid>
            {selectedLocation.residents.map((resident: Character) => (
              <GridItem key={resident.id}>
                <LocationResidentImage alt={resident.name} src={resident.image} width="50px" />
                <Text color={theme.secondaryLight} fontSize="0.8rem">
                  {resident.name}
                </Text>
              </GridItem>
            ))}
          </LocationResidentsGrid>
        ) : (
          <div>
            <Text>There are not residents</Text>
          </div>
        )}
      </LocationDetailContainer>
    </Layout>
  );
};

export default LocationDetail;
