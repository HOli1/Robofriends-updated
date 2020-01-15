import React, {Component} from 'react';

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		}
	}

	shouldComponentUpdate (nextProps, nextState) {
		if (this.state.counter !== nextState.counter) {
			return true;
		}
		return false;
	}

	updateCount = () => {
		this.setState (state => {
			return {counter: state.counter + 1}
		})
	}

	render() {
		console.log('CounterButton');
		return (
				<button color={this.props.color} onClick={this.updateCount} >
					Count: {this.state.counter}
				</button>
				);
	}

}

export default CounterButton;