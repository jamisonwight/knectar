import React, { Component } from 'react'
import { Sounds } from './shortcodes/Sounds'

var Message = React.createClass({
	addMemberRow(member, i) {
		return (
			<div className="message" key={i}>
				<h3>{member.name}</h3>
				<p>{member.message}</p>
			  <Sounds msg={member.message} />
				<span>Posted on {member.date}</span>
			</div>
		)

	}
	render() {
		return (
			<div className="msg" id="msg">
				<div className="msg-board">
					{this.props.audience.map(this.addMemberRow)}
				</div>
			</div>
		)
	}
};
