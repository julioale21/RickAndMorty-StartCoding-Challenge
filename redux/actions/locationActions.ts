/* eslint-disable no-console */
import { FETCH_LOCATIONS, FETCH_LOCATION_BY_ID, SET_ISLOADING_LOCATIONS } from "./types";
import { Dispatch } from "redux";
import LocationsService from "../LocationsService";

export const setIsLoading = (isLoading: boolean, dispatch: Dispatch) => {
  dispatch({
    type: SET_ISLOADING_LOCATIONS,
    payload: {
      isLoadingLocations: isLoading,
    },
  });
};

export const fetchLocations = (page?: number, name?: string) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  LocationsService.fetchLocations(page, name)
    .then((data) => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: { locations: data.locations, info: data.info },
      });

      setIsLoading(false, dispatch);
    })
    .catch((error) => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: { locations: [], info: { next: 0, prev: 0 } },
      });

      setIsLoading(false, dispatch);
      console.log(error);
    });
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
