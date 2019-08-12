import PropTypes from 'prop-types';
import React from 'react';

// Components
import Loader from '../loader/Loader';

// Styles
import {
    Action,
    Content,
    Heading,
    Wrapper
} from './styles';

// Default Props
const defaultProps = {
    action: '',
    isLoading: false
};

// Prop Types
const propTypes = {
    action: PropTypes.node,
    children: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
};

const List = ({
    action,
    children,
    heading,
    isLoading
}) => {
    return (
        <Wrapper>
            <Heading>
                { heading }
                { action && <Action>{action}</Action> }
            </Heading>
            <Content>
                <Loader isLoading={isLoading}>
                    { children }
                </Loader>
            </Content>
        </Wrapper>
    );
};

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
