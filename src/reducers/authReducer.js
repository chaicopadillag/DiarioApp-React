import { types } from '../types/types';

const authReducer = (estado = {}, accion) => {
	switch (accion.type) {
		case types.login:
			return accion.sesion;
		case types.logout:
			return {};
		default:
			return estado;
	}
};

export default authReducer;
