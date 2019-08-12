// Routes

import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Switch } from 'react-router-dom';

// Components
import CustomRoute from './CustomRoute';

// Layouts
import AppLayout from '../layouts/app/AppLayout';

// Features
import PrintersAdd from '../features/printers/PrintersAdd';
import PrintersEdit from '../features/printers/PrintersEdit';
import PrintersIndex from '../features/printers/PrintersIndex';

// Prop types
const propTypes = {
    location: PropTypes.instanceOf(Object).isRequired
};

const Routes = ({ location }) => (
    <Switch key={location.key}>
        <CustomRoute
            exact
            path="/"
            component={AppLayout(PrintersIndex)}
            title="Cloud One Mobi"
        />
        <CustomRoute
            exact
            path="/printers/add"
            component={AppLayout(PrintersAdd)}
            title="Add A printer"
        />
        <CustomRoute
            exact
            path="/printers/edit/:id"
            component={AppLayout(PrintersEdit)}
            title="Edit A printer"
        />
    </Switch>
)

Routes.propTypes = propTypes;

export default withRouter(Routes);
