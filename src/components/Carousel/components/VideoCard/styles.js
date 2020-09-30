import styled from 'styled-components';

export const VideoCardContainer = styled.a`
	height: 197px;
	width: 298px;

	border: 2px solid;
	border-radius: 6px;

	display: inline-block;

	background-image: ${({url}) => `url(${url})`};
	background-size: cover;
	background-position: center;

	text-align: center;

	transition: transform .3s;

	&:hover, &:focus{
		transform: scale(0.8, 0.8);
		
	}
`;
