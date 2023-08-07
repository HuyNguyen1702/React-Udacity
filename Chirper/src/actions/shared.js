import { getInitialData } from "../utils/api";
<<<<<<< HEAD
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
=======
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
>>>>>>> f9152942841ee934641ee40080684cea9e04d296

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
<<<<<<< HEAD
=======
    dispatch(showLoading());
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
<<<<<<< HEAD
=======
      dispatch(hideLoading());
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
    });
  };
}
