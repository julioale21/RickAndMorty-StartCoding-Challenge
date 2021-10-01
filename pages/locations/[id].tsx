import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchLocationById } from "../../redux/actions/locationActions";
import { LocationDetailContainer } from "./Locations.styled";

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

  if (isLoadingLocations) return "Is loading...";
  if (!selectedLocation) return "";

  return (
    <LocationDetailContainer>
      <h1>{selectedLocation.name}</h1>
      <h2>{selectedLocation.type}</h2>
    </LocationDetailContainer>
  );
};

export default LocationDetail;
