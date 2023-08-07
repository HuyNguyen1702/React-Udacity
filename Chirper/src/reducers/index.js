import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";
<<<<<<< HEAD

export default combineReducers({
    authedUser,
    users,
    tweets
});
=======
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer,
});
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
