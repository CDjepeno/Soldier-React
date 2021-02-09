import React from 'react';
import { Feature } from '../feature/Feature';
import { ImageSoldiers } from '../ImageSoldiers/ImageSoldiers';

type Props = {
    power: number;
    agility: number;
    inteligeance: number;
    img: number;
    right?: any;
    left?: any;
    point: number;
    powerUp: any;
    powerLess: any;
}

export const Soldiers: React.FC<Props> = ( {power, agility, inteligeance, img, right, left, point, powerUp, powerLess} ) => {
    return (
        <div className="row no-gutters">
            <div className="col-6">
                <ImageSoldiers numImg={img} right={right} left={left}/>
            </div>
            <div className="col-6">
                <Feature power={power} agility={agility} 
                    inteligeance={inteligeance} point={point} 
                    powerUp={powerUp} powerLess={powerLess}
                />
            </div>

        </div>
    )
}