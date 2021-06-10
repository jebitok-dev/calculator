import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../../components/buttons';

it('renders button correctly', () => {
  render(<Button name="3" />);
  const button = screen.getByTestId('button');
  expect(button).toHaveTextContent('3');
});
