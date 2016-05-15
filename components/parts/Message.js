import React, { Component } from 'react'
import Sounds from './shortcodes/Sounds'

export default class Message extends Component {
	addMemberRow(member, i) {
		return (
			<div className="message" key={i}>
				<Display if={!member.image}>
					<img src="https://cldup.com/XTZ27pa9O1.png" />
				</Display>
				<Display if={member.image}>
					<img src={member.image} />
				</Display>
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
