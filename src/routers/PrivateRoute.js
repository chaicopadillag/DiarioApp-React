import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
	return <Route {...rest} component={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/auth/login" />)} />;
};

PrivateRoute.propTypes = {
	isLogin: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default PrivateRoute;
