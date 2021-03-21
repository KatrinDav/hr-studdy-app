import React from 'react';
import AddUser from '../views/AddUser';
import Dashboard from '../views/Dashboard';
import GlobalStyle from '../assets/GlobalStyle';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import UsersProvider from '../providers/UsersProvider';
import Wrapper from './Root.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/add-user" >
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
