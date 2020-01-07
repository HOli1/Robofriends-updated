import React, {Component} from 'react';

class ErrorBoundery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch (error, info) {
		this.setState ({hasError: true});
	}

	render() {
		if (this.state.hasError === true) {
			return <h1> This is not goood! </h1>
		}

		return this.props.children;
	}
}

export default ErrorBoundery;