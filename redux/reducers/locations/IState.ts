import IInfo from "../../../interfaces/IInfo";
import Location from "../../../models/Location";

export default interface IState {
  locations: Location[];
  info: IInfo;
  isLoading: boolean;
}
