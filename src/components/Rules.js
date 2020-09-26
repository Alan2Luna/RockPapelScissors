import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Imagen from '../../public/images/image-rules.svg';
import ButtonX from '../../public/images/icon-close.svg';

const StyledModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    .modal__box {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100vh;
        padding: 5em 0;
            button {
                background-color: transparent;
                border: none;
                outline: none;
                @media (min-width: 600px) {
                order: 2;
            }
        }

        @media (min-width: 600px) {
            width: 450px;
            height: 450px;
            padding: 2em;
            border-radius: 12px;
            flex-wrap: wrap;
            flex-direction: row;
        }
    }
    .modal__h2 {
        text-transform: uppercase;
        color: hsl(229, 25%, 31%);
        font-size: 2em;

        @media (min-width: 600px) {
            order: 1;
        }
    }
    img {
        @media (min-width: 600px) {
            order: 3;
            margin: 0 auto;
        }
    }
`

const Rules = ({ onClose }) => {
    return ReactDOM.createPortal(
        <StyledModal>
            <div className="modal__box">
                <h2 className="modal__h2">Rules</h2>
                <img src={Imagen} />
                <button onClick={onClose} ><img src={ButtonX} /></button>
            </div>
        </StyledModal>,
        document.getElementById('modal')
    )
}

export default Rules;