// Validation Error

import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('validationError');

const ValidationError = styled.span`
    font-size: 11px;
    position: absolute;
    min-height: 15px;
    text-align: left;
    padding-top: 5px;
    color: ${getProperty('color')};
    bottom: -15px;
`;

export default ValidationError;
