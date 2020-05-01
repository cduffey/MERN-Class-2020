import React from 'react';

const PersonCard = props => {
	return(	
			<div>
				<table>
					<tr><th class="props_header">{props.lastName}, {props.firstName}</th></tr>
					<tr><td class="props_data">Age: {props.age}</td></tr>
					<tr><td class="props_data">Hair Color: {props.hairColor}</td></tr>
				</table>				
			</div>
	)
}

export default PersonCard;