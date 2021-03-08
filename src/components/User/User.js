import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userData: { average, name, attendance } }) => {
    return (
        <li>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </div>
            <button>x</button>
        </li>
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