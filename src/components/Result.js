import React from 'react';
import styled from 'styled-components';

const StyledResult = styled.div`
    h1 {
        color: white;
        font-size: 1.9em;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;

        @media (min-width: 695px) {
            font-size: 1.2em;
        }
    }

    button {
        text-transform: uppercase;
        font-size: .6em;
        letter-spacing: 2px;
        padding: 1em 3.2em;
        margin-top: .8em;
        border-radius: 9px;
        border: none;
        color: hsl(229, 25%, 31%);
        outline: none;

        @media (min-width: 695px) {
            width: 160px;
            font-size: .4em;
            padding: .8em 3em;
            cursor: pointer;
        }
    }
`

const Result = ({ handleActive, winner }) => {
    return (
        <StyledResult>
            <h1>You {winner}</h1>
            <button onClick={handleActive}>Play again</button>
        </StyledResult>
    )
}

export default Result;