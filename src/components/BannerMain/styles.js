import styled from 'styled-components';

export const BannerMainContainer = styled.section`
	height: 80vh;
	color: var(--white);
	position: relative;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
	background-size: cover;
	background-position: center;
	
	@media(max-width: 800px){
		height: auto;
		min-height: 50vh;
	}


	&:after, &:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		height: 20%;
		margin: auto;
	}

	&:before{
		top: 0;
		height: 100%;
		background: rgba(0,0,0,.5);
	}

	&:after{
		bottom: 0;
		background: linear-gradient(0deg, #141414 0%, transparent 100%);
	}
`;

export const ContentAreaContainer = styled.section`
	margin-left: 5%;
	margin-right: 5%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	@media(max-width: 800px){
		padding-top: 100px;
		flex-direction: column;
	}
`;

ContentAreaContainer.Item = styled.div`
	width: 50%;
	margin-bottom: 50px;
	@media(max-width: 800px){
		width: 100%;
	}
`;

ContentAreaContainer.Category = styled.h1`
`;

ContentAreaContainer.Title = styled.h2`
	font-weight: 300;
	font-size: 40px;
	line-height: 1;
	margin-top: 0;
	margin-bottom: 32px;
	@media(max-width: 800px){
		font-weight: 32px;
		text-align: center;
	}
`;

ContentAreaContainer.Description = styled.p`
	@media(max-width: 800px){
		display: none;
	}
`;

export const WatchButton = styled.button`
	display: none;
	@media(max-width: 800px){
		display: block;
		background-color: var(--white);
		color: var(--grayDark);
		cursor: pointer;
		border-radius: 4px;
		border: none;
		padding: 16px 24px;
		margin: auto;
		font-weight: bold;
		font-size: 16px;
	}
`;
