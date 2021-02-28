import { db } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import loadNotes from '../helpers/loadNotes';
import { types } from '../types/types';
import uploadFileCloudinary from '../helpers/uploadFileCloudinary';

const noteCreate = () => {
	return async (dispatch, getStage) => {
		const { uid } = getStage().auth;
		const nota = {
			titulo: '',
			contenido: '',
			fecha: new Date().getTime(),
		};
		const doc = await db.collection(`${uid}/diario/notas`).add(nota);
		dispatch(setNoteActiveAction({ id: doc.id, ...nota }));
		dispatch(addNoteCreateAction({ id: doc.id, ...nota }));
	};
};
const addNoteCreateAction = (nota) => ({
	type: types.notaAddNewNote,
	nota,
});
const notaUpdate = (nota) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		if (!nota.url) {
			delete nota.url;
		}
		const newNota = { ...nota };
		delete newNota.id;
		await db.doc(`${uid}/diario/notas/${nota.id}`).update(newNota);
		dispatch(notaUpdateAction(nota));
		Swal.fire('¡Buen trabajo!', 'Se ha actualizado correctamente', 'success');
	};
};

const notaUpdateAction = (nota) => ({
	type: types.notaUpdate,
	nota,
});

const setNoteActiveAction = (note) => ({
	type: types.noteActive,
	activo: {
		...note,
	},
});

const setNotasAction = (notes) => ({
	type: types.setNotes,
	notas: notes,
});
const setNotas = (uid) => {
	return async (dispatch) => {
		const notas = await loadNotes(uid);
		dispatch(setNotasAction(notas));
	};
};

const uploadFileImage = (file) => {
	return async (dispatch, getStage) => {
		Swal.fire({
			title: 'Subiendo imagen',
			text: 'Por favor espere...',
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});
		const noteActive = getStage().note.activo;
		const fileUrlImage = await uploadFileCloudinary(file);
		dispatch(notaUpdate({ ...noteActive, url: fileUrlImage }));
		dispatch(setNoteActiveAction({ ...noteActive, url: fileUrlImage }));
		Swal.close();
	};
};

const deleteNote = (id) => {
	return async (dispatch, getStage) => {
		const { uid } = getStage().auth;
		await db.doc(`${uid}/diario/notas/${id}`).delete();
		dispatch(deleteNoteAction(id));
		Swal.fire('¡Buen trabajo!', 'Se ha eliminado correctamente', 'success');
	};
};

const deleteNoteAction = (id) => ({
	type: types.notaDelete,
	id,
});

const notesLogoutCleaningAction = () => ({
	type: types.noteLogoutCleaning,
});

export { noteCreate, setNotas, setNoteActiveAction, notaUpdate, uploadFileImage, deleteNote, notesLogoutCleaningAction };
