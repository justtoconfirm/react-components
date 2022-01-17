import React from 'react';
import './Link.css';

const Link = ({ href, target = '', children }) => {

	// Check if the component has the target prop with the value of _blank to render as an external link
	const isExternalLink = target && (target.includes('_blank'));

	const renderAsExternalLink = () =>
		<a {...{href, target}} rel="noopener noreferrer" className="link">{children}</a>  

	const renderAsLink = () =>
		<a href={href} className="link">{children}</a> 
	
	return (

		// If the link component has a target prop with a value with a value of _blank, call the method to render as external link
		isExternalLink ? renderAsExternalLink() : renderAsLink()

	);

};

export default Link;