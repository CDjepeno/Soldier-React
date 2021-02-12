import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ImageSoldier1 from '../../assets/images/soldiers/soldier1.png'
import ImageSoldier2 from '../../assets/images/soldiers/soldier2.png'
import ImageSoldier3 from '../../assets/images/soldiers/soldier3.png'
import ImageArc from '../../assets/images/armes/arc.png'
import ImageEpee from '../../assets/images/armes/epee.png'
import ImageFleau from '../../assets/images/armes/fleau.png'
import ImageHache from '../../assets/images/armes/hache.png'
import classes from './soldiers.module.css'
import SoldierService from '../../services/SoldiersAPI';


// type Props = {
//     solidiers: string
// }

interface Soldiers {
    name:string;
    perso: {
        weapon:string;
        point:number;
        inteligeance:number;
        agility:number;
        power:number;
        image:number;
    }
}

interface Props {
    reffresh: any;
}


export const Soldiers: React.FC<Props> = ({ reffresh }) => {

    const [soldiers, setSoldiers] = useState<Soldiers[]>([])
    const [loading, setloading] = useState(true)
    
    function usePrevious(value:any) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    
    const prevState = usePrevious(reffresh);

    const fetchSoldiers = async () => {
        try {
            const data: any = await SoldierService.getSoldiers()
            setSoldiers(data);
            setloading(false);
        } catch(error) {
            console.log(error);  
        }
    }
    
    useEffect(() => {
        if( reffresh !== prevState) {
            fetchSoldiers()
        }
    },[reffresh])    

    return (<>
        <div className="row">
            {soldiers.map((soldier, index) => {
                let imgToPrint: any = "";
                 if(soldier.perso.image === 1) {
                    imgToPrint = ImageSoldier1
                }else if(soldier.perso.image === 2) {
                    imgToPrint = ImageSoldier2
                }else if(soldier.perso.image === 3) {
                    imgToPrint = ImageSoldier3
                }

                let imgweapon;
                switch(soldier.perso.weapon){
                    case "arc" : imgweapon = ImageArc
                    break;
                    case "epee" : imgweapon = ImageEpee
                    break;
                    case "fleau" : imgweapon = ImageFleau
                    break;
                    case "hache" : imgweapon = ImageHache
                    break;
                }
                const myclasses = `${ classes.card} row no-gutters mt-2 mr-2`;
                return (
                <>
                    {loading && <div>Chargement...</div> || 
                        <div className="col-6" key={index}>
                            <div className={myclasses}>
                                <div className="col">
                                    <p>{soldier.name}</p>
                                    <img src={imgToPrint} alt={soldier.name}/>
                                </div>
                                <div className="col">
                                    <p>Force : {soldier.perso.power}</p>
                                    <p>Agilité : {soldier.perso.agility}</p>
                                    <p>Intelligence : {soldier.perso.inteligeance}</p>
                                    <img src={imgweapon} alt={soldier.perso.weapon}/>
                                </div>
                            </div>    
                        </div>
                    }
                </>
                )
            })}
        </div>       
    
    </>
    )
}