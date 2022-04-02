import React from 'react';

const List = ({ items }) => {
	return (
			<ul>
				{items.map(i => <li key={i.key}>{i.name}</li>)}
			</ul>
	);
};

export default List;