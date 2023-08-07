<<<<<<< HEAD
import { RECEIVER_USERS } from "../actions/users"

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVER_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state;
    }
}
=======
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
