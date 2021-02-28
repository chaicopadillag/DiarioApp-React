import { types } from '../types/types';
import { googleAuthProvider, authFirebase } from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from './uiAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { notesLogoutCleaningAction } from './noteAction';

const mySwal = withReactContent(Swal);

const loginAction = (uid, nombre, correo) => ({
	type: types.login,
	sesion: { uid, nombre, correo },
});

const logoutAction = () => ({ type: types.logout });

const loginCorreoContrasenia = (correo, contrasenia) => {
	return (dispatch) => {
		dispatch(startLoading());
		authFirebase
			.signInWithEmailAndPassword(correo, contrasenia)
			.then(({ user }) => {
				dispatch(loginAction(user.uid, user.displayName, user.email));
				dispatch(finishLoading());
			})
			.catch((error) => {
				// console.log(error);
				let mensaje;
				switch (error?.code) {
					case 'auth/user-not-found':
						mensaje = 'No hay ningún registro de usuario que corresponda a este identificador. Es posible que se haya eliminado al usuario.';
						break;
					case 'auth/wrong-password':
						mensaje = 'El usuario o la contraseña no es válida';
						break;
					default:
						break;
				}
				mySwal.fire({
					title: 'Error de Autenticación',
					text: mensaje,
					icon: 'error',
					showCloseButton: true,
				});
				dispatch(finishLoading());
			});
	};
};

const loginWithGoogle = () => {
	return (dispatch) => {
		authFirebase
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(loginAction(user.uid, user.displayName, user.email));
			})
			.catch((error) => {
				mySwal.fire({
					title: 'Error de Autenticación',
					text: error.message,
					icon: 'error',
					showCloseButton: true,
				});
			});
	};
};
const registerUserEmailAndPassword = (nombre, correo, contrasenia) => {
	return (dispatch) => {
		authFirebase
			.createUserWithEmailAndPassword(correo, contrasenia)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: nombre });
				dispatch(loginAction(user.uid, user.displayName, user.email));
			})
			.catch((error) => {
				let mensaje;
				switch (error?.code) {
					case 'auth/email-already-exists':
						mensaje = 'Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.';
						break;
					case 'auth/id-token-expired':
						mensaje = 'El token de ID de Firebase que se proporcionó está vencido.';
						break;
					default:
						mensaje = error.message;
						break;
				}
				mySwal.fire({
					title: 'Error de Autenticación',
					text: mensaje,
					icon: 'error',
					showCloseButton: true,
				});
			});
	};
};
const logoutMyApp = () => {
	return async (dispatch) => {
		await authFirebase.signOut();
		dispatch(notesLogoutCleaningAction());
		dispatch(logoutAction());
	};
};
export { loginAction, logoutMyApp, loginCorreoContrasenia, loginWithGoogle, registerUserEmailAndPassword };
