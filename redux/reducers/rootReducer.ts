import { combineReducers } from "redux";
import characterReducer from "./charactersReducer";

const rootReducer = combineReducers({
  charactersReducer: characterReducer,
});

export default rootReducer;
