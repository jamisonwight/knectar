import React, { Component } from 'react'
import { Display } from './Display'

export default class User extends Component {
	getInitialState() {
		return { clicked: {false} }
	}
    addUserRow(users, i) {
        return (
        	<div key={i}>
				<img src={users.image} />
            	<p>{users.name}</p>
        	</div>
        );
    }
    clickHandler() {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <div className="icons">
                <h2 className="glyphicon glyphicon-user userIcon" onClick={this.clickHandler}></h2>

                <Display if={this.props.status === 'connected' }>
					<Display if={!this.state.clicked}>

						<div className="userList">
							<h3>Users Online</h3>
                    		{this.props.users.map(this.addUserRow)}
						</div>
					</Display>
                </Display>
            </div>
        )
    }
};
