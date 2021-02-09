import React, { useState } from 'react';
import { Button } from '../components/buttons/Buttons';
import { Soldiers } from '../components/soldiers/Soldiers';
import { Weapon } from '../components/weapons/Weapons';
import { Title } from '../components/title/Title';
import { log } from 'console';


export const CreateSoldiers: React.FC = () => {
    const [soldier, setSoldier] = useState({
        power: 0,
        agility: 0,
        inteligeance: 0,
        image: 1,
        point: 7
    })

    const handleRight = () => {
        if (soldier.image < 3) {
            setSoldier({
                ...soldier,
                image: soldier.image + 1
            })
        }
    }

    const handleLeft = () => {
        if (soldier.image > 1) {
            setSoldier({ ...soldier, image: soldier.image - 1 })
        }
    }

    const handlePowerUp = (carac: string) => {        
        if (carac === 'power' && soldier.power <= 5 && soldier.point > 0) {
            setSoldier({ ...soldier, power: soldier.power + 1, point : soldier.point - 1 })
        } else if (carac === 'agility' && soldier.agility < 5 && soldier.point > 0) {
            setSoldier({ ...soldier, agility: soldier.agility + 1, point : soldier.point - 1 })
        } else if (carac === 'inteligeance' && soldier.inteligeance < 5 && soldier.point > 0) {
            setSoldier({ ...soldier, inteligeance: soldier.inteligeance + 1, point : soldier.point - 1 })
        }
    }

    const handlePowerLess = (carac: string) => {
        if (carac === 'power' && soldier.power <= 5 || soldier.power > 1 && soldier.point > 0) {
            setSoldier({ ...soldier, power: soldier.power - 1, point : soldier.point + 1 })
        } else if (carac === 'agility' && soldier.agility <= 5 || soldier.agility > 1 && soldier.point > 0) {
            setSoldier({ ...soldier, agility: soldier.agility - 1, point : soldier.point + 1 })
        } else if (carac === 'inteligeance' && soldier.inteligeance <= 5 || soldier.inteligeance > 1 && soldier.point > 0) {
            setSoldier({ ...soldier, inteligeance: soldier.inteligeance - 1, point : soldier.point + 1 })
        }
    }


    return (<>
        <Title text="Créateur de personnage" />
        <Soldiers
            right={handleRight} left={handleLeft}
            power={soldier.power} agility={soldier.agility}
            inteligeance={soldier.inteligeance} img={soldier.image}
            point={soldier.point} powerUp={handlePowerUp} powerLess={handlePowerLess}
        />
        <Weapon />
        <Button text="Rénitialiser" btnCss="btn btn-danger" propsCss="w-50" clic={() => console.log("réinitialisation du personnage")} />
        <Button text="Créer" btnCss="btn btn-success" propsCss="w-50" clic={() => console.log("création du personnage")} />

    </>

    );
}