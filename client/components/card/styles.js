import styled from '@emotion/styled';

import getTheme from '../../utils/getTheme';

const getProperty = getTheme('card');

const Action = styled.div`
    a {
        align-items: center;
        border-radius: 4px;
        color: ${getProperty('actionColor')};
        cursor: pointer;
        display: flex;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 10px;
        &:hover {
            background: ${getProperty('actionBackgroundHover')};
        }
    }
`;

const Content = styled.div`
    flex: 1;
    position: relative;
`;

const Heading = styled.h1`
    align-items: center;
    border-bottom: 1px solid ${getProperty('headingBorderColor')};
    color: ${getProperty('headingColor')};
    display: flex;
    font-size: 25px;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 10px;
`;

const SubmitActions = styled.div`
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
`;

const Wrapper = styled.div`
    background: #FFF;
    box-shadow: 0 4px 6px 0 rgba(50, 50, 50, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 70vh;
    left: 50%;
    min-height: 70vh;
    padding: 20px;
    position: absolute;
    top: 20vh;
    transform: translateX(-50%);
    width: 50%;
`;

export {
    Action,
    Content,
    Heading,
    SubmitActions,
    Wrapper
};
