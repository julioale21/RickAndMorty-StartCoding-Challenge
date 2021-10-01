import IInfo from "../../../interfaces/IInfo";
import Location from "../../../models/Location";

export default interface IState {
  locations: Location[];
  selectedLocation: Location;
  info: IInfo;
  isLoadingLocations: boolean;
}
