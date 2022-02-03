import React from 'react';
import './List.css';

const List = ({ type = 'ul', list }) => {

	// Loop over an object to map to an individual item in the list and set an unique index/key
	const listItems = list.map((item, index) =>
		<li key={index}>{item}</li>
	);

	// Check if the component has the type prop with the value of ol to render as an ordered list
	const listType = type && (type.includes('ol'));

	const renderUnorderedList = () =>
		<ul>{listItems}</ul>

	const renderOrderedList = () =>
		<ol>{listItems}</ol>

	return (

		// If the type prop has a value of 'ol' render as an ordered list, if not, render as an unordered list
		listType ? renderOrderedList() : renderUnorderedList()

	);

};

export default List;