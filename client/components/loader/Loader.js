// Loader Component

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import { Spinner, SpinnerWrapper } from './styles';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const Loader = ({ isLoading, children }) => {
    if (isLoading) {
        return (
            <SpinnerWrapper>
                <Spinner>
                    <div />
                    <div />
                    <div />
                </Spinner>
            </SpinnerWrapper>
        );
    }
    return <div>{children}</div>;
};

Loader.propTypes = propTypes;

export default Loader;
