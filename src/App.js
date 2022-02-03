import React from 'react';
import Layout from './components/Layout';
import Button from './components/Button';
import Link from './components/Link';
import Label from './components/Label';

const App = () => {
	
	return (

		<>
			<Layout>
				<h1>Hello App</h1>
			
				<Button>Login</Button>

				<Label name="test">Label</Label>
			
				<Link href="https://www.bbc.co.uk" target="_blank">BBC</Link>
			</Layout>
		</>

	);

};

export default App;