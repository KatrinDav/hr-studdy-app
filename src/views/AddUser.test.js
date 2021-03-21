import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddUser from '../views/AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from '../helpers/renderWithProviders';



describe('FormField', () => {
    it('renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Adam' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
        fireEvent.click(screen.getByText('Add'))
        screen.getByText('Adam')
    })
})