const url = window.location.hostname.includes('localhost')
	? 'http://localhost:8080'
	: 'https://minnowflix.vercel.app';

export default {
	url,
};
