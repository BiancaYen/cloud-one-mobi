// List

import React from 'react';
import PropTypes from 'prop-types';

// Components
import HiddenContent from '../hidden-content/HiddenContent';
import ListItem from './ListItem';
import Loader from '../loader/Loader';

// Styles
import { Wrapper } from './styles';

// Default Props
const defaultProps = {
    data: [],
    messageNoData: 'No data saved'
};

// Prop Types
const propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    messageNoData: PropTypes.string
};

const List = (props) => {
    const {
        children,
        data, isLoading,
        messageNoData
    } = props;

    return (
        <Wrapper>
            <Loader isLoading={isLoading}>
                <HiddenContent isHidden={!!data.length}>
                    <ListItem>
                        { messageNoData }
                    </ListItem>
                </HiddenContent>
                { children(data) }
            </Loader>
        </Wrapper>
    );
};

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
