import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export default Wrapper;