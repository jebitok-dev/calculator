import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../../components/Calculator';

it('should match Calculator snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
