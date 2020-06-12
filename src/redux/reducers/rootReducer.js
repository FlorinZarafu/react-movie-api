import { combineReducers } from "redux";
import searchReducer from "./movie/searchReducer";

export default combineReducers({
  movies: searchReducer,
});
