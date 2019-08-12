// Printers Index

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { MdAdd, MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Components
import { Card, List, ListItem, ListItemAction } from '../../components';

// Queries
import getPrintersQuery from '../../queries/getPrinters';
import deletePrintersMutation from '../../queries/deletePrinter';

// Prop Types
const propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
    history: PropTypes.instanceOf(Object).isRequired,
    mutate: PropTypes.instanceOf(Object).isRequired
};

const PrintersIndex = ({ data, history, mutate }) => {
    const { printers = [], loading } = data;

    const [isSubmitting, setSubmit] = useState(false);

    const handleEditRedirect = (id) => {
        history.push(`/printers/edit/${id}`);
    };

    const handleDeleteSubmit = (id) => {
        setSubmit(true);
        mutate({
            variables: {
                id
            }
        }).then(() => {
            setSubmit(false);
            data.refetch();
        });
    };

    const getUserCopy = (users) => {
        const count = users.length;
        return users.length === 1 ? `(${count} User)` : `(${count} Users)`;
    };

    return (
        <Card
            action={(
                <Link to="/printers/add">
                    <MdAdd size={25} />
                    Add Printer
                </Link>
            )}
            isLoading={loading}
            heading="Printers"
        >
            <List
                data={printers}
                isLoading={loading || isSubmitting}
                messageNoData="No printers saved"
            >
                {
                    printersData => (
                        printersData.map(({
                            id,
                            active,
                            ip,
                            name,
                            users
                        }, index) => (
                            <ListItem
                                actions={[
                                    <ListItemAction onClick={() => handleDeleteSubmit(id)}>
                                        <MdDelete size={25} />
                                    </ListItemAction>,
                                    <ListItemAction onClick={() => handleEditRedirect(id)}>
                                        <MdModeEdit size={25} />
                                    </ListItemAction>
                                ]}
                                key={id}
                            >
                                {
                                    () => ({
                                        index: index + 1,
                                        subtitle: `${ip} (${active ? 'Active' : 'Inactive'}) ${getUserCopy(users)}`,
                                        title: name
                                    })
                                }
                            </ListItem>
                        ))
                    )
                }
            </List>
        </Card>
    );
};

PrintersIndex.propTypes = propTypes;

export default graphql(deletePrintersMutation)(
    graphql(getPrintersQuery)(PrintersIndex)
);
