// Printers Edit

import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';

// Components
import {
    Button,
    Card,
    CardSubmitActions
} from '../../components';

// Feature Components
import PrintersForm from './PrintersForm';

// Queries
import getPrinterQuery from '../../queries/getPrinter';
import getPrintersQuery from '../../queries/getPrinters';
import editPrinterMutation from '../../queries/editPrinter';

// Prop Types
const propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
    history: PropTypes.instanceOf(Object).isRequired,
    mutate: PropTypes.instanceOf(Object).isRequired
};

const PrintersEdit = ({
    data,
    history,
    mutate
}) => {
    const initialData = {
        active: false,
        name: '',
        ip: '',
        users: []
    };

    const { printer = initialData, loading } = data;

    const [initialValues, setInputs] = useState(initialData);

    const handleCancelRedirect = () => {
        history.push('/');
    };

    useEffect(() => {
        const formattedPrinter = { ...printer, users: printer.users.map(user => user.id) };
        setInputs(prevState => ({ ...prevState, ...formattedPrinter }));
    }, [loading]);

    return (
        <Card isLoading={loading} heading="Edit The Printer">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.ip) {
                        errors.ip = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    mutate({
                        variables: values,
                        refetchQueries: [{ query: getPrintersQuery }]
                    }).then(() => {
                        setSubmitting(false);
                        history.push('/');
                    });
                }}
            >
                {({
                    errors,
                    values,
                    isSubmitting,
                    setFieldValue,
                    setFieldTouched,
                    touched,
                    onSubmit
                }) => {
                    const handleBlur = ({ id }) => {
                        setFieldTouched(id, true);
                    };

                    const handleChange = ({ id, value }) => {
                        setFieldValue(id, value);
                        setFieldTouched(id, true);
                    };

                    return (
                        <Form>
                            <PrintersForm
                                errors={errors}
                                values={values}
                                touched={touched}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <CardSubmitActions>
                                <Button
                                    isOutlined
                                    title="Cancel"
                                    onClick={handleCancelRedirect}
                                />
                                <Button
                                    isDisabled={!!Object.keys(errors).length}
                                    isLoading={isSubmitting}
                                    title="Save"
                                    onClick={onSubmit}
                                />
                            </CardSubmitActions>
                        </Form>
                    );
                }}
            </Formik>
        </Card>
    );
};

PrintersEdit.propTypes = propTypes;

export default graphql(editPrinterMutation)(
    graphql(getPrinterQuery, {
        options: props => ({ variables: { id: props.match.params.id } })
    })(withRouter(PrintersEdit))
);
