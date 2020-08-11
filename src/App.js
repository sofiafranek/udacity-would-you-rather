import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import { handleInitialData } from './actions/handleInitialData';

import Routes from './components/Routes';

const App = (props) => {
  props.handleInitialData();
  return (
    <div className="App">
      <Router>
        <Routes notLoggedIn={props.notLoggedIn} />
      </Router>
    </div>
  );
};

App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
