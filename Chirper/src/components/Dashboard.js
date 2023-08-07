import { connect } from "react-redux";
import Tweet from "./Tweet";
<<<<<<< HEAD
=======

>>>>>>> f9152942841ee934641ee40080684cea9e04d296
const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
<<<<<<< HEAD
      <ul className="dashboard-lists">
=======
      <ul className="dashboard-list">
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
        {props.tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
