// Header Component

import React from 'react';

// Styles
import { ImageWrapper, Wrapper } from './styles';

// Images
import cloudOneMobiLogo from '../../images/cloud_one_mobi_logo.svg';

const Header = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={cloudOneMobiLogo} alt="Cloud One Mobi" />
            </ImageWrapper>
        </Wrapper>
    );
};

export default Header;
