import React from 'react';
import Link from './index';
import renderer from 'react-test-renderer';

it('Link renders correctly', () => {
	
	const tree = renderer.create(

		<Link href="https://www.bbc.co.uk">BBC</Link>

	).toJSON();

	// Create snapshot or generate snapshot if not already created
	expect(tree).toMatchSnapshot();

});