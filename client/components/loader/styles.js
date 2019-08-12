import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import getTheme from '../../utils/getTheme';

const getProperty = getTheme('loader');

const animation = keyframes`
    0% {
        top: 6px;
        height: 51px;
    }
    50%, 100% {
        top: 19px;
        height: 26px;
    }
`;

const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
        display: inline-block;
        position: absolute;
        left: 6px;
        width: 13px;
        background: ${getProperty('color')};
        animation: ${animation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    
    div:nth-of-type(1) {
        left: 6px;
        animation-delay: -0.24s;
    }
    
    div:nth-of-type(2) {
        left: 26px;
        animation-delay: -0.12s;
    }
    
    div:nth-of-type(3) {
        left: 45px;
        animation-delay: 0s;
    }
`;

const SpinnerWrapper = styled.div`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export {
    Spinner,
    SpinnerWrapper
};
