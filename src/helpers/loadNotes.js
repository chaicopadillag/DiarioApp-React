import { db } from '../firebase/firebaseConfig';

const loadNotes = async (uid) => {
	const notesSnap = await db.collection(`${uid}/diario/notas`).get();
	const notas = notesSnap.docs.map((note) => ({
		id: note.id,
		...note.data(),
	}));
	return notas;
};

export default loadNotes;
