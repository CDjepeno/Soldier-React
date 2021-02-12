import React, { useEffect, useState } from 'react';
import { Button } from '../../components/buttons/Buttons';
import { Soldier } from '../../components/soldier/Soldier';
import { Weapon } from '../../components/weapons/Weapons';
import { Title } from '../../components/title/Title';
import WeaponService from '../../services/weaponAPI';
import SoldierService from '../../services/SoldiersAPI';

interface PropsState {
    power:number;
    agility:number;
    inteligeance:number;
    image:number;
    point:number;
    weapons:Array<string>|null;
    weapon:any;
    load:boolean;
    name:string;
   
}

interface Props {
    refresh:any;
}

export const CreateSoldiers: React.FC<Props> = ({ refresh }) => {
    const [soldier, setSoldier] = useState<PropsState>({
        power: 0,
        agility: 0,
        inteligeance: 0,
        image: 1,
        point: 7,
        weapons: null, 
        weapon: null, 
        load: false,
        name: ""
    })
    
    useEffect(() => {
        setSoldier({...soldier, load: true})
        WeaponService.getWeapons()
        .then(weapons => setSoldier({...soldier, weapons:weapons}))   
    }, [])
    
    
    /**
     * Permet de changer de personnage en cliquant à droite
     */
    const handleRight = () => {
        if (soldier.image < 3) {
            setSoldier({
                ...soldier,
                image: soldier.image + 1
            })
        }
    }
    
    /**
     * Permet de changer de personnage en cliquant a gauche
     */
    const handleLeft = () => {
        if (soldier.image > 1) {
            setSoldier({ ...soldier, image: soldier.image - 1 })
        }
    }

    /**
     * Permet d'augmenter les stats
     */
    const handlePowerUp = (carac: string) => {        
        if (carac === 'power' && soldier.power <= 5 && soldier.point > 0) {
            setSoldier({ ...soldier, power: soldier.power + 1, point : soldier.point - 1 })
        } else if (carac === 'agility' && soldier.agility < 5 && soldier.point > 0) {
            setSoldier({ ...soldier, agility: soldier.agility + 1, point : soldier.point - 1 })
        } else if (carac === 'inteligeance' && soldier.inteligeance < 5 && soldier.point > 0) {
            setSoldier({ ...soldier, inteligeance: soldier.inteligeance + 1, point : soldier.point - 1 })
        }
    }

    /**
     * Permet de diminué les stats
     */
    const handlePowerLess = (carac: string) => {
        if (carac === 'power' && soldier.power <= 5 || soldier.power > 1 && soldier.point < 7) {
            setSoldier({ ...soldier, power: soldier.power - 1, point : soldier.point + 1 })
        } else if (carac === 'agility' && soldier.agility <= 5 || soldier.agility > 1 && soldier.point <= 7) {
            setSoldier({ ...soldier, agility: soldier.agility - 1, point : soldier.point + 1 })
        } else if (carac === 'inteligeance' && soldier.inteligeance <= 5 || soldier.inteligeance > 1 && soldier.point < 7) {
            setSoldier({ ...soldier, inteligeance: soldier.inteligeance - 1, point : soldier.point + 1 })
        }
    }

    /**
     * Mise a jour du state via l'input
     */
    const handleChangeWeapon = (weapon: any) => {
        const newSoldier = {...soldier};
        setSoldier({...newSoldier, weapon: weapon })        
    }

    /**
     * Mise à jour des données
     */
    const handleReset = () => {
        setSoldier({...soldier,
            weapon: null,
            power: 0,
            agility: 0,
            inteligeance: 0,
            point: 7,
        })
    }

    /**
     * Création d'un personnage
     */
    const handleCreate = (e:any) => {
        setSoldier({...soldier, load: true})

        const player: any = {
            perso : {...soldier}, 
            name : soldier.name 
        }
        SoldierService.addSoldier(player)
        .then(response => {
            console.log(response);
            handleReset();
            refresh();
        })
    }



    return (<>
        <Title text="Créateur de personnage" />
        <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Votre nom</label>
            <input type="text" name="name" className="form-control" id="inputName" value={soldier.name} onChange={(e) => setSoldier({...soldier, name:e.target.value})}/>
        </div>
        <Soldier
            right={handleRight} left={handleLeft}
            power={soldier.power} agility={soldier.agility}
            inteligeance={soldier.inteligeance} img={soldier.image}
            point={soldier.point} powerUp={handlePowerUp} powerLess={handlePowerLess}
            
        />
        {soldier.load && <div>Chargement...</div>}
        {soldier.weapons &&
            <Weapon 
            listWeapon = {soldier.weapons} 
            selectWeapon={handleChangeWeapon} 
            weapon={soldier.weapon}
        />
        }
        
        <Button 
            text="Rénitialiser" 
            btnCss="btn btn-danger" 
            propsCss="w-50" 
            clic={handleReset} 
        />
        <Button 
            text="Créer" 
            btnCss="btn btn-success" 
            propsCss="w-50" 
            clic={handleCreate} 
        />

    </>

    );
}