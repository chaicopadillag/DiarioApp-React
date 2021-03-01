import { shallow } from 'enzyme';
import { types } from '../../types/types';

describe('Prueba de Files Types', () => {
	test('Dede ser igual el obj types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',
			uiError: '[UIError] UI Error',
			uiRemoveError: '[UIRE] UI Remove Error',
			uiStartLoading: '[UISL] Start Loading',
			uiFinishLoading: '[UIFL] Finish Loading',
			notaAddNewNote: '[NANN] Add Nota New Create',
			notaCreate: '[NC] Nota Create',
			notaUpdate: '[NU] Nota Update',
			notaDelete: '[ND] Nota Delete',
			noteActive: '[NA] Note Active',
			noteFileUrl: '[NFURL] Note File URL',
			noteLogoutCleaning: '[NLC] Logout Cleaning',
			setNotes: '[SN] Set Notes',
		});
	});
});
