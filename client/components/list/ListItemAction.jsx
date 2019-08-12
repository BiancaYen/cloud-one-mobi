// List Item Action

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import { Action } from './styles';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const ListItemAction = ({ children, onClick }) => {
    return (
        <Action
            role="button"
            tabIndex={-1}
            onClick={onClick}
            onKeyDown={() => { return null; }}
        >
            { children }
        </Action>
    );
};

ListItemAction.propTypes = propTypes;

export default ListItemAction;
