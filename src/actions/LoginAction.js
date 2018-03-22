import { SAVE_USER } from "./Actions";

//Save username in store
export const saveUser = (payload, navigation) => {
  return dispatch => {
    console.log(payload);
    //Dispatch Loading to reducers
    dispatch({
      type: SAVE_USER,
      payload
    });

    //Open main app
    navigation.navigate("App");
  };
};
