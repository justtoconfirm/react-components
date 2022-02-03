import React from 'react';
import Label from '../Label/';
import './TextField.css';

const TextField = ({ label, type = 'text', name, value, placeholder, disabled }) => {

	return (

		<div className="form-input">
			<Label name={name}>{label}</Label>
			
			<input {...{type, name, value, placeholder, disabled}} id={name} />
		</div>

	);

};

export default TextField;