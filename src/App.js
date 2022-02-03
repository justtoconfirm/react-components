import React from 'react';
import Layout from './components/Layout';
import Button from './components/Button';
import Link from './components/Link';
import TextField from './components/TextField';

const App = () => {
	
	return (

		<>
			<Layout>
				{/*
					<h1>Hello App</h1>
				
					<Button>Login</Button>
				*/}

				<TextField name="dog" label="Dog" />
				<TextField name="cat" label="Cat" />
			
				{/* <Link href="https://www.bbc.co.uk" target="_blank">BBC</Link> */}
			</Layout>
		</>

	);

};

export default App;