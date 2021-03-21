import React from 'react';
import { StyledList } from '../UsersList/UsersList.styles';
import Title from '../../atoms/Title/Title';
import User from '../../molecules/User/User';


const UsersList = ({ users }) => {
    return (
        <>
            <Title>Students list</Title>
            <StyledList>
                {users.map((userData) => (
                    <User
                        userData={userData}
                        key={userData.name} />
                ))}
            </StyledList>

        </>

    );

}






export default UsersList;