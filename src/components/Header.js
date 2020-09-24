import React from 'react';
import styled from 'styled-components';

import Score from './Score.js'

const StyledContainer = styled.div`
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 560px) {
        height: 110px;
    }

    h1 {
        font-size: 20px;
        color: white;
        text-transform: uppercase;
        line-height: 16px;
        font-weight: 700;
        margin: 1em;

        @media (min-width: 560px) {
            font-size: 26px;
            line-height: 21px;
            margin: .8em;
        }
    }
`

const Header = () => (
    <StyledContainer>
        <h1>Rock<br/>Papel<br/>Scissors</h1>
        <Score />
    </StyledContainer>
);

export default Header;