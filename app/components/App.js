import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = ({ children }) =>
	<MuiThemeProvider>
		<div>
	        { children }
	    </div>
	</MuiThemeProvider>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
