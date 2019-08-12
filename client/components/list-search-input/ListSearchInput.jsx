import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSearch as SearchIcon } from 'react-icons/md';

// Styles
import { Input, SearchWrapper } from './styles';

// Default props
const defaultProps = {
    isDisabled: false,
    isFocused: false,
    placeholder: ''
};

// Prop types
const propTypes = {
    isDisabled: PropTypes.bool,
    isFocused: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    onChange: PropTypes.func.isRequired
};

const ListSearchInput = ({
    isDisabled,
    isFocused,
    placeholder,
    value,
    onChange,
    ...props
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    });

    return (
        <SearchWrapper isDisabled={isDisabled}>
            <SearchIcon size={20} />
            <Input
                {...props}
                ref={inputRef}
                isDisabled={isDisabled}
                disabled={isDisabled}
                value={value}
                placeholder={placeholder}
                onChange={({ target }) => onChange(target.value)}
                type="text"
            />
        </SearchWrapper>
    );
};

ListSearchInput.defaultProps = defaultProps;
ListSearchInput.propTypes = propTypes;

export default ListSearchInput;
