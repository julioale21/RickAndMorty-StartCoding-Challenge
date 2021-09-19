import { combineReducers } from "redux";
import characterReducer from "./characters/charactersReducer";
import episodesReducer from "./episodes/episodesReducer";
import locationsReducer from "./locations/locationsReducer";

const rootReducer = combineReducers({
  charactersReducer: characterReducer,
  episodesReducer: episodesReducer,
  locationsReducer: locationsReducer,
});

export default rootReducer;
