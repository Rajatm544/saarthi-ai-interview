import React, { useState } from 'react';

const Table = () => {
	const [name, setName] = useState('Rajat');
	const [qualification, setQualification] = useState('B.E');
	const [place, setPlace] = useState('Bangalore');

	const handleClick = (e) => {
		setName('');
		setQualification('');
		setPlace('');
	};

	return (
		<div className='details'>
			<table className='details-table'>
				<thead>
					<td>Name</td>
					<td>Qualification</td>
					<td>Place</td>
				</thead>
				<tbody>
					{name && qualification && place && (
						<tr>
							<td>{name}</td>
							<td>{qualification}</td>
							<td>{place}</td>
						</tr>
					)}
				</tbody>
			</table>
			<button onClick={handleClick}>Erase Content</button>
		</div>
	);
};

export default Table;
