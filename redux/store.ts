import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(store);
