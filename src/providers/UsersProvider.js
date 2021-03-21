import React, { useState } from 'react';
import { users as usersData } from '../data/users';

export const UsersContext = React.createContext({
    users: [],
    adduser: () => { },
    deleteUser: () => { },
});

const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers)
    }

    const addUser = (values) => {
        const newUser = {
            name: values.name,
            attendance: values.attendance,
            average: values.average,
        }
        setUsers([newUser, ...users])
    }
    return (
        <UsersContext.Provider value={{
            users, addUser, deleteUser
        }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersProvider;
