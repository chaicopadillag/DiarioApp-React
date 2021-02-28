import { types } from '../types/types';

const noteInitial = {
	notas: [],
	activo: null,
};
const noteReducer = (estadoNote = noteInitial, accion) => {
	switch (accion.type) {
		case types.noteActive:
			return {
				...estadoNote,
				activo: accion.activo,
			};
		case types.notaAddNewNote:
			return {
				...estadoNote,
				notas: [...estadoNote.notas, accion.nota],
			};
		case types.setNotes:
			return {
				...estadoNote,
				notas: accion.notas,
			};
		case types.notaUpdate:
			return {
				...estadoNote,
				notas: estadoNote.notas.map((note) => (note.id === accion.nota.id ? accion.nota : note)),
			};
		case types.notaDelete:
			return {
				...estadoNote,
				activo: null,
				notas: estadoNote.notas.filter((note) => note.id !== accion.id),
			};
		case types.noteLogoutCleaning:
			return noteInitial;
		default:
			return estadoNote;
	}
};

export default noteReducer;
