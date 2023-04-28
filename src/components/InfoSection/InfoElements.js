import React from 'react';
import styled from 'styled-components';

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#fpfpfp' : '010606')};
@media screen and (max-width: 768 px) {
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
justify-content: center;
`

