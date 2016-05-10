import React, { Component } from 'react'

export default class Emoji extends Compnonent {
    addGrin() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F600}')
    }
    addGrim() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F601}')
    }
    addOpenSmile() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F603}')
    }
    addWink() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F61C}')
    }
    addSmile() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F642}')
    }
    addFrown() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F641}')
    }
    addCry() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F622}')
    }
    addPonder() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F914}')
    }
    addRosy() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F60A}')
    }
    addHushed() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F62E}')
    }
    addLike() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F44D}')
    }
    addClap() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F44F}')
    }
    addHandsRaised() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F64C}')
    }
    addPray() {
        var input = $("#comment");
        input.val( input.val() + '\u{1F64F}')
    }
    addPoint() {
         var input = $("#comment");
         input.val( input.val() + '\u{1F446}')
    }
    addHeart() {
        var input = $("#comment");
        input.val( input.val() + '\u{2665}')
    }


    render() {
        return (
            <div id="emoji-container">

                    <div className="emo-icon"
                         onClick={this.addSmile}
                         ref="smile">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/263a.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addGrim}
                         ref="grim">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f62c.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addOpenSmile}
                         ref="openSmile">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f603.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addWink}
                         ref="wink">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f61c.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addGrin}
                         ref="grin">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f600.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addFrown}
                         ref="frown">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/2639.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addCry}
                         ref="cry">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f62d.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addPonder}
                         ref="ponder">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f914.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addRosy}
                         ref="rosy">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f60a.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addHushed}
                         ref="hushed">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f62e.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addLike}
                         ref="like">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f44d.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addClap}
                         ref="clap">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f44f.svg" />
                    </div>
                    <div className="emo-icon"
                        onClick={this.addHandsRaised}
                        ref="handsRaised">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f64c.svg" />
                    </div>
                    <div className="emo-icon"
                        onClick={this.addPray}
                        ref="pray">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/1f64f.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addPoint}
                         ref="point">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/261d.svg" />
                    </div>
                    <div className="emo-icon"
                         onClick={this.addHeart}
                         ref="heart">
                        <img src="http://emojione.com/wp-content/uploads/assets/emojis/2764.svg" />
                    </div>

            </div>
        );
    }
};
