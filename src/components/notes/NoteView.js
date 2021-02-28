import React, { useEffect, useRef } from 'react';
import NoteAppBar from './NoteAppBar';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { setNoteActiveAction, deleteNote } from '../../actions/noteAction';

const NoteView = () => {
	const dispatch = useDispatch();

	const noteActive = useSelector((state) => state.note.activo);
	const [formValues, handleChange, reset] = useForm({ ...noteActive });
	const { titulo, contenido, id } = formValues;

	const activeID = useRef(noteActive.id);

	useEffect(() => {
		if (noteActive.id !== activeID.current) {
			reset(noteActive);
			activeID.current = noteActive.id;
		}
	}, [noteActive, reset]);

	useEffect(() => {
		dispatch(setNoteActiveAction(formValues));
	}, [formValues, dispatch]);
	const handleDelete = () => {
		dispatch(deleteNote(id));
	};
	return (
		<div className="note__main-content animate__animated animate__fadeIn animate__slow">
			<NoteAppBar />
			<form className="notes__content">
				<input type="text" placeholder="Titulo de Hitoria" className="notes__title-input" autoComplete="off" name="titulo" onChange={handleChange} value={titulo} />
				<textarea className="notes__textarea" placeholder="Escribe tu historia" name="contenido" value={contenido} onChange={handleChange}></textarea>
				{noteActive.url && (
					<div className="notes__img">
						<img src={noteActive.url} alt={titulo} />
					</div>
				)}
			</form>
			<button className="btn btn-delete" onClick={handleDelete}>
				Eliminar
			</button>
		</div>
	);
};
export default NoteView;
