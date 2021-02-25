import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppButton from './AppButton';

describe('AppButton component', () => {
  it('renders an AppButton component', () => {
    render(<AppButton>test</AppButton>);

    const button = screen.getByText('test');

    expect(button).toBeInTheDocument();
  });
});
