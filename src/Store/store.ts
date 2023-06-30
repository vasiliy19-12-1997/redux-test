import { createStore } from "redux";
import { postReducer } from "./Reducer/postReducer";

export const store = createStore(postReducer);
