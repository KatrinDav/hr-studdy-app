import React from 'react';
import { users } from '../../data/users';
import User from '../User/User';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0, 0.3);
    margin: 20px 0;

`;


const UsersList = () => {
    return (
        <>
            <Wrapper>
                <ul>
                    {users.map((userData) => (
                        <User userData={userData} />
                    ))}

                </ul>
            </Wrapper>
        </>
    );
}

export default UsersList;