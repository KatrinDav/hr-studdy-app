import styled from 'styled-components';

export const StyledButton = styled.button`
width: 25px;
height: 25px;
background-color: ${({ theme }) => theme.colors.grey};
border-radius: 50px;
border: none;
outline: none;
cursor: pointer;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 30px;



svg{
    height: 100%;
    width: 100%;

}
`;
