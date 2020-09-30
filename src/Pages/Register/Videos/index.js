import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import DefaultPage from '../../../components/Layout';
import { 
	FormWrapper, FormFieldWrapper, ButtonStyle, TitleWrapper, LinkStyle, LinkWrapper, SpanStyle,
} from './styles';
import FormField from '../../../components/Form';
import useForm from '../../../Hooks/useForm';
import VideosRepository from '../../../repositories/videos';
import CategoriesRepository from '../../../repositories/categories';
import Validate from '../../../components/Form/validations';

function CadastroVideo() {
	const [categories, setCategories] = useState([]);
	const categoriesTitle = categories.map(({ name }) => name);
	const history = useHistory();
	const { values, OnChangeHandler, ClearForm } = useForm({
		name: '',
		url: '',
		category: '',
	});
	const [errors, setErrors] = useState({});

	function validateValues(Values) {
		setErrors(Validate(Values));
	}

	useEffect(() => {
		CategoriesRepository.getAll().then((Categories) => {
			setCategories(Categories);
		});
	}, []);

	useEffect(() => {
		validateValues(values);
	}, [values]);

	return (
		<DefaultPage>
			<TitleWrapper>
				<h1>Cadastro de Video</h1>

			</TitleWrapper>

			<FormWrapper>

				<form onSubmit={function HandleForm(e) {
					e.preventDefault();

					if (errors.name || errors.url || errors.category) {
						alert('Formulário preenchido incorretamente');
					} else {
						const Category = categories
							.find((selectedCategory) => selectedCategory.name === values.category);
	
						VideosRepository.create({
							titulo: values.name,
							url: values.url,
							categoriaId: Category.id,
						}).then(() => {
							history.push('/');
						});
	
						ClearForm(); 
					}
				}}
				>

					<FormFieldWrapper>
						<FormField label="Título do Vídeo" value={values.name} type="text" name="name" onChange={OnChangeHandler} />

						{errors.name && <SpanStyle>{errors.name}</SpanStyle>}

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="URL" value={values.url} type="url" name="url" onChange={OnChangeHandler} />
						
						{errors.url && <SpanStyle>{errors.url}</SpanStyle>}
					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField 
							label="Categoria do Vídeo" 
							value={values.category} 
							type="text" 
							name="category"
							onChange={OnChangeHandler}
							suggestions={categoriesTitle} 
						/>

						{errors.category && <SpanStyle>{errors.category}</SpanStyle>}

					</FormFieldWrapper>

					<ButtonStyle>
						Cadastrar

					</ButtonStyle>
				
				</form>
			
			</FormWrapper>

			<LinkWrapper>
				<LinkStyle as={Link} to="/cadastro/categoria">
					Cadastrar Categorias
				</LinkStyle>
			</LinkWrapper>

		</DefaultPage>
	);
}

export default CadastroVideo;
