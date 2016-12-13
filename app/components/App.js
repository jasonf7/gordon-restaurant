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
	        <h1>Filter table</h1>
	        { children }
	        <footer>
	            <Link to="/">Filterable Table</Link>
	            <Link to="/about">About</Link>
	        </footer>
	    </div>
	</MuiThemeProvider>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
