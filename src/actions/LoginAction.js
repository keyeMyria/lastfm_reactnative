import { SAVE_USER } from "./Actions";

//Save username in store
export const saveUser = payload => ({
  type: SAVE_USER,
  payload
});
