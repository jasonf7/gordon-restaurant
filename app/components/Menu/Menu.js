import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import Section from './Section/Section';
import NewSection from './Section/NewSection';
import Item from './Item/Item';

class Menu extends Component {
	constructor(props) {
		super(props);

		let menu = [
			{
				title: "Panino Lunch Specials",
				items: [
					{
						name: "Chicken Fried Rice (鸡炒饭)",
						price: 9.99,
						imgUrl: "http://cdn.iowagirleats.com/wp-content/uploads/2012/08/DSC_0100_thumb.jpg",
					},
					{
						name: "Beef Noodle Soup (牛肉面)",
						price: 8.99,
						imgUrl: "http://thewoksoflife.com/wp-content/uploads/2016/02/beef-noodle-soup-12.jpg",
					},
					{
						name: "Milk Tea (奶茶)",
						price: 4.49,
						imgUrl: "https://www.insauga.com/sites/default/files/article/bamboo.jpg",
					},
				],
			},
			{
				title: "Rice",
				items: [
					{
						name: "Chicken Fried Rice (鸡炒饭)",
						price: 9.99,
						imgUrl: "http://cdn.iowagirleats.com/wp-content/uploads/2012/08/DSC_0100_thumb.jpg",
					},
					{
						name: "Beef Fried Rice (牛肉炒饭)",
						price: 9.99,
					},
				],
			},
			{
				title: "Noodle",
				items: [
					{
						name: "Chicken Noodle Soup (鸡肉面)",
						price: 8.99,
					},
					{
						name: "Beef Noodle Soup (牛肉面)",
						price: 8.99,
						imgUrl: "http://thewoksoflife.com/wp-content/uploads/2016/02/beef-noodle-soup-12.jpg",
					},
				],
			},
			{
				title: "Drinks",
				items: [
					{
						name: "Milk Tea (奶茶)",
						price: 4.49,
						imgUrl: "https://www.insauga.com/sites/default/files/article/bamboo.jpg",
					},
				],
			},
		];

		this.state = { menu };
	}

	render() {
		return (
			<div>
				{this.state.menu.map((section, index) => {
					return (
						<Section title={section.title} id={index+1} key={index} generateNewItem={this.generateNewItem}>
							{
								section.items.map((item, itemIndex) => {
									return (
										<Item id={itemIndex}
											  name={item.name}
											  price={item.price}
											  imgUrl={item.imgUrl}
											  key={`${index}-${itemIndex}`} />
									)
								})
							}
						</Section>
					)
				})}
				<NewSection onClick={this.onNewSectionClick}/>
			</div>
		);
	}

	onNewSectionClick = (e) => {
		let { menu } = this.state;
		menu.push({
			title: "",
			items: []
		});
		this.setState(menu);
	};

	generateNewItem = (index) => {
		let { menu } = this.state;
		menu[index].items.push({});
		this.setState(menu);
	};
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
