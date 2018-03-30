import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// import Home from '../routes/home';
import Table from 'async!../routes/table';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import style from './style';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div class={style.routes}>
					<Router onChange={this.handleRoute}>
						<Table path="/:step" />
					</Router>
				</div>
			</div>
		);
	}
}
