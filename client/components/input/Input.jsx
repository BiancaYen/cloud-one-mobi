// Input Component

import PropTypes from 'prop-types';
import React from 'react';

// Components
import ValidationError from '../validation-error/ValidationError';
import Label from '../label/Label';

// Styles
import {
    InnerWrapper,
    Wrapper
} from './styles';

// Default props
const defaultProps = {
    isDisabled: false,
    isLoading: false,
    label: '',
    placeholder: '',
    type: 'text',
    validation: {
        status: '',
        error: ''
    },
    onBlur: () => {}
};

// Prop types
const propTypes = {
    id: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    validation: PropTypes.shape({
        status: PropTypes.string,
        error: PropTypes.string
    }),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired
};

const Input = ({
    isDisabled,
    isLoading,
    id,
    label,
    placeholder,
    type,
    validation,
    value,
    onBlur,
    onChange,
    ...props
}) => {
    const handleInputChange = (event) => {
        const { target: { value: inputValue } } = event;

        onChange({ id, value: inputValue, event });
    };

    return (
        <Wrapper>
            { label && <Label>{label}</Label> }
            <InnerWrapper
                validation={validation}
                isDisabled={isDisabled || isLoading}
            >
                <input
                    {...props}
                    disabled={isDisabled || isLoading}
                    id={id}
                    placeholder={placeholder}
                    tabIndex="0"
                    type="text"
                    value={value}
                    onBlur={() => onBlur({ id })}
                    onChange={handleInputChange}
                />
            </InnerWrapper>
            <ValidationError>
                { validation ? validation.error : ''}
            </ValidationError>
        </Wrapper>
    );
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;
