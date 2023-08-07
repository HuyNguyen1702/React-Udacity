import { RECEIVER_TWEETS } from "../actions/tweets"

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVER_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state;
    }
}
