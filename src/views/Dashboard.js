import React, { useContext } from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { UsersContext } from '../providers/UsersProvider';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
    const context = useContext(UsersContext)
    return (
        <ViewWrapper>
            <UsersList users={context.users} />
        </ViewWrapper>
    );
}

export default Dashboard;