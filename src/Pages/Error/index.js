import React from 'react';
import {Link} from 'react-router-dom';

import {ErrorPage, TitleWrapper, LinkStyle} from './style.js';

const Game = '<iframe src="https://itch.io/embed-upload/2536539?color=333333" width="980" height="660" frameborder="0"><a href="https://viniciusltda.itch.io/embed-test">Play Embed test on itch.io</a></iframe>';


function Iframe(props){
    return(
        <div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}}/>
        
    );
}

function LoadGame(){
	return(
        <ErrorPage>
            <TitleWrapper>
                <h1>Erro 404</h1>
                <h2>Hey! Essa página não existe, mas já que está aqui, por que não jogar um pouco de Pong?</h2>
                <LinkStyle as={Link} to="/">
                    Voltar à Home
                </LinkStyle>
                
                <Iframe iframe={Game}/>
                
                <h3>Controles: P1(W, S) || P2(Seta pra cima, Seta pra baixo)</h3>

            </TitleWrapper>
            


        </ErrorPage>


	);
}

export default LoadGame;