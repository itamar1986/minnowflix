import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menus';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);

  flex: 1;

  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) => css`
	padding: 94px 0 0 0;
  `}

`;

function DefaultPage({ children, paddingAll }) {
	return (
		<>
			<Menu />
			<Main paddingAll={paddingAll}>
				{children}
			</Main>
			<Footer />
		</>
	);
}

export default DefaultPage;
