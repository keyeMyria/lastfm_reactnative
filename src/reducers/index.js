import { combineReducers } from "redux";
import RecentTracksReducer from "./RecentTracksReducer";
import LoginReducer from "./LoginReducer.js";

export default combineReducers({
  recentTracks: RecentTracksReducer,
  user: LoginReducer
});
