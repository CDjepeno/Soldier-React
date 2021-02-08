import React from 'react';
import { ImageSoldiers } from '../ImageSoldiers/ImageSoldiers';

type Props = {
    power: number;
    agility: number;
    inteligeance: number;
    img: number;
    right?: any;
    left?: any;
}

export const Soldiers: React.FC<Props> = ( {power, agility, inteligeance, img, right, left} ) => {
    return (
        <div className="row no-gutters">
            <div className="col-6">
                <ImageSoldiers numImg={img} right={right} left={left}/>
            </div>
            <div className="col-6">
                <p>Points restants: </p>
                <p>force: {power}</p>
                <p>agilité: {agility}</p>
                <p>inteligeance: {inteligeance}</p>
            </div>

        </div>
    )
}