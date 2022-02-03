import React from 'react';
import Layout from './components/Layout';
import Button from './components/Button';
import Link from './components/Link';
import TextField from './components/TextField';
import TextArea from './components/TextArea';
import Dropdown from './components/Dropdown';
import List from './components/List';

const App = () => {

	const testOptions = [
		'testone',
		'testtwo',
		'testthree',
	];

	const testList = [
		'testone',
		'testtwo',
		'testthree',
	];
	
	return (

		<>
			<Layout>
				{/*
					<h1>Hello App</h1>
				
					<Button>Login</Button>
				*/}

				<TextField name="dog" label="Dog" />
				<TextField name="cat" label="Cat" />
				<TextArea name="rabbit" rows="10" label="Rabbit" />
				<Dropdown options={testOptions} />

				<List list={testList} type="ol" />
			
				{/* <Link href="https://www.bbc.co.uk" target="_blank">BBC</Link> */}
			</Layout>
		</>

	);

};

export default App;