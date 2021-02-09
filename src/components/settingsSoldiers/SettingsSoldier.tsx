import React, { Children } from 'react';
import classes from './settingsSoldier.module.css'

type Props = {
    nbPoints: number;
    text: string;
    powerLess: any;
    powerUp: any;
   
}

export const SettingsSoldier: React.FC<Props>= ( {nbPoints, text, powerUp, powerLess} ) => {
    let carre = [];
    
    for(let i = 0; i < nbPoints; i++) {
        carre.push(<div key={i} className={classes.points}></div>)
    }
    return (
        <>
            <div className="row no-gutters">
                <div className={[classes.signe, classes.less].join(' ')} onClick={powerLess}></div>
                <div className="col-3">{text}</div>{carre}
                <div className={[classes.signe, classes.more].join(' ')} onClick={powerUp}></div>
            </div>
        </>
    )
}