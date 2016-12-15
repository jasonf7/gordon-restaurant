import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AddCircleIcon from 'material-ui/svg-icons/content/add-circle';

import CSSModules from 'react-css-modules';
import styles from './Item.scss';


class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="item">
                {
                    this.props.imgUrl ?
                        <div styleName="img-container">
                            <img styleName="img" src={this.props.imgUrl} />
                        </div>:
                        <div styleName="img-placeholder">
                            <IconButton
                                iconStyle={{width: 48, height: 48}}
                                style={{width: 100, height: 100}}
                            >
                                <AddCircleIcon />
                            </IconButton>
                        </div>
                }
                <div styleName="name">
                    <TextField id={`item-name-${this.props.id.toString()}`}
                               defaultValue={this.props.name}
                               fullWidth={true}>
                    </TextField>
                </div>
                <span styleName="dots" />
                <div styleName="price">
                    <span styleName="dollar">$</span>
                    <TextField id={`item-price-${this.props.id.toString()}`}
                               defaultValue={this.props.price}
                               fullWidth={true}>
                    </TextField>
                </div>
            </div>
        );
    }
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
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
)(CSSModules(Item, styles));
