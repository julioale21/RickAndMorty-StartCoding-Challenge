/* eslint-disable no-console */
import { FETCH_LOCATIONS } from "./types";
import { Dispatch } from "redux";
import LocationsService from "../LocationsService";
import { setIsLoading } from "./commonActions";

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
