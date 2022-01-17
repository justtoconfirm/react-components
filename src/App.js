import react from 'react';
import Button from './components/Button';
import Link from './components/Link';

const App = () => {
	
	return (

		<>
			<h1>Hello App</h1>
			
			<Button>Login</Button>
			
			<Link href="https://www.bbc.co.uk" target="_blank">BBC</Link>
		</>

	);

};

export default App;