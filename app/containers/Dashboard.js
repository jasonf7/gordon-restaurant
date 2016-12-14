import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import FlatButton from 'material-ui/FlatButton';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	render() {
		return (
			<div>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={ (open) => this.setState({ open }) }
				>
					<List>
						<ListItem primaryText="Order Status" leftIcon={<DeviceAccessTime />} onClick={ this.onClickMenuItem.bind(this, '/dashboard/order') } />
						<ListItem primaryText="Menu" leftIcon={<MapsRestaurant />} onClick={ this.onClickMenuItem.bind(this, '/dashboard/menu') } />
					</List>
				</Drawer>
				<AppBar
					title="Gordon - Restaurant Panel"
					iconElementRight={
						<FlatButton
							label="Logout"
							onClick={this.onLogoutButtonClick}
						/>
					}
					onLeftIconButtonTouchTap={this.onOpenMenu}
				/>
				{this.props.children}
			</div>
		);
	}

	onLogoutButtonClick = (e) => {
		browserHistory.push("/login");
	}

	onOpenMenu = (e) => {
		this.setState({
			open: true
		});
	}

	onClickMenuItem = (url) => {
		browserHistory.push(url);

		this.setState({
			open: false
		});
	}
};

Dashboard.propTypes = {
	children: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
