import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import Login from './components/Login'
import APP from './components/APP'
import Audience from './components/Audience'
import Whoops404 from './components/Whoops404'

ReactDOM.render( (
	<Router history={hashHistory}>
 	{/*// <Route component={Login} path="/">*/}
 		<Route component={APP} path="/">
 			<IndexRoute component={Audience} />
 		</Route>
 		{/*<Route component={Whoops404} />*/}
 	{/*// </Route>*/}
 	</Router>
), document.getElementById('react-container') )
