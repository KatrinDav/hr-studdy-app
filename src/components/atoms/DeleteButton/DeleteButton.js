import React from 'react';
import { StyledDeleteButton } from './DeleteButton.styles';
import { ReactComponent as DeleteIcon } from '../../../assets/icon.svg';


const DeleteButton = (props) => {
    return (
        <StyledDeleteButton {...props} >
            <DeleteIcon />
        </StyledDeleteButton>
    );
}

export default DeleteButton;