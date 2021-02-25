import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppInput from './AppInput';

describe('AppInput component', () => {
  it('tests that the AppInput renders', () => {
    render(<AppInput defaultValue='7891' />);

    const input = screen.getByDisplayValue('7891');

    expect(input).toBeInTheDocument();
  });
});
