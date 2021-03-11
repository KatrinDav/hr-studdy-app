import React from 'react';
import { StyledButton } from './Button.styles';
import { ReactComponent as DeleteIcon } from '../../../assets/icon.svg';


const Button = () => {
    return (
        <StyledButton>
            <DeleteIcon />
        </StyledButton>
    );
}

export default Button;