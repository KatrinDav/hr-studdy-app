import React from 'react';
import UsersList from '../components/UsersList/UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f7f8fa;
`;

function Root() {
  return (
    <Wrapper>
      <UsersList />

    </Wrapper>
  );
}

export default Root;
