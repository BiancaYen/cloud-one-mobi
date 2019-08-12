import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('label');

const Wrapper = styled.label`
    position: relative;
    padding: 5px 0;
    color: ${getProperty('color')};
    font-size: 14px;
    font-weight: 400;
    margin: ${({ spacing }) => spacing || ''};
`;

export default Wrapper;
