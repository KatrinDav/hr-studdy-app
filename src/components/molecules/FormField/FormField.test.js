import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithProviders } from '../../../helpers/renderWithProviders';



describe('FormField', () => {
    it('renders the component', () => {
        renderWithProviders(<FormField name='name' label='name' id='name' />);
    })
})