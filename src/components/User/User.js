import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgray;

    }
`;

const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: #c0c7d6;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: #fff;
`;

const User = ({ userData: { average, name, attendance } }) => {
    return (
        <Wrapper>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </div>
            <StyledButton>x</StyledButton>
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