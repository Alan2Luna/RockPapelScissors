import React from 'react';
import styled from 'styled-components';

const StyledUndefined = styled.div`
    width: 120px;
    height: 120px;
    background-color: #1e243c;
    border-radius: 50%;
    margin: 5px 0;

    @media (min-width: 695px) {
        width: 210px;
        height: 205px;
        margin: 10px 0;
    }
`

const Undefined = ({ size }) => (
    <StyledUndefined></StyledUndefined>
)

export default Undefined;