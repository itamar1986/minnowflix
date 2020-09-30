import config from '../config';

const categories = `${config.url}/categorias`;

function create(CategoryObject) {
	return fetch(`${categories}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(CategoryObject),
		
	}).then(async (response) => {
		if (response.ok) {
			const resp = await response.json();
			return resp;
		}

		throw new Error('não foi possível carregar os dados.');
	});
}

function getAllVideos() {
	return fetch(`${categories}?_embed=videos`).then(async (response) => {
		if (response.ok) {
			const resp = await response.json();
			return resp;
		}

		throw new Error('não foi possível carregar os dados.');
	});
}

function getAll() {
	return fetch(`${categories}`).then(async (response) => {
		if (response.ok) {
			const resp = await response.json();
			return resp;
		}

		throw new Error('não foi possível carregar os dados.');
	});
}

export default {
	getAllVideos,
	getAll,
	create,
};
