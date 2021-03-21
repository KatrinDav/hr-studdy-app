import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px ;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    outline: none;
    font-weight: bold;
    color:  ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    margin-top: 15px;

`;


export default Button;