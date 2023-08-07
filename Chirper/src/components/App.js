<<<<<<< HEAD
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
=======
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
>>>>>>> f9152942841ee934641ee40080684cea9e04d296

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
<<<<<<< HEAD
  return <div>{props.loading === true ? "Loading" : <Dashboard />}</div>;
=======

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/new" element={<NewTweet />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
