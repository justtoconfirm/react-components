import React from 'react';
import './Label.css';

const Label = ({ name, children }) => {

	return (

		<label htmlFor={name}>{children}</label>

	);

};

export default Label;