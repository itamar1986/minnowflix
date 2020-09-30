import Styled from 'styled-components';

export const FormWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    
    width: 800px;

    margin-left: auto;
    margin-right: auto;
    
`;

export const TitleWrapper = Styled.div`
    text-align: center;
    font-size: 26px;

`;

export const ButtonStyle = Styled.button`
    border: none;
    border-radius: 4px;

    font-weight: bold;
    font-size: 18px;
    
    color: var(--white);
    background-color: #dd0000;

    margin-top: 15px;

    height: 50px;
    width: 140px;

    cursor: pointer;

    transition: opacity .3s;

    &:hover, &:focus {
        opacity: .5;
    }

`;

export const FormFieldWrapper = Styled.div`
    margin-top: 10px;

`;

export const LinkStyle = Styled.a`
    text-decoration: none;

    font-weight: bold;
    
    margin-top: 25px;
    margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;

    transition: opacity .3s;

    &:hover, &:focus {
        opacity: .5;

    }

`;

export const SpanStyle = Styled.span`
    font-size: 11px;

    color: red;
`;

export const LinkWrapper = Styled.div`
    display: flex;
    justify-content: space-between;

`;
