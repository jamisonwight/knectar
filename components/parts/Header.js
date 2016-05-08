var React = require('react');

var Header = React.createClass({

	getDefaultProps() {
		return {
			status: 'disconnected',
			title: 'CONNECT ME',
		}
	},

	render() {
		return (
			<header className="row">
				<div className="page-heading col-xs-6">
					<h1>{this.props.title}</h1>
				</div>
				<div className="col-xs-6">
					<span id="connection-status" className={this.props.status}></span>
					<div className="status-text">{this.props.status}</div>
				</div>
			</header>
		);
	}

});

module.exports = Header;
