import renderer from 'react-test-renderer';
import React from 'react';
import Quote from '../../components/Quote';

it('should match the Quote Snapshot', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
