import React, {Component} from 'react';

class PersonCard extends Component {
	render() {
		return (
			<div>
				<table>
					<tr><th class="props_header">{this.props.lastName}, {this.props.firstName}</th></tr>
					<tr><td class="props_data">Age: {this.props.age}</td></tr>
					<tr><td class="props_data">Hair Color: {this.props.hairColor}</td></tr>
				</table>				
			</div>
		);
	}
}

export default PersonCard;