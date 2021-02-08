import React from 'react';
import ImageSoldier1 from '../../assets/images/soldiers/soldier1.png'
import ImageSoldier2 from '../../assets/images/soldiers/soldier2.png'
import ImageSoldier3 from '../../assets/images/soldiers/soldier3.png'
import classes from './imageSoldiers.module.css'

type Props = {
    numImg: number;
    right: any;
    left: any;
}

export const ImageSoldiers: React.FC<Props> = ( { numImg, right, left } ) => {

    let imgToPrint = "";

    if(numImg === 1) {
        imgToPrint = ImageSoldier1
    }else if(numImg === 2) {
        imgToPrint = ImageSoldier2
    }else if(numImg === 3) {
        imgToPrint = ImageSoldier3
    }

    return (
        <div className="row no gutters text-center align-items-center">
            {numImg !== 1 && 
                <div className={["col-1",classes.fleche,classes.gauche].join(' ')} onClick={left}></div>
            }
            <div className="col">
                <img src={imgToPrint} alt="soldat"/>
            </div>
            {numImg !== 3 && 
                <div className={["col-1",classes.fleche,classes.droite].join(' ')} onClick={right}></div>
            }
        </div>
    )
}