import { Action } from "redux";
import IInfo from "../../../interfaces/IInfo";
import Location from "../../../models/Location";

export default interface IAction extends Action {
  type: string;
  payload: {
    locations: Location[];
    selectedLocation: Location;
    info: IInfo;
    isLoading: boolean;
  };
}
