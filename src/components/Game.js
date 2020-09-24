import React from 'react';
import styled from 'styled-components';

import Pocket from './Pocket';

const StyledGame = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 2em;
    position: relative;
    width: 100%;
    & div:nth-of-type(3) {
        grid-column: span 2;
    }

    @media (min-width: 560px) {
        height: 320px;
    }

    .bg-triangle {
        position: absolute;
        width: 270px;
        height: 200px;
        top: 18%;
        z-index: -1;
    }
`


const Game = ({ handleActive }) => {
    return (
        <StyledGame>
            <img className="bg-triangle" src="../../images/bg-triangle.svg" />
            <Pocket name="paper" handleActive={handleActive} />
            <Pocket name="scissors" handleActive={handleActive} />
            <Pocket name="rock" handleActive={handleActive} />
        </StyledGame>
    )
}

export default Game;