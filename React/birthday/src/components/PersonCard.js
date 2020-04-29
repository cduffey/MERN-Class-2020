import React, {Component} from 'react';

const Button = (props) => {
	return (
		<button onClick={props.click}>Birthday</button>
	)
}

class PersonCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			age: this.props.age
		}
	}

	handleClick = () => {
		this.setState({
			age: this.state.age + 1
		})
	}

	render() {
		return (
			<div>
				<table>
					<tr><th class="props_header">{this.props.lastName}, {this.props.firstName}</th></tr>
					<tr><td class="props_data">Age: {this.state.age}</td></tr>
					<tr><td class="props_data">Hair Color: {this.props.hairColor}</td></tr>
					<tr><td class="props_data"><Button click={this.handleClick} /></td></tr>
				</table>				
			</div>
		);
	}
}

export default PersonCard;