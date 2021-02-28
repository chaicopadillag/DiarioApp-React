import React from 'react';
import { useSelector } from 'react-redux';
import DiarioItem from './DiarioItem';

const DiariosList = () => {
	const { notas } = useSelector((state) => state.note);
	return (
		<div className="diarios__lista animate__animated animate__fadeIn animate__slow">
			{notas.map((note) => (
				<DiarioItem key={note.id} {...note} />
			))}
		</div>
	);
};

export default DiariosList;
