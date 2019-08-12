import React from 'react';
import PropTypes from 'prop-types';

// Components
import SelectRow from './rows/SelectRow';

// Default props
const defaultProps = {
    numRows: 7
};

// Prop types
const propTypes = {
    children: PropTypes.string.isRequired,
    numRows: PropTypes.number
};

const SelectNoResults = ({ children, numRows }) => {
    return (
        <React.Fragment>
            <SelectRow
                id="notFound"
                isDisabled
                onClick={() => {}}
            >
                {children}
            </SelectRow>
            {
                Array.from(Array(numRows), () => Math.random()
                    .toString(36)
                    .substring(2, 15))
                    .map(key => (
                        <SelectRow
                            id={key}
                            key={key}
                            onClick={() => {}}
                        >
                            {' '}
                        </SelectRow>
                    ))
            }
        </React.Fragment>
    );
};

SelectNoResults.defaultProps = defaultProps;
SelectNoResults.propTypes = propTypes;

export default SelectNoResults;
