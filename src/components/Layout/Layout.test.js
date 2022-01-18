import React from 'react';
import Layout from './index';
import renderer from 'react-test-renderer';

it('Layout renders correctly', () => {
	
	const tree = renderer.create(

		<Layout>Layout</Layout>

	).toJSON();

	// Create snapshot or generate snapshot if not already created
	expect(tree).toMatchSnapshot();

});