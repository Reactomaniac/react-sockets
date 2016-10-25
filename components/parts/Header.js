var React = require("react");

var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},


	render() {
		return(
			<header>
				<h1> {this.props.title} {this.props.status} </h1>
			</header>
		);
	}
});

module.exports = Header;