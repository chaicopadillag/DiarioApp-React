import { finishLoading, removeErrorAccion, setErrorAccion, startLoading } from '../../actions/uiAction';
import { types } from '../../types/types';

describe('Prueba de Actions UI', () => {
	test('deben de retorna un objeto', () => {
		const setErrorAccionTest = setErrorAccion('ERROR NOUT FOUND');
		const removeErrorAccionTest = removeErrorAccion();
		const startLoadingTest = startLoading();
		const finishLoadingTest = finishLoading();

		expect(setErrorAccionTest).toEqual({ type: types.uiError, error: 'ERROR NOUT FOUND' });
		expect(removeErrorAccionTest).toEqual({ type: types.uiRemoveError });
		expect(startLoadingTest).toEqual({ type: types.uiStartLoading });
		expect(finishLoadingTest).toEqual({ type: types.uiFinishLoading });
	});
});
