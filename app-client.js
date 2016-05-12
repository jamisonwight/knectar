import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import { Login } from './components/Login'
import { APP } from './components/APP'
import { Audience } from './components/Audience'
import { Whoops404 } from './components/Whoops404'

var routes = (
	// <Route component={Login} path="/">
		<Route component={APP} path="/">
			<IndexRoute component={Audience} />
			<Route component={Whoops404} />
		</Route>
	// </Route>
);

render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('react-container') )
