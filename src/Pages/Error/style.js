import Styled from 'styled-components';

export const ErrorPage = Styled.div`
    background-color: #141414;

`;

export const TitleWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: var(--white);

    
`;

export const LinkStyle = Styled.a`
    color: var(--white);

    text-decoration: none;
    font-weight: bold;

    margin-bottom: 10px;

    transition: opacity .3s;

    &:hover, &:focus {
        opacity: .5;

    }

`;