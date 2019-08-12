// App Component

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

// Prop types
const propTypes = {
    children: PropTypes.node.isRequired
};

const App = ({ children }) => (
    <Fragment>
        {children}
    </Fragment>
);

App.propTypes = propTypes;

export default App;
