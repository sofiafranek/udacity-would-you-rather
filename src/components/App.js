import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';
import Routes from './Routes';
import Navigation from './Navigation';

const App = (props) => {
  props.handleInitialData();

  const { notLoggedIn } = props;

  return (
    props.handleInitialData && (
      <Router>
        <div className="main-container">
          <Navigation />
          <Routes notLoggedIn={notLoggedIn} />
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
