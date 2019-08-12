// Index

import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import browserHistory from './utils/browserHistory';

// Components
import App from './app/App';
import Routes from './routes/Routes';

// Theme
import theme from './theme';

// Client
const client = new ApolloClient({
    dataIdFromObject: object => object.id
});

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Router history={browserHistory}>
                    <Route
                        path="/"
                        render={() => {
                            return (
                                <App>
                                    <Routes />
                                </App>
                            );
                        }}
                    />
                </Router>
            </ApolloProvider>
        </ThemeProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
