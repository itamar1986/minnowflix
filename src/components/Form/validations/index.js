function Validate(values) {
	const errors = {};

	if (values.name.length === 0) {
		errors.name = 'Nome é Obrigatório.';
	}
	
	if (values.category.length === 0) {
		errors.category = 'Categoria é Obrigatório.';
	} 

	if (!values.url.includes('youtube.com')) {
		errors.url = 'Por Favor, coloque uma URL válida.';
	}

	return errors;
}

export function ValidateCat(values) {
	const errors = {};

	if (values.name.length === 0) {
		errors.name = 'Nome é Obrigatório.';
	}

	if (values.description.length === 0) {
		errors.description = 'Descrição é Obrigatório.';
	}

	return errors;
}

export default Validate;
