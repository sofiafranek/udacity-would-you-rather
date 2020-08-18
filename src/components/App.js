import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';
import Navigation from './Navigation';

import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import NewQuestion from './NewQuestion';
import QuestionDetails from './QuestionDetails';
import NotFound from './NotFound';
import Logout from './Logout';

const App = (props) => {
  props.handleInitialData();

  const { notLoggedIn } = props;

  return (
    props.handleInitialData && (
      <Router>
        <div className="main-container">
          <Navigation />
          {notLoggedIn ? (
            <Switch>
              <Route path="/" exact component={Login} />
              <Route component={NotFound} />
            </Switch>
          ) : (
            <>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/questions/:id" component={QuestionDetails} />
                <Route exact path="/logout" component={Logout} />
              </Switch>
            </>
          )}
        </div>
      </Router>
    )
  );
};

App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ authedUser }) => {
  return {
    notLoggedIn: authedUser === null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
