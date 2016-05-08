var React = require('react');

/* Alert messages */
var SoundMsg = React.createClass({

  messageHandler() {
    {(() => {
       switch (this.props.msg) {
         case '/fart':      return '<em>Has just farted<';
         case '/trumpet':   return '<em>The trumpet has been sounded</em>';
         case '/cheer':     return '<em>Gives a cheer</em>';
         case '/woot':      return '<em>Shouts a woot</em>';
         case '/scream':    return '<em>Has screamed</em>';
         case '/cartoon':   return '<em>This is just silly</em>';
         case '/tada':      return '<em>Tada-ed the goup</em>';
         default:           return null;
       }
   })()}
  },

	render() {
    return (
        this.messageHandler(), null
    );
	}
});

module.exports = SoundMsg;
