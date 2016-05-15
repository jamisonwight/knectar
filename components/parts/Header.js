import React, { Component } from 'react'

export default class Header extends Component {
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

};
