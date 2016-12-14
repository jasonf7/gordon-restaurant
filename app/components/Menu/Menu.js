import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Menu
			</div>
		);
	}
};

Menu.propTypes = {
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
)(Menu);
