import React from 'react';
import styled from 'styled-components';

import Rock from '../../public/images/icon-rock.svg';
import Paper from '../../public/images/icon-paper.svg';
import Scissors from '../../public/images/icon-scissors.svg';

const options = {
    "paper": [
        "hsl(230, 89%, 65%)",
        "hsl(230, 89%, 62%)"
    ],
    "rock": [
        "hsl(349, 70%, 56%)",
        "hsl(349, 71%, 52%)"
    ],
    "scissors": [
        "hsl(40, 84%, 53%)",
        "hsl(39, 89%, 49%)"
    ]
}

const StyledPocket = styled.div`
    width: 130px;
    height: 125px;
    border-radius: 50%;
    border: 15px solid ${props => props.name ? options[props.name][0] : ''};
    background-color: white;
    box-shadow: 0 6px ${props => props.name ? options[props.name][1] : ''};
    ${({winner}) => winner && 'box-shadow: 0 0 0 40px rgba(225, 225, 225, .1), 0 0 0 80px rgba(225, 225, 225, .05), 0 0 0 120px rgba(225, 225, 225, .02);'}
    

    &:active {
        transform: scale(0.9);
    }

    @media (min-width: 695px) {
        width: ${props => props.size ? "230px" : "130px"};
        height: ${props => props.size ? "225px" : "125px"};
        border: ${props => props.size ? "25px" : "15px"} solid ${props => props.name ? options[props.name][0] : ''};
    }

    .box__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 -3px #bfb3b3;
    }
    img {
        width: 45px;
        height: 50px;

        @media (min-width: 695px) {
            width: ${props => props.active ? '65px' : '45px'};
            height: ${props => props.active ? '70px' : '50px'};
        }
    }
`

const selectImage = (name) => {
    switch(name) {
        case 'rock':
            return Rock
        case 'paper':
            return Paper
        case 'scissors':
            return Scissors
    }
}

const Pocket = ({ name, handleActive, size, active, winner}) => {
    const handleClick = () => {
        if (handleActive) {
            handleActive(name)
        }
    }

    return (
        <StyledPocket 
            name={name}
            size={size}
            onClick={handleClick}
            active={active}
            winner={winner}
        >
            <div className="box__icon">
                <img src={selectImage(name)} /> 
            </div>
        </StyledPocket>
    );
}

export default Pocket;