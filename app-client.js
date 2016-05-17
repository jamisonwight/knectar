import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import Login from './components/Login'
import APP from './components/APP'
import Audience from './components/Audience'
import User from './routes/user'
import Auth from './routes/auth'
import Whoops404 from './components/Whoops404'

ReactDOM.render( (
	<Router history={hashHistory}>
 	  {/*<Route component={Login} path="/" />*/}
 		<Route component={APP} path="/app">
 			<IndexRoute component={Audience} />
 		</Route>
 		{/*<Route component={Whoops404} />*/}
 	</Router>
), document.getElementById('react-container') )
