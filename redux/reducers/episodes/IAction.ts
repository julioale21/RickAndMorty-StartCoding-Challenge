import { Action } from "redux";
import IInfo from "../../../interfaces/IInfo";
import Episode from "../../../models/Episode";

export default interface IAction extends Action {
  type: string;
  payload: {
    episodes: Episode[];
    selectedEpisode: Episode;
    info: IInfo;
    isLoadingEpisodes: boolean;
  };
}
