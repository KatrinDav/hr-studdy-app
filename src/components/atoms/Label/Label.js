import styled from 'styled-components';

const Label = styled.label`
    font-family: Montserrat;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 7px;

`;
export default Label;