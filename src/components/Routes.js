import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const Routes = (props) => {
  return (
    <Switch>
      {props.notLoggedIn ? (
        <Route path="/" exact component={Login} />
      ) : (
        <>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path='/leaderboard' exact component={LeaderBoard} /> */}
          {/* <Route path='/add' component={NewQuestion}/> */}
          {/* <Route path="/questions/:id" component={QuestionDetails} /> */}
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = { notLoggedIn: PropTypes.any };

export default Routes;
