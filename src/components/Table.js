import React, { useState } from 'react';

const Table = () => {
	const [name, setName] = useState('Rajat');
	const [qualification, setQualification] = useState('B.E');
	const [place, setPlace] = useState('Bangalore');

	const handleErase = (e) => {
		setName('');
		setQualification('');
		setPlace('');
	};
	const handleFill = (e) => {
		setName('Rajat');
		setQualification('B.E');
		setPlace('Bangalore');
	};

	return (
		<div className='details'>
			<table className='details-table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Qualification</th>
						<th>Place</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{qualification}</td>
						<td>{place}</td>
					</tr>
				</tbody>
			</table>
			<div className='buttons'>
				<button onClick={handleErase}>Erase Content</button>
				<button onClick={handleFill}>Fill Content</button>
			</div>
		</div>
	);
};

export default Table;
