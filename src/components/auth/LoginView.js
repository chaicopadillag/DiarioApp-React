import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginCorreoContrasenia, loginWithGoogle } from '../../actions/authAction';
import validator from 'validator';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

const LoginView = () => {
	const [formValues, handleChange, reset] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (esValidoCorreoPassword()) {
			dispatch(loginCorreoContrasenia(email, password));
			reset();
		}
	};

	const handleLoginGoogle = () => {
		dispatch(loginWithGoogle());
	};
	const esValidoCorreoPassword = () => {
		if (!validator.isEmail(email)) {
			mySwal.fire({
				title: 'Error',
				text: 'Ingrese un correo válido',
				icon: 'error',
				showCloseButton: true,
				// confirmButtonColor: '#f27474',
			});
			return false;
		} else if (password === '') {
			mySwal.fire({
				title: 'Error',
				text: 'La contraseña en requerida',
				icon: 'error',
				showCloseButton: true,
				// confirmButtonColor: '#f27474',
			});
			return false;
		}
		return true;
	};

	const { cargando } = useSelector((estadoUI) => estadoUI.ui);
	return (
		<>
			<h3 className="auth__title">Inicio de Sesión</h3>
			<form method="POST" onSubmit={handleSubmit}>
				<input name="email" type="text" placeholder="Correo" className="auth__input mb-5" autoComplete="off" onChange={handleChange} value={email} />
				<input name="password" type="password" placeholder="Contraseña" className="auth__input mb-5" onChange={handleChange} value={password} />
				<button type="submit" className="btn btn-primary btn-block" disabled={cargando}>
					Iniciar Sesión
				</button>
				<div className="auth__social-networks">
					<p className="mb-1"> - Ó -</p>
					<div className="google-btn" onClick={handleLoginGoogle}>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Iniciar con Google</b>
						</p>
					</div>
				</div>
				<Link to="/auth/register" className="link">
					Registrarse ahora
				</Link>
			</form>
		</>
	);
};

export default LoginView;
