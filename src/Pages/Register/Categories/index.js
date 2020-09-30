import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import DefaultPage from '../../../components/Layout';
import FormField from '../../../components/Form';
import {
	FormWrapper, TitleWrapper, FormFieldWrapper, ButtonStyle, LinkStyle, LinkWrapper, SpanStyle,
} from './styles';
import useForm from '../../../Hooks/useForm';
import CategoriesRepository from '../../../repositories/categories';
import { ValidateCat } from '../../../components/Form/validations';

function CadastroCategorias() {
	const { values, OnChangeHandler, ClearForm } = useForm({
		name: '',
		description: '',
		color: '',
		url: '',
	});
	const [category, setCategory] = useState([]);
	const history = useHistory();

	const [errors, setErrors] = useState({});

	function validateValues(Values) {
		setErrors(ValidateCat(Values));
	}

	useEffect(() => {
		const url = window.location.hostname.includes('localhost')
			? 'http://localhost:8080/categorias'
			: 'https://minnowflix.herokuapp.com/categorias';

		fetch(url).then(async (response) => {
			const resp = await response.json();

			setCategory([
				...resp,

			]);
		});
	}, []);

	useEffect(() => {
		validateValues(values);
	}, [values]);

	return (
		<DefaultPage>
			<TitleWrapper>
				<h1>
					Cadastro da Categoria:
					{values.name}

				</h1>

			</TitleWrapper>

			<FormWrapper>

				<form onSubmit={function HandleForm(e) {
					e.preventDefault();

					if (errors.name || errors.description) {
						alert('Formulário preenchido incorretamente.');
					} else {
						CategoriesRepository.create({
							name: values.name,
							link_extra: {
								description: values.description,
								url: values.url,
							},
							color: values.color,
						}).then(() => {
							history.push('/');
						});
	
						setCategory([...category, values]);
	
						ClearForm(); 
					}
				}}
				>

					<FormFieldWrapper>
						<FormField label="Nome da Categoria" value={values.name} type="text" name="name" onChange={OnChangeHandler} />

						{errors.name && <SpanStyle>{errors.name}</SpanStyle>}

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Descrição da Categoria" value={values.description} type="text" name="description" onChange={OnChangeHandler} />

						{errors.description && <SpanStyle>{errors.description}</SpanStyle>}

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Cor da Categoria" value={values.color} type="color" name="color" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Url da Categoria (Não obrigatório)" value={values.url} type="url" name="url" onChange={OnChangeHandler} />

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

			<LinkWrapper>
				<LinkStyle as={Link} to="/">
					Voltar à Home

				</LinkStyle>

				<LinkStyle as={Link} to="/cadastro/pokemon">
					Cadastrar Pokémons

				</LinkStyle>

			</LinkWrapper>

		</DefaultPage>
	);
}

export default CadastroCategorias;
