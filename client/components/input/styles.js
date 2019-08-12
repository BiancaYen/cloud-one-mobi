import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('input');

const getBorderProperty = ({ isDisabled, validation }) => {
    if (!isDisabled && validation.status && validation.status === 'invalid') {
        return getTheme('errorColor');
    }
    return getProperty('border');
};

const getPlaceholderColor = ({ isDisabled }) => {
    return isDisabled ? getProperty('placeholderDisabled') : getProperty('placeholder');
};

const InnerWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 45px;
    transition: all .5s ease;
    border: 2px solid ${getBorderProperty};
    
    input {
        display: block;
        font-family: inherit;
        font-size: 14px;
        outline: none;
        padding: 0 0 0 20px;
        resize: none;
        flex-grow: 1;
        background: transparent;
        border: none;
        
        caret-color: ${getProperty('caretColor')};
        color: ${({ isDisabled }) => (isDisabled ? getProperty('colorDisabled') : getProperty('color'))};
        
        // Reset
        -webkit-appearance: none;
        
        // Auto-fill
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            -webkit-text-fill-color: ${getProperty('color')};
        }
        
        // Placeholder
        &::-webkit-input-placeholder {
            color: ${getPlaceholderColor};
        }
        &::-moz-placeholder {
            color: ${getPlaceholderColor};
        }
        &:-moz-placeholder {
            color: ${getPlaceholderColor};
        }
        &:-ms-input-placeholder {
            color: ${getPlaceholderColor};
        }
    }
    
    &:focus-within {
        border: 2px solid ${getProperty('borderFocused')};
        background: ${getProperty('backgroundFocused')};
    }
`;

const Wrapper = styled.div`
    margin: 20px 0 10px 0;
    position: relative;
`;

export {
    InnerWrapper,
    Wrapper
};
