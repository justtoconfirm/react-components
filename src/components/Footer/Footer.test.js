import React from 'react';
import Footer from './index';
import renderer from 'react-test-renderer';

it('Footer renders correctly', () => {
	
	const tree = renderer.create(

		<Footer>Footer</Footer>

	).toJSON();

	// Create snapshot or generate snapshot if not already created
	expect(tree).toMatchSnapshot();

});