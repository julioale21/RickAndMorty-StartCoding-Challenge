import client from "../apollo/client";
import { FETCH_LOCATIONS, FETCH_LOCATION_BY_ID } from "../apollo/queries/locations";
import IInfo from "../interfaces/IInfo";
import Location from "../models/Location";

interface PaginatedLocation {
  locations: Location[];
  info: IInfo;
}

class LocationsService {
  static async fetchLocations(page?: number, filter?: object): Promise<PaginatedLocation> {
    const { data } = await client.query({
      query: FETCH_LOCATIONS,
      variables: {
        page,
        filter,
      },
    });

    return {
      locations: data.locations.results,
      info: data.locations.info,
    };
  }

  static async fetchLocationById(id: string): Promise<Location> {
    const { data } = await client.query({
      query: FETCH_LOCATION_BY_ID,
      variables: {
        id,
      },
    });

    return data.location;
  }
}

export default LocationsService;
