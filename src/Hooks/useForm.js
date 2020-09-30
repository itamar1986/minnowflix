import { useState } from 'react';

function useForm(initialValues) {
	const [values, setValues] = useState(initialValues);

	function SetValue(key, value) {
		setValues({
			...values,
			[key]: value,

		});
	}

	function OnChangeHandler(e) {
		SetValue(e.target.getAttribute('name'),
			e.target.value);
	}

	function ClearForm() {
		setValues(initialValues);
	}

	return {
		values,
		OnChangeHandler,
		ClearForm,
	};
}

export default useForm;
