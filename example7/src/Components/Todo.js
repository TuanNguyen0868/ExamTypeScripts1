import React from 'react';
import Button from '@atlaskit/button';
import styled from 'styled-components';
const StButon = styled(Button)`
    margin-top: 5px;
    text-align: center;
    width: 100px;
    margin: 15px;
    background-color: blue;
`;
export default function Todo() {
    return <StButon>Login</StButon>;
}


