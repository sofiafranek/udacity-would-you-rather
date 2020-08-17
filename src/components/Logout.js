import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';

const Logout = (props) => {
  props.dispatch(unsetAuthedUser());

  return <Redirect to="/" />;
};

export default connect()(Logout);
