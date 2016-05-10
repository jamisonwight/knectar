import React, { Component } from 'react'
import { Messageform } from './parts/Messageform'
import { Message } from './parts/Message'
import { Users } from './parts/Users'
import { Voice } from './parts/voice/Voice'

export default class Audience extends Component {
	componentDidUpdate() {
		let msgBottom = document.getElementById("msg");
		msgBottom.scrollTop = msgBottom.scrollHeight;
	}
	clickOutside() {
        if(event.target.id!="emoji-container") {
            document.getElementById("emoji-container").setAttribute('style', 'display:none');
        }
    }
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
};
