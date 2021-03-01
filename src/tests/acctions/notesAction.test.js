/**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { noteCreate } from '../../actions/noteAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
	auth: {
		uid: 'Testing',
	},
});

describe('Pruebas de las acciones de notas', () => {
	test('debe de crear una nueva nota noteCreate', async () => {
		await store.dispatch(noteCreate());
	}, 10000);
});
