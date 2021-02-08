import React, { useState } from 'react';
import { Button } from '../components/buttons/Buttons';
import { Soldiers } from '../components/soldiers/Soldiers';
import { Weapon } from '../components/weapons/Weapons';
import { Title } from '../components/title/Title';


export const CreateSoldiers: React.FC = () => {
    const [soldier, setSoldier] = useState({
        power:0,
        agility:0,
        inteligeance:0,
        image: 1
    })

    const handleRight = () => {
        if(soldier.image < 3 ) {
            setSoldier({ ...soldier,
                image: soldier.image + 1  
            })
        }
    }
    
    const handleLeft = () => {
        if(soldier.image > 1) {
            setSoldier({ ...soldier, image: soldier.image - 1  })
        } 
    }

    return (<>
        <Title text="Créateur de personnage"/>
        <Soldiers right={handleRight} left={handleLeft} power={soldier.power} agility={soldier.agility} inteligeance={soldier.inteligeance} img={soldier.image}/>
        <Weapon />
        <Button text="Rénitialiser" btnCss="btn btn-danger" propsCss="w-50" clic={() => console.log("réinitialisation du personnage")}/>
        <Button text="Créer" btnCss="btn btn-success" propsCss="w-50" clic={() => console.log("création du personnage")}/>

        </>

    )
}