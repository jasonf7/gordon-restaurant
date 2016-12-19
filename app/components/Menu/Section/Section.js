import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import CSSModules from 'react-css-modules';
import styles from './Section.scss';

import NewItem from '../Item/NewItem';

const titleFontStyle = {fontSize:25, fontWeight:400};

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div styleName="outer">
                    <Card>
                        <CardHeader showExpandableButton>
                            <div styleName="inner">
                                <div styleName="title">
                                    <span style={titleFontStyle} styleName="index">{this.props.id}.</span>
                                    <TextField id={`section-${this.props.id.toString()}`}
                                        defaultValue={this.props.title}
                                               fullWidth={true}
                                               inputStyle={titleFontStyle} />
                                </div>
                            </div>
                        </CardHeader>
                        <CardText expandable={true}>
                            {this.props.children}
                            <NewItem onClick={this.onNewItemClick} />
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }

    onNewItemClick = (e) => {
        this.props.generateNewItem(this.props.id-1);
    }
};

Section.propTypes = {
    children: PropTypes.array,
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    generateNewItem: PropTypes.func.isRequired, // hack for the demo, should update the store instead
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
)(CSSModules(Section, styles));
