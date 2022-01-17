import React from 'react';
import './Button.css';

const Button = props => {

	// Destructure the props and pass into the function as an object
	const {
		type = 'button',
		url = '',
		onClick,
		children
	} = props;

	// Check if the component has the url prop value that match those listed
	const isAnchorLink = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'));

	const renderAsLink = () => 
		<a href={url} role="button" className="btn">{children}</a>

	const renderAsButton = () => 
		<button {...{type, onClick}} className="btn">{children}</button>
	
	return (

		// If the button component has a url prop with a value call the method to render as a link, or render as a button
		isAnchorLink ? renderAsLink() : renderAsButton()

	);

};

export default Button;