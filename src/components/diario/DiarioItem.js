import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setNoteActiveAction } from '../../actions/noteAction';

const DiarioItem = ({ id, titulo, contenido, fecha, url }) => {
	const noteFecha = moment(fecha);
	const dispatch = useDispatch();
	const handSelectItemNote = () => {
		dispatch(setNoteActiveAction({ id, titulo, contenido, fecha, url }));
	};
	return (
		<div className="diario__item animate__animated animate__fadeIn animate__slow" onClick={handSelectItemNote}>
			{url && <div className="diario__entry_picture" style={{ backgroundImage: `url(${url})` }}></div>}
			<div className="diario__contenido_diario">
				<p className="diario_titulo">{titulo}</p>
				<p className="diario_descripcion">{`${contenido.substring(0, 80)} ...`}</p>
			</div>
			<div className="diario__fecha_box">
				<span>{noteFecha.format('dddd')}</span>
				<h6>{noteFecha.format('Do')}</h6>
			</div>
		</div>
	);
};

DiarioItem.propTypes = {
	id: PropTypes.string.isRequired,
	titulo: PropTypes.string.isRequired,
	contenido: PropTypes.string.isRequired,
	fecha: PropTypes.number.isRequired,
};

export default DiarioItem;
