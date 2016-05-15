import React, { Component } from 'react'
import { Router, RouteHandler } from 'react-router'
import alert from 'alert'
import io from 'socket.io-client'
import Header from './parts/Header'

export default class APP extends Component {
    constructor(props) {
      super(props);
      this.state = {
            status: 'disconnected',
            title: 'Knectar',
            member: {},
            audience: [],
            users: [],
            sound: ''
        }
        this.emit = this.emit.bind(this);
    }
    componentWillMount() {
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
          let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
          if (member && member.type === 'audience') {
              this.emit('join', member);
          }
          this.setState({
              status: 'connected',
              title: 'Knectar'
          });
      });

        this.socket.on('disconnect', () => {
          this.setState({
              status: 'disconnected',
              title: 'disconnected',
          });
          this.state.status === 'disconnected' ? alert('glass') : null;
        });

        this.socket.on('joined', (member) => {
          sessionStorage.member = JSON.stringify(member);
          this.setState({ audience: member })
        });

        this.socket.on('audience', (newAudience) => {
          this.setState({ audience: newAudience })
        });

        this.socket.on('userAdded', (newUser) => {
            this.setState({ users: newUser})
        });
        this.socket.on('newSound', (addSound) => {
            this.setState({ sound: addSound })
        });
    }
    emit(eventName, payload) {
        this.socket.emit(eventName, payload)
    }
    render() {
      const {children} = this.props;
        return (
            <div className="app-container">
                <Header {...this.state} onClick={this.clickOutside}/>
                {children}
            </div>
        );
    }
};
