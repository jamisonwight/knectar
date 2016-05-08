var React = require('react');
var Display = require('./Display');
var Sounds = require('./shortcodes/Sounds');
var alert = require('alert');

var Message = React.createClass({

	addMemberRow(member, i) {
		return (
			<div className="message" key={i}>
				<h3>{member.name}</h3>
				<p>{member.message}</p>
			  <Sounds msg={member.message} />
				<span>Posted on {member.date}</span>
			</div>
		);

	},

	render() {
		return (
			<div className="msg" id="msg">
				<div className="msg-board">
					{this.props.audience.map(this.addMemberRow)}
				</div>
			</div>
		);
	}
});

module.exports = Message;
