import uploadFileCloudinary from '../../helpers/uploadFileCloudinary';
import cloudinary from 'cloudinary';

cloudinary.config({
	cloud_name: 'deygrepht',
	api_key: '632533455435337',
	api_secret: '8wOI9CqefQHVlMeXzHOYrX111Ew',
});

describe('Prueba de subida de imagen', () => {
	test('debe de cargar un archivo y retornar el url', async () => {
		const respuesta = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
		const blob = await respuesta.blob();

		const fileFoto = new File([blob], 'foto.png');
		const url = await uploadFileCloudinary(fileFoto);
		expect(typeof url).toBe('string');

		const segments = url.split('/');
		const imgenId = segments[segments.length - 1].replace('.png', '');
		await cloudinary.v2.api.delete_resources([imgenId], { keep_original: true }, function (error, result) {
			console.log(result, error);
		});
	});
});
