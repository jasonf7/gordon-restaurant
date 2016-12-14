import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import Dashboard from './containers/Dashboard';
import OrderStatus from './components/Order/OrderStatus';
import Menu from './components/Menu/Menu';

// TODO: auto-redirect to login

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="dashboard" />
		<Route path="dashboard" component={Dashboard}>
			<IndexRedirect to="order" />
			<Route path="order" component={OrderStatus} />
			<Route path="menu" component={Menu} />
		</Route>
	</Route>
);
