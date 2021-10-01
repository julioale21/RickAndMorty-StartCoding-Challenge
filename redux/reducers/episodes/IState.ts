import IInfo from "../../../interfaces/IInfo";
import Episode from "../../../models/Episode";

export default interface IState {
  episodes: Episode[];
  selectedEpisode: Episode;
  info: IInfo;
  isLoadingEpisodes: boolean;
}
