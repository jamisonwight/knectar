import React from 'react'
import { Route, Router, browserHistory, render, DefaultRoute, NotFoundRoute } from 'react-router'
import { Login } from './components/OAuth/Login'
import { APP } from './components/APP'
import { Audience } from './components/Audience'
import { Whoops404 } from './components/Whoops404'

const routes = (
	<Route history={browserHistory} handler={Login} path="/" />
	<Route history={browserHistory} handler={APP} path="/home">
		<Route handler={Audience} path="/audience"
	<NotFoundRoute handler={Whoops404} />
)

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('react-container'))
})
