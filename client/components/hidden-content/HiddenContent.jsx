// Hidden Content Component

import PropTypes from 'prop-types';

// Prop Types
const defaultProps = {
    isHidden: false
};

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    isHidden: PropTypes.bool
};

const HiddenContent = ({ isHidden, children }) => {
    if (isHidden) {
        return null;
    }
    return children;
};

HiddenContent.defaultProps = defaultProps;
HiddenContent.propTypes = propTypes;

export default HiddenContent;
