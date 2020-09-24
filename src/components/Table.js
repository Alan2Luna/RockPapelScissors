import React,{ useState, useEffect, useContext } from 'react';

import Game from './Game';
import Vs from './Vs';

import win from '../function/winner';
import { Context } from '../context/ScoreContext'


const Table = () => {
    const [active, setActive] = useState(false);
    const [picked, setPicked] = useState('');
    const [housePicked, setHousePicked] = useState('');
    const [winner, setWinner] = useState('');
    const {score, setScore} = useContext(Context);

    useEffect(() => {
        if (picked !== '' && housePicked !== '') {
            setWinner(win(picked, housePicked));
        }
    }, [housePicked])

    useEffect(() => {
        if (!score < 1) {
            if (winner == 'win') {
                setScore(score + 1)
            } else if (winner == 'lose'){
                setScore(score - 1)
            }
        } else {
            if (winner == 'win') {
                setScore(score + 1)
            }
        }
    }, [winner])

    const handleActive = (name) => {
        if (picked !== '' && active !== false) {
            setPicked('');
            setHousePicked('')
            setActive(!active);
            setWinner('')
        } else {
            setPicked(name)
            setActive(!active);
        }
    }
    return (
        <>
        {
            active 
                ?   <Vs 
                        handleActive={handleActive} 
                        picked={picked} 
                        housePicked={housePicked} 
                        setHousePicked={setHousePicked}
                        winner={winner}
                        active={active}
                    />
                :  <Game 
                        handleActive={handleActive} 
                    />
        }
        </>
    )
}

export default Table;