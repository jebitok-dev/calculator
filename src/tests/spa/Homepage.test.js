import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../../components/Homepage';

it('should match the Homepage snapshot', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
