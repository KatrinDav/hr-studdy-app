import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAvarege, StyledUserName, StyledAttendenceInfo } from './User.styles';
import { UsersContext } from '../../../providers/UsersProvider';

const User = ({ userData: { average, name, attendance } }) => {
    const context = useContext(UsersContext)
    return (
        <Wrapper>
            <StyledAvarege average={average}>{average}</StyledAvarege>
            <div>
                <StyledUserName>{name}</StyledUserName>
                <StyledAttendenceInfo>attendance: {attendance}</StyledAttendenceInfo>
            </div>
            <DeleteButton onClick={() => context.deleteUser(name)} />
        </Wrapper>
    );
}

User.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    })
}

export default User;