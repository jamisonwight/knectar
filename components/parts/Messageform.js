import React, { Component } from 'react'
import { Emoji } from './Emoji'


export default class Messageform extends Component {
	addMessage() {
		// let userName = document.getElementById('username').value;
		let memberMessage = React.findDOMNode(this.refs.message).value;
		let messageVal = '';
		let newDate = new Date();
		newDate = newDate.toUTCString();

		{(() => {
       switch (memberMessage) {
         case '/fart':      messageVal = '* Has just farted';
				 	break;
         case '/trumpet':   messageVal = '* The trumpet has been sounded';
				 	break;
         case '/cheer':     messageVal = '* Gives a cheer';
				 	break;
         case '/woot':      messageVal = '* Shouts a woot';
				 	break;
         case '/scream':    messageVal = '* Has screamed';
				 	break;
         case '/cartoon':   messageVal = '* This is just silly';
				 	break;
         case '/tada':      messageVal = '* Tada-ed the group';
				 	break;
         default:           messageVal = memberMessage;
       }
    })()};

		this.props.emit('addMessage', {
				name: this.props.user.name,
				image: this.props.user.image,
				message: messageVal,
				date: newDate,
			}
		);
		document.getElementById("comment").value = "";
		document.getElementById("comment").focus();
	}
	keyHandler(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			addMessage();
		}
	}
	emojiBox() {
		document.getElementById("emoji-container").setAttribute('style', 'display:block !important');
	}
	clickOutside() {
        if (event.target.id!="emoji-container") {
            document.getElementById("emoji-container").setAttribute('style', 'display:none');
        }
    }
	render() {
		return (
			<div className="msg-container">
				<form id ="myForm" name="MyForm" action="javascript:void(0)" onSubmit={this.addMessage}>
					<label>Welcome {this.props.user.name} </label>
					<br/><br/>
					<textarea className="input-lg form-control"
							  rows="5"
							  onClick={this.clickOutside}
							  id="comment"
							  placeholder="Type Message..."
							  ref="message"
							  onKeyDown={this.keyHandler}
							  required />

					<div id="emojiBox" onClick={this.emojiBox}>
						<img src="http://emojione.com/wp-content/uploads/assets/emojis/1f642.svg" width="26" />
						<Emoji />
					</div>

					<button onClick={this.clickOutside} className="btn btn-info btn-lg glyphicon glyphicon-send">&nbsp;<span>Send</span></button>
				</form>
			</div>
		);
	}
};
