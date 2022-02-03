import React from 'react';
import Label from '../Label/';
import './TextArea.css';

const TextArea = ({ label, name, rows, value, placeholder, disabled }) => {
	
	return (

		<div className="form-input">
			<Label name={name}>{label}</Label>

			<textarea {...{name, rows, value, placeholder, disabled}} id={name} />
		</div>

	);

};

export default TextArea;
