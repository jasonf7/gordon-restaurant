import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import AddCircleIcon from 'material-ui/svg-icons/content/add-circle';

import CSSModules from 'react-css-modules';
import styles from './NewItem.scss';


class NewItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="item">
                <FlatButton
                    label="Add Item"
                    labelPosition="before"
                    icon={<AddCircleIcon />}
                    style={{width: "100%", height: "100%"}}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
};

NewItem.propTypes = {
    onClick: PropTypes.func.isRequired, // hack for the demo, should update the store instead
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
)(CSSModules(NewItem, styles));
