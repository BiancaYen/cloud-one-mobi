// List Item

import PropTypes from 'prop-types';
import React from 'react';
import uniqueKey from 'unique-key';

// Styles
import {
    Actions,
    Item,
    Subtitle,
    Title
} from './styles';

// Default Props
const defaultProps = {
    actions: []
};

// Prop Types
const propTypes = {
    actions: PropTypes.array,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]).isRequired
};

const List = ({ actions, children }) => {
    if (typeof children === 'function') {
        const { index, title, subtitle } = children();
        return (
            <Item>
                {`${index})`}
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Actions>
                    { actions.length && actions.map(action => (
                        <div key={uniqueKey()}>
                            { action}
                        </div>
                    ))}
                </Actions>
            </Item>
        );
    }

    return (
        <Item>
            { children }
        </Item>
    );
};

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
