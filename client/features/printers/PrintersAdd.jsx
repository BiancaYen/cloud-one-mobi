// Printers Add

import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
import getPrintersQuery from '../../queries/getPrinters';
import addPrinterMutation from '../../queries/addPrinter';

// Prop Types
const propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    mutate: PropTypes.instanceOf(Object).isRequired
};

const PrintersAdd = ({
    history,
    mutate
}) => {
    const [isDisabled, setDisabled ] = useState(true);

    const handleCancelRedirect = () => {
        history.push('/');
    };

    return (
        <Card heading="Add Printer">
            <Formik
                initialValues={{
                    active: false,
                    name: '',
                    ip: '',
                    users: []
                }}
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
                        setDisabled(false);
                    };

                    const handleChange = ({ id, value }) => {
                        setFieldValue(id, value);
                        setFieldTouched(id, true);
                        setDisabled(false);
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
                                    isDisabled={isDisabled || !!Object.keys(errors).length}
                                    isLoading={isSubmitting}
                                    title="Add"
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

PrintersAdd.propTypes = propTypes;

export default graphql(addPrinterMutation)(withRouter(PrintersAdd));
