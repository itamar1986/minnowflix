import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Register/Videos';
import CadastroCategorias from './Pages/Register/Categories';
import LoadGame from './Pages/Error';
import CadastroPokemon from './Pages/Register/Pokemon';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/cadastro/video' component={CadastroVideo}/>

			<Route path='/' component={Home} exact/>

			<Route path="/cadastro/categoria" component={CadastroCategorias}/>
			
			<Route path="/cadastro/pokemon" component={CadastroPokemon}/>

			<Route component={LoadGame}/>

		</Switch>

	</BrowserRouter>,

	document.getElementById('root')
);
