import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Pocket from './Pocket';
import Result from './Result';
import Undefined from './Undefined';

const StyledVs = styled.div`
    font-size: 2em;
    width: 100%;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1em 1.4em;

    & div:nth-of-type(3) {
        grid-column: span 2;

        @media (min-width: 695px) {
            order: 1;
        }
    }

    @media (min-width: 695px) {
        display: flex;
        align-items: center;
        justify-content: center;

        .container__result.gamer {
            order: 0;
            /* margin-left: -1.7em; */
        }
    }

    .container__result {
        p {
            font-size: .4em;
            margin-top: 2.3em;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
            color: white;
            font-weight: 600;
        }

        @media (min-width: 695px) {
            display: flex;
            flex-direction: column-reverse;
            order: 2;

            p {
                margin-top: 0;
                margin-bottom: 2em;
            }
        }
    }

    @media (min-width: 560px) {
        height: 320px;
    }
`

const Vs = ({ handleActive, picked, housePicked, setHousePicked, active, winner }) => {
    const [result, setResult] = useState(false);
    
    const option = {
        1 : "paper",
        2 : "rock",
        3 : "scissors"
    }

    useEffect(() => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const timer = setTimeout(() => {
            setHousePicked(option[getRandomInt(1, 3)])
            setResult(!result)
            }, 1000)
        return () => clearTimeout(timer);
    }, [])

    return(
        <StyledVs>
            <div className="container__result gamer">
                <Pocket active={active} name={picked} size={"big"} winner={(winner === 'win')}/>
                <p>You Picked</p>
            </div>
            <div className="container__result">
                {
                    housePicked
                        ? <Pocket active={active} name={housePicked} size={"big"} winner={(winner === 'lose')} />
                        : <Undefined />
                }
                <p>The House Picked</p>
            </div>
            {
                result
                    ? <Result handleActive={handleActive} winner={winner} />
                    : null
            }
        </StyledVs>
    )
}

export default Vs;