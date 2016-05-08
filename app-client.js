var React = require('react');
var Router = require('react-router');
import { browserHistory } from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Whoops404 = require('./components/Whoops404');

var routes = (
	<Route history={browserHistory} handler={APP} path="/">
		<DefaultRoute handler={Audience} />
		<NotFoundRoute handler={Whoops404} />
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('react-container'));
});
