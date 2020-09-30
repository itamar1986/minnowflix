import Styled from 'styled-components';

export const InputStyle = Styled.input`
    font-size: 22px;
    font-weight: normal;
    line-height: 2;

    width: 100%;

    margin-top: 5px;

    border: none;
    border-radius: 4px;

    
    &:focus{
        outline-style: solid;
        outline-color: red;
        outline-width: 1px;

    }

`;

export const TextAreaStyle = Styled.textarea`
    width: 100%;
    height: 150px;

    border: none;
    border-radius: 4px;
    resize: none;

    font-size: 22px;
    font-weight: normal;

    margin-top: 5px;

    &:focus{
        outline-style: solid;
        outline-color: red;
        outline-width: 1px;

    }    

`;

export const LabelStyle = Styled.label`
    font-weight: bold;
    font-size: 20px;

`;
