import Styled from 'styled-components';

export const LogoImage = Styled.img`
    max-width: 168px;

    @media (max-width: 800){
        max-width: 105px;

    }
`;

export const MenuWrapper = Styled.nav`
    background: var(--black);
    
    width: 100%;
    height: 94px;

    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;

    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 2px solid red;

    @media(max-width: 800px){
        height: 40px;
        justify-content: center;

    }

`;
