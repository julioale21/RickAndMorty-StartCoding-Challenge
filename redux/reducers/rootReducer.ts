import { combineReducers } from "redux";
import characterReducer from "./characters/charactersReducer";
import episodesReducer from "./episodes/episodesReducer";

const rootReducer = combineReducers({
  charactersReducer: characterReducer,
  episodesReducer: episodesReducer,
});

export default rootReducer;
