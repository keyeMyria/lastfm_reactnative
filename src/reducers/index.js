import { combineReducers } from "redux";
import RecentTracksReducer from "./RecentTracksReducer";

export default combineReducers({
  recentTracks: RecentTracksReducer
});
