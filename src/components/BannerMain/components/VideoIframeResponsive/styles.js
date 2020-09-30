import styled from 'styled-components';

export const VideoContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 56.25%;	
	@media(max-width: 800px){
		display: none;
	}
`;

export const ResponsiveIframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;

`;