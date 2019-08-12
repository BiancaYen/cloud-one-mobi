// Button Component

import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loader from './Loader';

// Styles
import { Wrapper } from './styles';

// Constants
import sizes from './constants';

// Default props
const defaultProps = {
    isDisabled: false,
    isLoading: false,
    isOutlined: false,
    size: sizes.normal,
    spacing: '',
    type: '',
    onClick: () => {}
};

// Prop types
const propTypes = {
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isOutlined: PropTypes.bool,
    size: PropTypes.oneOf([
        sizes.small,
        sizes.normal
    ]),
    spacing: PropTypes.string,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func
};

const Button = ({
    title,
    isDisabled,
    isLoading,
    isOutlined,
    spacing,
    size,
    type,
    onClick
}) => (
    <Wrapper
        isDisabled={isDisabled}
        isLoading={isLoading}
        isOutlined={isOutlined}
        size={size}
        spacing={spacing}
        type={type}
        onClick={isDisabled || isLoading ? undefined : onClick}
    >
        {
            isLoading
                ? <Loader isOutlined={isOutlined} />
                : title
        }
    </Wrapper>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
Button.sizes = sizes;

export default Button;
