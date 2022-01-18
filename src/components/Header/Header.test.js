import React from 'react';
import Header from './index';
import renderer from 'react-test-renderer';

it('Header renders correctly', () => {
	
	const tree = renderer.create(

		<Header>Header</Header>

	).toJSON();

	// Create snapshot or generate snapshot if not already created
	expect(tree).toMatchSnapshot();

});