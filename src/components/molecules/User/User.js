import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper, StyledAvarege, StyledUserName, StyledAttendenceInfo } from './User.styles';

const User = ({ userData: { average, name, attendance } }) => {
    return (
        <Wrapper>
            <StyledAvarege average={average}>{average}</StyledAvarege>
            <div>
                <StyledUserName>{name}</StyledUserName>
                <StyledAttendenceInfo>attendance: {attendance}</StyledAttendenceInfo>
            </div>
            <Button />
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