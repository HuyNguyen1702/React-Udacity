<<<<<<< HEAD
import  { SET_AUTHED_USER } from "../actions/authedUser"

export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER: 
            return action.id;
        default:
            return state
    }
}
=======
import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
