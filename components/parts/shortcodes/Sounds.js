var React = require('react');
/* alert JS library */
var alert = require('alert');

/* Sound Files */
alert.content['fart'] = ['https://cldup.com/qqxlL9I2NP.wav'];
alert.content['trumpet'] = ['https://cldup.com/ilWKLdPG73.wav'];
alert.content['cheer'] = ['https://cldup.com/wUXDS9SLkt.mp3'];
alert.content['woot'] = ['https://cldup.com/vtcrY4X6ii.wav'];
alert.content['scream'] =  ['https://cldup.com/ZfJcYH_Vwl.mp3'];
alert.content['cartoon'] =  ['https://cldup.com/sri7o-uUHf.mp3'];
alert.content['tada'] = ['https://cldup.com/hWRzJR2Szc.mp3'];


var Sounds = React.createClass({

    soundHandler() {
         {(() => {
            switch (this.props.msg) {
              case '* Has just farted': return alert('fart');
              case '* The trumpet has been sounded': return alert('trumpet');
              case '* Gives a cheer': return alert('cheer');
              case '* Shouts a woot': return alert('woot');
              case '* Has screamed':  return alert('scream');
              case '* This is just silly': return alert('cartoon');
              case '* Tada-ed the group': return alert('tada');
              default: return alert('pop');
            }
        })()}
    },


    render() {
        return (
          this.soundHandler(),
          null
        );
    }

});

module.exports = Sounds;
