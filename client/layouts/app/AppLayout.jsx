import { Global } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Styles
import { Content, Wrapper, resetStyles } from './styles';

// Components
import { Header } from '../../components/index';

// Prop Types
const propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired
};

export default (ComposedComponent) => {
    const AppLayout = (props) => {
        const { title } = props;
        document.title = title;

        return (
            <Wrapper>
                <Global styles={resetStyles} />
                <Content>
                    <Header title="Cloud Mobi Printers" />
                    <ComposedComponent {...props} />
                </Content>
            </Wrapper>
        );
    };

    AppLayout.propTypes = propTypes;

    return withRouter(AppLayout);
};
