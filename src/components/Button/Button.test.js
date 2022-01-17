import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

it('Button renders correctly', () => {
	
	const tree = renderer.create(

		<Button type="button">Login</Button>

	).toJSON();

	// Create snapshot or generate snapshot if not already created
	expect(tree).toMatchSnapshot();

});