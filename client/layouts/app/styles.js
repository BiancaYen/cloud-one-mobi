import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('layout');

const resetStyles = css`
    * {
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    
    html, body {
      margin: 0;
      height: 100%;
    
        > div {
          &:first-of-type {
            height: 100%;
          }
        }
    }

    html, body, button, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite,
    code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure,
    figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
        margin: 0;  
        padding: 0;  
        border: 0;  
        font-family: 'Poppins', sans-serif;
        vertical-align: baseline;
        letter-spacing: 1.2px; 
    }
    
    a {
        text-decoration: none;
    }
    
    #root {
        > div {
          height: 100%;
        }
    }
`;

const Content = styled.div`
    background: ${getProperty('background')};
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    position: relative;
    overflow: auto;
`;

const Wrapper = styled.div`
    display: table;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
`;

export {
    Content,
    Wrapper,
    resetStyles
};
