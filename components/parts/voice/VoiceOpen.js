import React, { Component } from 'react'
import { Display } from './Display'

export default class VoiceOpen extends Component {
        startCall() {
            let port = process.env.PORT || 5000
            let portURL = 'https://localhost:5000/' + port
            // Create our WebRTC connection
            let webrtc = new SimpleWebRTC({
                    // the element that will hold the local video
                    localVideoEl: '',
                    // Element that will hold remote videos
                    remoteVideosEl: '',
                    autoRequestMedia: true,
                    media: {
                        audio: true,
                        video: false,
                    },
                    log: true,
                    url: portURL,
                }
            )
            // we have to wait until it's ready
            webrtc.on('readyToCall', function () {
              // you can name it anything
              webrtc.joinRoom('main');
            })
        }
        addUserVoice(member, i) {
            return (
                <div className="voiceId" key={i}>
                    <img src="https://cldup.com/XTZ27pa9O1.png" />
                    <h3>{member.name}</h3>
                </div>
            );
        }
        render() {
            return (
                <div className="voice">
                    <h1>Make A Call</h1>

                    <div>
                        {this.props.users.map(this.addUserVoice)}
                    </div>

                    <form id='createRoom' onSubmit={this.startCall}>
                        <button className="btn btn-lg" type="submit" ref="startButton">Join Call</button>
                    </form>

                    <form id='endRoom' onSubmit={this.endCall}>
                        <button className="btn btn-lg" type="submit" ref="MuteButton">End Call</button>
                    </form>

                </div>
            )
        }
    };
