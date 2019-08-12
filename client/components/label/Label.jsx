// Label Component

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import Wrapper from './styles';

// Default Props
const defaultProps = {
    id: '',
    spacing: ''
};

// Prop Types
const propTypes = {
    children: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    spacing: PropTypes.string
};

const Label = ({ id, children, spacing }) => {
    return (
        <Wrapper htmlFor={id} spacing={spacing}>
            { children }
        </Wrapper>
    );
};

Label.defaultProps = defaultProps;
Label.propTypes = propTypes;

export default Label;
