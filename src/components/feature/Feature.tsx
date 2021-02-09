import React from 'react';
import { SettingsSoldier } from '../settingsSoldiers/SettingsSoldier';

type Props = {
    power: number;
    agility: number;
    inteligeance: number;
    point: number;
    powerUp: any;
    powerLess: any;
}

export const Feature: React.FC<Props> = ( { power, agility, inteligeance, point, powerUp, powerLess } ) => {
    return (
        <>
            <div>
                <p>Points restants : {point}</p>
            </div>
            <div>
               <SettingsSoldier 
                    nbPoints={power} 
                    powerLess={() => powerLess('power')} 
                    powerUp={() => powerUp('power')} 
                    text="Force :"
                />
               <SettingsSoldier 
                    nbPoints={agility} 
                    powerLess={() => powerLess('agility')} 
                    powerUp={() => powerUp('agility')} 
                    text="Agilité :"
                />
               <SettingsSoldier 
                    nbPoints={inteligeance} 
                    powerLess={() => powerLess('inteligeance')} 
                    powerUp={() => powerUp('inteligeance')} 
                    text="Intelligence :"
                />
            </div>
        </>
    )
}