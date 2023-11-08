import React, {FC} from 'react';
import {PropsWithChildren} from 'react';
import {useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps extends PropsWithChildren{
    width?:  string,
    height?: string,
    variant: CardVariant,
    onClick: (num:number) => void,
    // children?: React.ReactChild | React.ReactNode
}

const Card: FC<CardProps> = 
({ width, height, variant, onClick, children}) => {

const [number, setNumber] = useState(0)
return (
    <div style={{ 
        width,
        height, 
        border: variant === CardVariant.outlined ? '5px solid black' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',

    }} onClick={() => onClick(number)}>
        {children}
    </div>
)
}

export default Card;