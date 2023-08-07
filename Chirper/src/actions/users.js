export const RECEIVER_USERS = "RECEIVE_USERS";

export function receiveUsers (users) {
    return {
        type: RECEIVER_USERS,
        users,
    };
}
