// Custom Route

import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

// Default props
const defaultProps = {
    title: ''
};

// Prop types
const propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node
    ]).isRequired,
    title: PropTypes.string,
};

const CustomRoute = ({ component: ComposedComponent, title, ...props }) => {
    return (
        <Route
            {...props}
            render={(rest) => {
                return (
                    <ComposedComponent {...rest} title={title} />
                );
            }}
        />
    );
};

CustomRoute.propTypes = propTypes;
CustomRoute.defaultProps = defaultProps;

export default CustomRoute;
