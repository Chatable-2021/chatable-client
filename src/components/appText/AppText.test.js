import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppText from './AppText';

describe('AppText component', () => {
  it('renders an AppText component', () => {
    render(<AppText>test</AppText>);

    const text = screen.getByText('test');

    expect(text).toBeInTheDocument();
  });
});
