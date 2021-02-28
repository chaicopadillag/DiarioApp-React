import { types } from '../types/types';

const estadoInicial = {
	cargando: false,
	mensajeError: null,
};
const uiReducer = (estado = estadoInicial, accion) => {
	switch (accion.type) {
		case types.uiError:
			return {
				...estado,
				mensajeError: accion.error,
			};
		case types.uiRemoveError:
			return {
				...estado,
				mensajeError: null,
			};
		case types.uiStartLoading:
			return {
				...estado,
				cargando: true,
			};
		case types.uiFinishLoading:
			return {
				...estado,
				cargando: false,
			};
		default:
			return estado;
	}
};

export default uiReducer;
