import React, { component } from 'react'
import { Router } from 'react-router'
import RouteHandler from Router.RouteHandler
import alert from 'alert'
import io from 'socket.io-client'
import { Header } from './parts/Header'
import { Register } from './parts/Register'

export default class APP extends Component {
    getInitialState() {
        return {
            status: 'disconnected',
            title: 'CONNECT ME',
            member: {},
            audience: [],
            users: [],
            sound: ''
        }
    }

    componentWillMount() {
        this.socket = io('http://localhost:5000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.updateState);
        this.socket.on('joined', this.joined);
        this.socket.on('audience', this.updateAudience);
        this.socket.on('userAdded', this.updateUsers);
        this.socket.on('newSound', this.updateSound);
    }

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

    connect() {
        let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
        if (member && member.type === 'audience') {
            this.emit('join', member);
        }
        this.setState({
            status: 'connected',
            title: 'CONNECT ME'
        });
    }

    disconnect() {
        this.setState({
            status: 'disconnected',
            title: 'disconnected',
        });
        this.state.status === 'disconnected' ? alert('glass') : null;
    }

    joined(member) {
        sessionStorage.member = JSON.stringify(member);
        this.setState({ audience: member });
    }

    updateState(serverState) {
        this.setState(serverState);
    }

    updateAudience(newAudience) {
        this.setState({ audience: newAudience });
    }

    updateUsers(newUser) {
        this.setState({ users: newUser});
    }

    updateSound(addSound) {
        this.setState({ sound: addSound });
    }

    render() {
        return (
            <div className="app-container">
                <Register {...this.state} emit={this.emit} />
                <Header {...this.state} onClick={this.clickOutside}/>
                <RouteHandler emit={this.emit} {...this.state} />
            </div>
        );
    }
});
