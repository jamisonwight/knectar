import React, { Component } from 'react'
import { Display } from './Display'
import { VoiceOpen } from './VoiceOpen'

export default class Voice extends Component {
     getInitialState() {
         return {
             clicked: false
         }
     }
     clickHandler() {
        this.setState({ clicked: !this.state.clicked })
     }
     render() {
         return (
             <div className="icons">
                <h1 className="glyphicon glyphicon-earphone userIcon" onClick={this.clickHandler}></h1>

                <Display if={this.props.status === 'connected'}>
                    <Display if={this.state.clicked}>
                        <VoiceOpen users={this.props.users}/>
                    </Display>
                </Display>

                <Display if={this.props.status === 'disconnected'}>
                    <div className="error">
                        <h4>Sorry, you cannot make calls while disconnected</h4>
                    </div>
                </Display>

             </div>
         )
     }
 };
