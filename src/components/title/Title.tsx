import React from 'react';
import classes from './title.module.css'

type Props = {
    text: string
}

export const Title: React.FC<Props> = ( { text } ) => {
    const myCss = `${classes.policeTitle} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`
    return (
        <h1 className={myCss}>{text}</h1>
    )
}