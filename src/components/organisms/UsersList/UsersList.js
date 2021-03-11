import React from 'react';
import { users } from '../../../data/users';
import User from '../../molecules/User/User';
import { Wrapper } from './UsersList.styles';


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