import authReducer from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Prueba de Auth Reducer', () => {
	test('Debe de retornar por defecto ', () => {
		const authAction = {
			type: 'xxx',
			sesion: {
				uid: '',
				nombre: '',
				correo: '',
			},
		};
		const estadoReducer = authReducer({}, authAction);
		expect(estadoReducer).toEqual({});
	});

	test('Debe de retornar con un usuario ', () => {
		const authAction = {
			type: types.login,
			sesion: {
				uid: 's1d25d2as3d6wdsd232d6ew',
				nombre: 'Code Codero',
				correo: 'code@gmail.com',
			},
		};
		const estadoReducer = authReducer({}, authAction);
		expect(estadoReducer).toEqual(authAction.sesion);
	});

	test('Debe de retornar el estado vacio ', () => {
		const authAction = {
			type: types.logout,
			sesion: {
				uid: 's1d25d2as3d6wdsd232d6ew',
				nombre: 'Code Codero',
				correo: 'code@gmail.com',
			},
		};
		const estadoReducer = authReducer(authAction.sesion, authAction);
		expect(estadoReducer).toEqual({});
	});
});
