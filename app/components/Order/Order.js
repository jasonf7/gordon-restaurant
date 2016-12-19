import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { OrderStatusTypes, DummyOrder, OrderItemType } from './constants';

const cardSource = {
	beginDrag(props) {
		return {
			id: props.order.id,
			orderState: props.orderState,
			index: props.index
		};
	},

	endDrag(props, monitor, component) {
		if (!monitor.didDrop()) {
			return;
		}

		props.endOrderDrag(monitor.getItem());
	},

	isDragging(props, monitor) {
	    // If your component gets unmounted while dragged
	    // (like a card in Kanban board dragged between lists)
	    // you can implement something like this to keep its
	    // appearance dragged:
	    return monitor.getItem().id === props.order.id;
	},
};

const cardTarget = {
	hover(props, monitor, component) {
		const dragItem = monitor.getItem();
		const hoverItem = props;

		// Don't replace items with themselves
		if (dragItem.id === hoverItem.order.id) {
			return;
		}

		// Time to actually perform the action
		props.moveOrder(dragItem.orderState, dragItem.index, hoverItem.orderState, hoverItem.index);

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().orderState = hoverItem.orderState;
		monitor.getItem().index = hoverItem.index;
	}
};

@DropTarget(OrderItemType, cardTarget, connect => ({
	connectDropTarget: connect.dropTarget()
}))
@DragSource(OrderItemType, cardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
class Order extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		index: PropTypes.number.isRequired,
		order: PropTypes.object.isRequired,
		orderState: PropTypes.string.isRequired,
		moveOrder: PropTypes.func.isRequired,    // Passing these 2 functions
		endOrderDrag: PropTypes.func.isRequired, // to the child components seems sketchy...
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired,
		connectDropTarget: PropTypes.func.isRequired
	};

	render() {
		const { order, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging || order === DummyOrder ? 0 : 1;

		return connectDragSource(connectDropTarget(
			<div style={{ opacity }}>
				<Card>
					<CardHeader
						title={`Order ${order.id}`}
						subtitle={`${order.submitted} minutes ago`}
						actAsExpander={true}
						showExpandableButton={true}
						/>
					<CardText expandable={true}>
						<List>
							{
								order.items.map((item) => {
									return (
										<ListItem
											leftAvatar={<Avatar size={25}>{item.quantity}</Avatar>}
											primaryText={item.name}
											style={{fontSize: 'small', height: '40px'}}
											innerDivStyle={{ paddingTop: 13, paddingBottom: 0 }} />
									);
								})
							}
						</List>
					</CardText>
					<CardActions>

					</CardActions>
				</Card>
			</div>
		));
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Order);
