import React, { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import User from '../../molecules/User/User';
import { Wrapper } from './UsersList.styles';


const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const mockAPI = (success) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (usersData) {
                    resolve([...usersData])
                } else {
                    reject({ message: 'Error' })
                }
            }, 2000)
        })
    }

    useEffect(() => {
        setIsLoading(true);
        mockAPI()
            .then(data => {
                setUsers(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers)
    }
    return (
        <Wrapper>
            <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
            <ul>
                {users.map((userData) => (
                    <User
                        userData={userData}
                        deleteUser={deleteUser}
                        key={userData.name} />
                ))}

            </ul>
        </Wrapper>

    );

}






export default UsersList;