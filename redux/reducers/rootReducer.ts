import { combineReducers } from "redux";
import characterReducer from "./characters/charactersReducer";

const rootReducer = combineReducers({
  charactersReducer: characterReducer,
});

export default rootReducer;
