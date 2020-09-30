import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);

  border: 1px solid var(--white);
  border-radius: 5px;
  box-sizing: border-box;

  cursor: pointer;

  padding: 16px 24px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  
  display: inline-block;

  transition: opacity .3s;
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  @media(max-width: 800px){
    position: fixed;
    left: 0;
    bottom: 0;

    background: var(--primary);
    color: var(--white);

    width: 100%;

    border: none;
    border-radius: 0px;

    text-align: center;

}
`;

export default Button;
