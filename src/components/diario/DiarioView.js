import React from 'react';
import Sidebar from './Sidebar';
import DiarioShow from './DiarioShow';
import NoteView from '../notes/NoteView';
import { useSelector } from 'react-redux';

const DiarioView = () => {
	const { activo } = useSelector((state) => state.note);
	return (
		<div className="diario__main-content animate__animated animate__fadeIn animate__slow">
			<Sidebar />
			<main>{activo ? <NoteView /> : <DiarioShow />}</main>
		</div>
	);
};

export default DiarioView;
