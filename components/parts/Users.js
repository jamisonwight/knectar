var React = require('react');
var Display = require('./Display');

var Users = React.createClass({

	getInitialState() {
		return { clicked: {false} }
	},

    addUserRow(user, i) {
        return (
        	<div key={i}>
            	<p>{user.name}</p>
        	</div>
        );
    },

    clickHandler() {
        this.setState({ clicked: !this.state.clicked });
    },

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
        );
    }
});

module.exports = Users;
