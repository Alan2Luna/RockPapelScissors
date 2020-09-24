import React, { Fragment, useState, useEffect } from 'react';

import GlobalStyle from '../styles/GlobalStyle';
import Container from './Container';
import Header from './Header';
import RulesButton from './RulesButton';
import Rules from './Rules';
import Table from './Table';

import { ScoreContext } from '../context/ScoreContext'

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => setIsOpen(!isOpen);

    return (
        <ScoreContext>
            <Fragment>
                <GlobalStyle />
                <Container>
                    <Header />
                    <Table />
                    <RulesButton onOpen={handleModal} />
                    {
                        isOpen
                            ? <Rules onClose={handleModal} />
                            : null
                    }
                </Container>
            </Fragment>
        </ScoreContext>
    )
}

export default App;