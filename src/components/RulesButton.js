import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 120px;
    height: 38px;
    border-radius: 8px;
    text-transform: uppercase;
    background-color: transparent;
    color: white;
    outline: none;
    border: 1px solid #8b94a2;
    letter-spacing: 3px;
    font-size: .8em;
    font-weight: 600;

    @media (min-width: 560px) {
        position: absolute;
        bottom: 2em;
        right: 2em;
    }
`

const RulesButton = ({ onOpen }) => (
    <StyledButton onClick={onOpen}>
        Rules
    </StyledButton>
)

export default RulesButton;