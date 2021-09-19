import client from "../apollo/client";
import { FETCH_LOCATIONS } from "../apollo/queries/locations";
import IInfo from "../interfaces/IInfo";
import Location from "../models/Location";

interface PaginatedLocation {
  locations: Location[];
  info: IInfo;
}

class LocationsService {
  static async fetchLocations(page?: number): Promise<PaginatedLocation> {
    const { data } = await client.query({
      query: FETCH_LOCATIONS,
      variables: {
        page,
      },
    });

    return {
      locations: data.locations.results,
      info: data.locations.info,
    };
  }
}

export default LocationsService;
