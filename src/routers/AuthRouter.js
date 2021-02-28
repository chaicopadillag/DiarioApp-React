import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginView from '../components/auth/LoginView';
import RegisterView from '../components/auth/RegisterView';

const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__logo-container">
				<h6 className="logo_app">
					<FontAwesomeIcon icon={faIdCardAlt} /> Mi Diario
				</h6>
				<div className="auth__box-container animate__animated animate__fadeIn animate__fast">
					<Switch>
						<Route exact path="/auth/login" component={LoginView} />
						<Route exact path="/auth/register" component={RegisterView} />
						<Redirect to="/auth/login" />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default AuthRouter;
