import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

const DiarioShow = () => {
	return (
		<div className="diario-show__main animate__animated animate__fadeIn animate__slow">
			<p className="mb-5">
				Crea una nueva Nota
				<br />Ó seleccione una existente.
			</p>
			<FontAwesomeIcon icon={faIdCardAlt} />
		</div>
	);
};

export default DiarioShow;
