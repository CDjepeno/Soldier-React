import React from 'react';

import ImageArc from '../../assets/images/armes/arc.png'
import ImageEpee from '../../assets/images/armes/epee.png'
import ImageFleau from '../../assets/images/armes/fleau.png'
import ImageHache from '../../assets/images/armes/hache.png'
import classes from './weapon.module.css'

type Props = {
    listWeapon: Array<string>;
    selectWeapon: any;
    weapon: any
}

export const Weapon: React.FC<Props> = ({ listWeapon, selectWeapon, weapon }) => {

    const myclasses = `${weapon ? classes.img1 : classes.img} col`;
    
    return (
        <div className="row no-gutters text-center mt-3">
            {listWeapon && listWeapon.map((l,index) => { 
                let imgweapon;
                switch(l){
                    case "arc" : imgweapon = ImageArc
                    break;
                    case "epee" : imgweapon = ImageEpee
                    break;
                    case "fleau" : imgweapon = ImageFleau
                    break;
                    case "hache" : imgweapon = ImageHache
                    break;
                }
                return (
                
                <div className="col"  key={index} onClick={() => selectWeapon(l)} >
                    <img src={imgweapon} alt="Arc"  className={weapon === l ? classes.im1 : classes.img}/>
                    <p>{l}</p>
                </div>)
            })}
        </div>	
    )
}