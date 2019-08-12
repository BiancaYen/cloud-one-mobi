import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';

// Components
import {
    Checkbox,
    Input,
    Select
} from '../../components';

// Queries
import getUsers from '../../queries/getUsers';

// Prop Types
const propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
    errors: PropTypes.instanceOf(Object).isRequired,
    touched: PropTypes.instanceOf(Object).isRequired,
    values: PropTypes.shape({
        active: PropTypes.bool,
        ip: PropTypes.string,
        name: PropTypes.string,
        users: PropTypes.instanceOf(Array)
    }).isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

const PrintersForm = ({
    data: { users: usersMetaData = [] },
    errors,
    values: {
        active,
        ip,
        name,
        users
    },
    touched,
    onBlur,
    onChange
}) => {
    const getErrors = (id) => {
        if (touched[id] && errors[id]) {
            return {
                error: errors[id],
                status: 'invalid'
            };
        }
        return {
            error: '',
            status: ''
        };
    };

    return (
        <Fragment>
            <Input
                id="name"
                label="Name"
                placeholder="Type here"
                value={name}
                validation={getErrors('name')}
                onBlur={onBlur}
                onChange={onChange}
            />
            <Input
                id="ip"
                label="IP Address"
                placeholder="Type here"
                value={ip}
                validation={getErrors('ip')}
                onBlur={onBlur}
                onChange={onChange}
            />
            <Select
                id="users"
                data={usersMetaData}
                isMulti
                label="Users"
                placeholder="Select Users"
                validation={getErrors('users')}
                value={users}
                withSearch
                withSelectAll
                onBlur={onBlur}
                onChange={onChange}
            />
            <Checkbox
                id="active"
                label="Active"
                value={active}
                validation={getErrors('active')}
                onChange={onChange}
            />
        </Fragment>
    );
};

PrintersForm.propTypes = propTypes;

export default graphql(getUsers)(PrintersForm);
