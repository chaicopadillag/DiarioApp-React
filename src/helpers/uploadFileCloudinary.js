import Swal from 'sweetalert2';

const uploadFileCloudinary = async (file) => {
	const url = 'https://api.cloudinary.com/v1_1/deygrepht/upload';
	try {
		const frmData = new FormData();
		frmData.append('upload_preset', 'diario-app-react');
		frmData.append('file', file);
		const respuesta = await fetch(url, {
			method: 'POST',
			body: frmData,
		});

		if (!respuesta.ok) {
			throw {
				code: respuesta.status,
				statusText: respuesta.statusText,
			};
		}

		const json = await respuesta.json();
		return json.secure_url;
	} catch (error) {
		Swal.fire('Error al Subir Imagen', `Error en: ${JSON.stringify(error)}`, 'error');
	}
};

export default uploadFileCloudinary;
