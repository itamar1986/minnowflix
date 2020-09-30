import React from 'react';
import PropTypes from 'prop-types';

import { InputStyle, LabelStyle, TextAreaStyle } from './styles';

function FormField({
	label, value, type, name, onChange, suggestions,
}) {
	const fieldId = `id_${name}`;

	const hasSuggestions = Boolean(suggestions.length);

	if (label === 'Descrição da Categoria' || label === 'Descrição do Pokémon') {
		return (
			<>
				<LabelStyle htmlFor={fieldId}>
					{label}

					<TextAreaStyle type={type} value={value} name={name} onChange={onChange} />

				</LabelStyle>
			</>
		);
	}

	return (
		<>
			<LabelStyle htmlFor={fieldId}>
				{label}

				<InputStyle 
					type={type} 
					value={value} 
					name={name} 
					onChange={onChange}
					autoComplete="off" 
					list={`suggestionFor_${fieldId}`} 
				/>

			</LabelStyle>

			{hasSuggestions && (
				<datalist id={`suggestionFor_${fieldId}`}>
					{
						suggestions.map((suggestion) => (
							<option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
								{suggestion}
							</option>
						))
					}
				</datalist>

			)}
            
		</>
	);
}

FormField.defaultProps = {
	value: '',
	type: 'text',
	onChange: () => {},
	suggestions: [],
	
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	suggestions: PropTypes.arrayOf(PropTypes.string),

};

export default FormField;
