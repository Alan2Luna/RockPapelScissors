import React, { useState } from 'react';

export const Context = React.createContext();

export const ScoreContext = (props) => {
    const [score, setScore] = useState(0);
    const value = {
        score,
        setScore
    }

    return <Context.Provider value={value} {...props}/>
}