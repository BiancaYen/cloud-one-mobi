// Arrow Toggle

import PropTypes from 'prop-types';
import React from 'react';
import { MdExpandLess as ChevronUp, MdExpandMore as ChevronDown } from 'react-icons/md';

// Styles
import Wrapper from './styles';

// Default props
const defaultProps = {
    isActive: false,
    isDisabled: false
};

// Prop Types
const propTypes = {
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool
};

const ArrowToggle = ({ isActive, isDisabled }) => {
    return (
        <Wrapper
            isActive={isActive}
            isDisabled={isDisabled}
        >
            { isActive ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
        </Wrapper>
    );
};

ArrowToggle.defaultProps = defaultProps;
ArrowToggle.propTypes = propTypes;

export default ArrowToggle;
