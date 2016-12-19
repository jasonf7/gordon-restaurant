import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AddCircleIcon from 'material-ui/svg-icons/content/add-circle';

import CSSModules from 'react-css-modules';
import styles from './NewSection.scss';

class NewSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div styleName="outer">
                    <Card initiallyExpanded>
                        <CardHeader>
                            <div styleName="inner">
                                <FlatButton
                                    label="Add Section"
                                    labelPosition="before"
                                    icon={<AddCircleIcon />}
                                    style={{width: "100%", height: "100%"}}
                                    onClick={this.props.onClick}
                                />
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        );
    }
};

NewSection.propTypes = {
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
)(CSSModules(NewSection, styles));
