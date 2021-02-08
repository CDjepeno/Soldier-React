import * as React from 'react';

type Props = {
    text: string;
    btnCss: string;
    clic?: any; 
    propsCss?: string;
}
 
export const Button: React.FC<Props> = ( { text, btnCss, clic, propsCss } ) => {
    const btn = `${btnCss} ${propsCss}`;
    return ( 
        <button className={btn} onClick={clic}>{text}</button>
     );
}
 
