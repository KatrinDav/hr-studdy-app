import React, { useContext, useState } from 'react';
import Button from '../components/atoms/Button/Button';
import FormField from '../components/molecules/FormField/FormField';
import Title from '../components/atoms/Title/Title';
import { UsersContext } from '../providers/UsersProvider';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';


const initialFormState = {
    name: '',
    attendance: '',
    average: '',
}

const AddUser = () => {
    const [formValues, setFormValues] = useState(initialFormState);
    const context = useContext(UsersContext);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmitUser = (e) => {
        e.preventDefault();
        context.addUser(formValues);
        setFormValues(initialFormState)
    }
    return (

        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
            <Title>Add new student</Title>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleChange} />
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleChange} />
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleChange} />

            <Button type="submit" >Add</Button>
        </ViewWrapper>
    )

}



export default AddUser;