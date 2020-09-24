import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 1.8em;
    padding-top: 1.8em;
    padding-bottom: 3em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 320px) {
        margin: 0 .5em;
    }

    @media (min-width: 425px) {
        width: 90%;
        margin: 0 auto;
    }

    @media (min-width: 560px) {
        width: 520px;
        padding: 0;
        align-items: flex-end;
        justify-content: space-evenly;
    }
`

const Container = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default Container;