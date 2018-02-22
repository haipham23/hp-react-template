import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

import Dashboard from '../containers/Dashboard/Dashboard';
import Login from '../../containers/Login/Login';

class Router extends PureComponent {
  render() {
    const { isAuth } = this.props;

    return (
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <PrivateRoute path="/dashboard" isAuth={isAuth} component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Router.propTypes = {
  isAuth: Proptypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Router);
