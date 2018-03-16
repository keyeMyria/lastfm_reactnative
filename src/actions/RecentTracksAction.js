import Axios from "axios";
import { GET_RECENT_TRACKS, LOADING_RECENT_TRACKS } from "./Actions";

//Last FM - Recent Tracks data:
//http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ottoman153&api_key=5dc76e8a7e2d376900c7d1f0911439ac&format=json
const baseurl = "http://ws.audioscrobbler.com";
const recentTracksApi =
  "/2.0/?method=user.getrecenttracks&user=Ottoman153&api_key=5dc76e8a7e2d376900c7d1f0911439ac&format=json";
 
/**
 * Retrieve Last 50 recent tracks from Last FM API
 */
export const getRecentTracks = user => {
  return dispatch => {
    //Dispatch Loading to reducers
    dispatch({ type: LOADING_RECENT_TRACKS });

    //Retrieve data with Axios send the track array to the reducer
    Axios.get(baseurl + recentTracksApi)
      .then(response => {
        dispatch({
          type: GET_RECENT_TRACKS,
          payload: response.data.recenttracks.track
        });
      })
      .catch(() => console.log("Error"));
  };
};
