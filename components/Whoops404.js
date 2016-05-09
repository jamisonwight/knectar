import React, { Component } from 'react'
import { Router } from 'react-router'
const Link = Router.Link;

export default class Whoops404 extends Component {
		render() {
				return (
					<div id="not-found">
						<h1>Whoops...</h1>
						<p>We cannot find the page that you have requested.
						   Were you looking for one of these: </p>
						<Link to="/">Go to Home</Link>
					</div>
				);
			}
});
