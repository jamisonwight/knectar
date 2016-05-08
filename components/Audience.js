var React = require('react');
var Display = require('./parts/Display');
var Messageform = require('./parts/Messageform');
var Message = require('./parts/Message');
var Users = require('./parts/Users');
var Voice = require('./parts/voice/Voice');

var Audience = React.createClass({


	componentDidUpdate() {
		var msgBottom = document.getElementById("msg");
		msgBottom.scrollTop = msgBottom.scrollHeight;
	},

	clickOutside() {
        if(event.target.id!="emoji-container") {
            document.getElementById("emoji-container").setAttribute('style', 'display:none');
        }

    },

	render() {
		return (
			<div>
				<div className="inline">
					<Users users={this.props.users} status={this.props.status} />
					<Voice users={this.props.users} status={this.props.status} />
				</div>
				<Message emit={this.props.emit} audience={this.props.audience} sound={this.props.sound}/>
				<Messageform emit={this.props.emit} user={this.props.user} />
			</div>
		);
	}
});

module.exports = Audience;
