import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div classname="logo">
                    <img src="../assets/images/knectar-new.svg" />
                </div>
                <div>
                    <h3>Choose login method:</h3>
                    <a><button classname="google">Google</button></a>
                    <a><button classname="twitter">Twitter</button></a>
                    <a><button classname="facebook">Facebook</button></a>
                </div>
            </div>
        )

    }
}
