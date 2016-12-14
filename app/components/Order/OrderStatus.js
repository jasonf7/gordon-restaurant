import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Order from './Order';
import { OrderStatusTypes, DummyOrder } from './constants';

@DragDropContext(HTML5Backend)
class OrderStatus extends Component {
	constructor(props) {
		super(props);

		let ordersByState = {};
		ordersByState[OrderStatusTypes.PENDING] = [
			{ id: 1, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '鸡炒饭', quantity: 1 },
				{ name: '橙汁', quantity: 1 }
			] },
			{ id: 2, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '牛肉面', quantity: 1 },
				{ name: '奶茶', quantity: 1 }
			] },
			{ id: 3, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '鸡炒饭', quantity: 2 }
			] },
			{ id: 4, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '橙汁', quantity: 1 }
			] },
			{ id: 5, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '牛肉面', quantity: 1 }
			] },
		];
		ordersByState[OrderStatusTypes.PREPARING] = [
			{ id: 6, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '奶茶', quantity: 3 }
			] },
		];
		ordersByState[OrderStatusTypes.WAITING] = [
			DummyOrder
		];
		ordersByState[OrderStatusTypes.DELIVERING] = [
			{ id: 7, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '鸡炒饭', quantity: 1 }
			] },
			{ id: 8, name: 'Jason Fang', submitted: Math.floor(Math.random() * 59) + 1, items: [
				{ name: '鸡炒饭', quantity: 1 }
			] },
		];

		this.state = { ordersByState };
	}

	moveOrder = (dragState, dragIdx, hoverState, hoverIdx) => {
		let { ordersByState } = this.state;
		const dragOrder = ordersByState[dragState][dragIdx];
		const hoverOrder = ordersByState[hoverState][hoverIdx];

		ordersByState[dragState].splice(dragIdx, 1);
		if (dragState === hoverState) {
			ordersByState[dragState].splice(hoverIdx, 0, dragOrder);
		} else {
			ordersByState[hoverState].splice(hoverIdx, 0, dragOrder);
		}

		this.setState({ ordersByState });
	}

	endOrderDrag = (order) => {
		// TODO: call api
		console.log(order);
		let { ordersByState } = this.state;
		for (const orderState in ordersByState) {
			ordersByState[orderState] = ordersByState[orderState].filter(o => o !== DummyOrder);
			if (ordersByState[orderState].length === 0) {
				ordersByState[orderState] = [DummyOrder];
			}
		}
		this.setState({ ordersByState });
	}

	render() {
		const { ordersByState } = this.state;

		return (
			<div>
				{
					Object.keys(ordersByState).map((orderState, idx) => {
						const orders = ordersByState[orderState];

						return (
							<div style={{ padding: 20, width: 250, float: 'left' }} key={idx}>
								<Subheader>{orderState}</Subheader>
								{
									orders.map((order, oidx) => {
										return (
											<Order
												key={order.id}
												index={oidx}
												order={order}
												orderState={orderState}
												moveOrder={this.moveOrder.bind(this)}
												endOrderDrag={this.endOrderDrag.bind(this)} />
										);
									})
								}
							</div>
						);
					})
				}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

OrderStatus = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderStatus);

export default OrderStatus;
