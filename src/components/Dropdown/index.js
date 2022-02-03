import React from 'react';
import Label from '../Label/';

const Dropdown = ({ label, name, value, disabled, options }) => {
	
	return (

		<>

			<Label name={name}>{label}</Label>

			<select {...{name, value, disabled}} id={name}>
				{options.map((option) => (
					<option key={option.value}>{option.label}</option>
				))}
			</select>

		</>

	);

};

export default Dropdown;