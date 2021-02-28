import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notaUpdate, uploadFileImage } from '../../actions/noteAction';
import moment from 'moment';

const NoteAppBar = () => {
	const dispatch = useDispatch();
	const { activo: noteActive } = useSelector((state) => state.note);
	const handledNoteSave = () => {
		// dispatch(noteCreate());
		dispatch(notaUpdate(noteActive));
	};
	const handleSelectImage = () => {
		document.querySelector('#fileFoto').click();
	};
	const handleUploadImagen = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(uploadFileImage(file));
		}
	};
	return (
		<div className="notes__appbar animate__animated animate__fadeIn animate__slow">
			<span>{moment().format('D MMMM YYYY')}</span>
			<input type="file" id="fileFoto" style={{ display: 'none' }} onChange={handleUploadImagen} />
			<div>
				<button className="btn" onClick={handleSelectImage}>
					Seleccionar imagen
				</button>
				<button className="btn" onClick={handledNoteSave}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default NoteAppBar;
