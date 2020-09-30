import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultPage from '../../../components/Layout';
import FormField from '../../../components/Form';
import {
	FormWrapper, TitleWrapper, FormFieldWrapper, ButtonStyle, LinkStyle, 
} from './styles';
import useForm from '../../../Hooks/useForm';

function CadastroPokemon() {
	const initialValues = {
		name: 'Torterra',
		description: 'Pokémon Massa esse.',
		type: 'Grama',
	};

	const { values, OnChangeHandler, ClearForm } = useForm(initialValues);
	const [category, setCategory] = useState([]);

	return (
		<DefaultPage>
			<TitleWrapper>
				<h1>
					Cadastro do Pokémon:
					{values.name}
				</h1>

			</TitleWrapper>

			<FormWrapper>

				<form onSubmit={function HandleForm(e) {
					e.preventDefault();

					setCategory([
						...category,
						values,
					]);

					ClearForm();
				}}
				>

					<FormFieldWrapper>
						<FormField label="Nome do Pokémon" value={values.name} type="text" name="name" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Descrição do Pokémon" value={values.description} type="text" name="description" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Tipo do Pokémon" value={values.type} type="text" name="type" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<ButtonStyle>
						Cadastrar

					</ButtonStyle>

				</form>

				<ul>
					{category.map((categories) => (
						<li key={`${categories.name}`}>
							{categories.name}
						</li>
					))}
				</ul>

			</FormWrapper>

			<LinkStyle as={Link} to="/">
				Voltar à Home.
			</LinkStyle>

		</DefaultPage>
	);
}

export default CadastroPokemon;
