import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    setText("");
    // TODO: Add Tweet to store
  };

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSumbit}>
        {/* TODO: Redirect to homepage if summbited */}
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
