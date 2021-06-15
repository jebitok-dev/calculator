import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../../components/Display';

test('should render display component', () => {
  render(<Display total="0" />);
  const display = screen.getByTestId('display-panel');
  expect(display).toHaveTextContent('0');
});
