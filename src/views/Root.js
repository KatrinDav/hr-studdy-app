import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/GlobalStyle';
import { theme } from '../assets/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />

      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
