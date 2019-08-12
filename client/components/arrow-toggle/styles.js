import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('arrowToggle');

const selectFillColor = ({ isActive, isDisabled }) => {
    if (isDisabled) {
        return getProperty(['colorDisabled']);
    }

    return getProperty(isActive ? 'colorActive' : 'color');
};

const Wrapper = styled.span`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    cursor: ${({ isDisabled }) => (isDisabled ? 'normal' : 'pointer')}; 
    
    & > svg {
        path{
            fill: ${selectFillColor};
        }
    }
`;

export default Wrapper;
