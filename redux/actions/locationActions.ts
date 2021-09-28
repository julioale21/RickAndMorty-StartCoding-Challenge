/* eslint-disable no-console */
import { FETCH_LOCATIONS, FETCH_LOCATION_BY_ID } from "./types";
import { Dispatch } from "redux";
import LocationsService from "../LocationsService";
import { setIsLoading } from "./commonActions";
import { FragmentsOnCompositeTypesRule } from "graphql";

export const fetchLocations = (page?: number) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  LocationsService.fetchLocations(page)
    .then((data) => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: { locations: data.locations, info: data.info },
      });

      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};

export const fetchLocationById = (id: string) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  LocationsService.fetchLocationById(id)
    .then((location) => {
      dispatch({
        type: FETCH_LOCATION_BY_ID,
        payload: {
          selectedLocation: location,
        },
      });
      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};
