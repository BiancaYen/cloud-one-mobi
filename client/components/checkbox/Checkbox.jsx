// Checkbox

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { MdDone } from 'react-icons/md';

// Styles
import { CheckboxWrapper, InputWrapper } from './styles';

// Components
import Label from '../label/Label';

// Default Props
const defaultProps = {
    isDisabled: false,
    label: '',
    spacing: ''
};

// Prop Types
const propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    spacing: PropTypes.string,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

const Checkbox = ({
    isDisabled,
    id,
    label,
    spacing,
    value,
    onChange
}) => {
    const handleOnChange = ({ target }) => {
        if (!isDisabled) {
            onChange({ id, value: target.checked });
        }
    };

    return (
        <CheckboxWrapper
            htmlFor={id}
            isDisabled={isDisabled}
            spacing={spacing}
        >
            <InputWrapper
                isDisabled={isDisabled}
                checked={value}
            >
                <input
                    id={id}
                    checked={value}
                    disabled={isDisabled}
                    tabIndex="0"
                    type="checkbox"
                    value={value}
                    onChange={handleOnChange}
                />
                <span><MdDone /></span>
            </InputWrapper>
            { label
                && (
                    <Label
                        isDisabled={isDisabled}
                        id={id}
                        spacing="0 0 0 10px"
                    >
                        {label}
                    </Label>
                )
            }
        </CheckboxWrapper>
    );
};

Checkbox.defaultProps = defaultProps;
Checkbox.propTypes = propTypes;

export default Checkbox;
