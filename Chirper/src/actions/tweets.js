export const RECEIVER_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets (tweets) {
    return {
        type: RECEIVER_TWEETS,
        tweets,
    };
}
