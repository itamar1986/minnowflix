import config from '../config';

const videos = `${config.url}/videos`;

function create(videoObject) {
	return fetch(`${videos}?_embed=videos`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(videoObject),
		
	}).then(async (response) => {
		if (response.ok) {
			const resp = await response.json();
			return resp;
		}

		throw new Error('não foi possível carregar os dados.');
	});
}

export default {
	create,
};
