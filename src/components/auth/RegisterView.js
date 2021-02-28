import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeErrorAccion, setErrorAccion } from '../../actions/uiAction';
import validator from 'validator';
import { registerUserEmailAndPassword } from '../../actions/authAction';

const RegisterView = () => {
	const [formValues, handleChange, reset] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = formValues;

	const dispatch = useDispatch();
	const { mensajeError } = useSelector((estado) => estado.ui);
	const handleRegister = (e) => {
		e.preventDefault();
		if (esValido()) {
			dispatch(registerUserEmailAndPassword(name, email, password));
			reset();
		}
	};
	const esValido = () => {
		if (name.trim().length === 0) {
			dispatch(setErrorAccion('El Nombre es requerido'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setErrorAccion('El correo ingresado no es válido'));
			return false;
		} else if (password.length < 5) {
			dispatch(setErrorAccion('La contraseña debe tener  mínimo 6 caracteres'));
			return false;
		} else if (password2 !== password) {
			dispatch(setErrorAccion('Las contraseñas no coinciden'));
			return false;
		}

		dispatch(removeErrorAccion());

		return true;
	};
	return (
		<>
			<h3 className="auth__title">Registro de Usuario</h3>
			<form method="POST" onSubmit={handleRegister}>
				{mensajeError && <div className="auth__alert-error mb-5">{mensajeError}</div>}
				<input name="name" type="text" placeholder="Nombre" className="auth__input mb-5" autoComplete="off" value={name} onChange={handleChange} />
				<input name="email" type="text" placeholder="Correo" className="auth__input mb-5" autoComplete="off" value={email} onChange={handleChange} />
				<input name="password" type="password" placeholder="Contraseña" className="auth__input mb-5" value={password} onChange={handleChange} />
				<input name="password2" type="password" placeholder="Repetir contraseña" className="auth__input mb-5" value={password2} onChange={handleChange} />
				<button type="submit" className="btn btn-primary btn-block" disabled={false}>
					Registrarse
				</button>

				<Link to="/auth/login" className="link mt-5">
					Ya tengo cuenta, iniciar sesion
				</Link>
			</form>
		</>
	);
};

export default RegisterView;
