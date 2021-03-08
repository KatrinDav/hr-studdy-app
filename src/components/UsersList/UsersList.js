import React from 'react';
import { users } from '../../data/users';
import User from '../User/User';

const UsersList = () => {
    return (
        <>
            <div>
                <ul>
                    {users.map((userData) => (
                        <User userData={userData} />
                    ))}

                </ul>
            </div>
        </>
    );
}

export default UsersList;