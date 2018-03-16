import { GET_RECENT_TRACKS, LOADING_RECENT_TRACKS } from "../actions/Actions";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING_RECENT_TRACKS:
      return {
        ...state,
        loadingRecentTracks: true
      };
    case GET_RECENT_TRACKS:
      return {
        ...state,
        recentTracks: action.payload,
        loadingRecentTracks: false
      };
    default:
      return state;
  }
};
