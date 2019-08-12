import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('header');

const Wrapper = styled.header`
    background: ${getProperty('background')};
    background: linear-gradient(to top, ${getProperty('background')}, ${getProperty('backgroundAccent')});
    height: 300px;
    width: 100%;
    position: relative;
    
    h1 {
        color: ${getProperty('background')};
        font-size: 40px;
        margin: 20px;
        text-align: center;
    }
    
    img {
        
    }
`;

const ImageWrapper = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    width: 200px;
    
    img {
        width: 100%;
    }
`;

export {
    ImageWrapper,
    Wrapper
};
