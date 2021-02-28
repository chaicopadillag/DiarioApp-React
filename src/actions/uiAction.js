import { types } from '../types/types';

const setErrorAccion = (error) => ({
	type: types.uiError,
	error: error,
});

const removeErrorAccion = () => ({ type: types.uiRemoveError });

const startLoading = () => ({ type: types.uiStartLoading });
const finishLoading = () => ({ type: types.uiFinishLoading });

export { setErrorAccion, removeErrorAccion, startLoading, finishLoading };
