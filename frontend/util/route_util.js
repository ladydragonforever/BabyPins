import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id),
});

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
