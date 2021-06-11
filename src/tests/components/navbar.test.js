import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/navbar';

test('should render navbar component', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const navbar = screen.getAllByTestId('navbar');
  expect(navbar[0]).toHaveTextContent('Math Magicians');
  expect(navbar[0]).toHaveTextContent('Home');
  expect(navbar[0]).toHaveTextContent('Calculator');
  expect(navbar[0]).toHaveTextContent('Quote');
});
