import styled from '@emotion/styled';

import getTheme from '../../utils/getTheme';

const getProperty = getTheme('list');

const Action = styled.div`
    cursor: pointer;
    margin-left: 10px;
    outline: none;
    path {
        color: ${getProperty('itemActionColor')};
        transition: color 0.1s linear;
        &:hover {
            color: ${getProperty('itemActionColorHover')};
        }
    }
`;

const Actions = styled.div`
    align-items: center;
    display: flex;
    margin: 0 10px 0 auto;
`;

const Item = styled.div`
    align-items: center;
    color: ${getProperty('itemColor')};
    display: flex;
    font-size: 18px;
    margin: 10px 0;
    padding: 10px;
    &:nth-of-type(odd) {
        background: ${getProperty('itemBackground')};
    }
    &:nth-of-type(even) {
        padding: 5px 10px;
    }
`;

const Subtitle = styled.div`
    color: ${getProperty('itemSubtitleColor')};
    margin-left: 10px;
`;


const Title = styled.div`
    color: ${getProperty('itemTitleColor')};
    font-weight: bold;
    margin-left: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
`;

export {
    Action,
    Actions,
    Item,
    Subtitle,
    Title,
    Wrapper
};
