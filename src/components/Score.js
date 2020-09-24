import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../context/ScoreContext';

const StyledScore = styled.div`
    background-color: white;
    color: hsl(229, 64%, 46%);
    text-align: center;
    border-radius: 3px;
    margin: .5em;
    padding: .5em 1.5em;

    h3 {
        font-size: .7em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        @media (min-width: 560px) {
            font-size: .9em;
        }
    }

    p {
        font-size: 2.8em;
        font-weight: 700;
        line-height: .9em;
        letter-spacing: -1px;
        @media (min-width: 560px) {
            font-size: 3.5em;
        }
    }
`

const Score = () => {
    const { score } = useContext(Context);

    return (
        <StyledScore>
            <h3>score</h3>
            <p>{score}</p>
        </StyledScore>
    )
}

export default Score;