var React = require('react');
var Display = require('./Display');

var Register = React.createClass({

    getInitialState() {
        return {
            password: 'punksdead',
        }
    },

    loginPass() {
        var username = React.findDOMNode(this.refs.username).value;
        document.getElementById('register').setAttribute('style', 'display: none !important');
        $('#myForm label').append('<span>' + username + '</span>');

        this.props.emit('username',
            {
                users: username
            }
        );
    },

    loginError() {
         $('#register form').append('<p className="error">Incorrect Password</p>');
          document.getElementById('password').value = '';
    },

    loginUser() {
        //var password = React.findDOMNode(this.refs.userPassword).value;

        this.loginPass();
        // /*Check if password is correct or incorrect and pass a function */
        // password === this.state.password ? this.loginPass() : this.loginError();
    },

    Changehandler(e) {
        this.setState({ users: e.target.value });
    },

    render() {
        return(
            <div id="register">
                <form className="col-lg-4"
                      id="loginForm"
                      name="loginForm"
                      action="javascript:void(0)"
                      onSubmit={this.loginUser}>

                    <label>Choose Username</label>
                    <input ref="username"
                           id="username"
                           onChange={this.Changehandler}
                           className="input-lg form-control"
                           required />

                    <button className="btn btn-lg">Join</button>
                </form>
            </div>
        );
    }
});
    // <label>Password</label>
    // <input ref="userPassword"
    //        type="password"
    //        id="password"
    //        className="input-lg form-control"
    //        required />

module.exports = Register;
