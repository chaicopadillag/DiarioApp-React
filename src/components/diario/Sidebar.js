import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlus } from '@fortawesome/free-solid-svg-icons';
import DiariosList from './DiariosList';
import { useDispatch, useSelector } from 'react-redux';
import { logoutMyApp } from '../../actions/authAction';
import { noteCreate } from '../../actions/noteAction';
const Sidebar = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutMyApp());
	};
	const { nombre } = useSelector((state) => state.auth);
	const handleNewNote = () => {
		dispatch(noteCreate());
	};
	return (
		<aside className="diario__sidebar animate__animated animate__fadeIn animate__slow">
			<div className="diario__sidebar-navbar">
				<h3>
					<FontAwesomeIcon icon={faMoon} />
					<span> {nombre}</span>
				</h3>
				<button className="btn" onClick={handleLogout}>
					Salir
				</button>
			</div>
			<div className="diario__new-entry">
				<button className="btn btn-block btn-primary" onClick={handleNewNote}>
					<FontAwesomeIcon icon={faPlus} /> Agregar entrada
				</button>
			</div>
			<DiariosList />
		</aside>
	);
};

export default Sidebar;
