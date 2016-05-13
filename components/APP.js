import React, { Component } from 'react'
import { Router, RouterContext } from 'react-router'
import alert from 'alert'
import io from 'socket.io-client'
import Header from './parts/Header'
import Register from './parts/Register'


export default class APP extends Component {
    constructor() {
      super();
      this.state = {
            status: 'disconnected',
            title: 'CONNECT ME',
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
              title: 'CONNECT ME'
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
        return (
            <div className="app-container">
                <Register {...this.state} emit={this.emit} />
                <Header {...this.state} onClick={this.clickOutside}/>
                <RouterContext emit={this.emit} {...this.state} />
            </div>
        );
    }
};
