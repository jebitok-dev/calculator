import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../../components/buttonPanel';
import '@testing-library/jest-dom';

test('should render button panel', () => {
  render(<ButtonPanel name="x" />);
  const buttonPanel = screen.getByTestId('button-panel');
  expect(buttonPanel).toHaveTextContent('x');
});
