import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import {indigo500} from 'material-ui/styles/colors';

import CSSModules from 'react-css-modules';
import styles from './Login.scss';

const Login = () =>
	<div styleName="outer">
		<div styleName="inner">
			<Paper zDepth={5} >
				<div styleName="paper">
					<div styleName="title" className="bold-text" style={{color:indigo500}}>Gordan - Administrator</div>
					<div styleName="login-form">
						<div>
							<TextField
								hintText="Enter your email"
								fullWidth
							/>
							<br />
							<TextField
								hintText="Password"
								floatingLabelText="Password"
								type="password"
								fullWidth
							/>
							<div styleName="buttons">
								<RaisedButton label="Sign in" labelPosition="before" icon={<ArrowForward />} primary={true} fullWidth={true} />
								<br />
								<RaisedButton label="Register" labelPosition="before" icon={<GroupAdd />} secondary={true} fullWidth={true} />
							</div>
						</div>
					</div>
				</div>
			</Paper>
		</div>
	</div>;


export default CSSModules(Login, styles);
