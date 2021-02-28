import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { loginAction } from '../actions/authAction';
import DiarioView from '../components/diario/DiarioView';
import Loading from '../components/ui/Loading';
import { authFirebase } from '../firebase/firebaseConfig';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { setNotas } from '../actions/noteAction';

const AppRouter = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLogin, setIsLogin] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		authFirebase.onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(loginAction(user.uid, user.displayName, user.email));
				setIsLogin(true);
				dispatch(setNotas(user.uid));
			} else {
				setIsLogin(false);
			}
			setIsLoading(false);
		});
	}, [dispatch, setIsLoading, setIsLogin]);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute path="/auth" component={AuthRouter} isLogin={isLogin} />
				<PrivateRoute exact path="/" component={DiarioView} isLogin={isLogin} />
				<Redirect to="/auth/login" />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
