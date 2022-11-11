import React, { useState } from 'react';
import { constructClass } from '../../../scripts/util';
import IconButton from '../../general/IconButton/IconButton';
import paths from '../paths';
import classes from './ArrowButton.module.scss';

type ArrowButtonProps = {
    className?: string,
    onClick?: React.MouseEventHandler,
    flipped?: boolean
}

const ArrowButton = (props: ArrowButtonProps) => {
    
    const [active, setActive] = useState(false);

    return (
        <IconButton 
            className={constructClass([ classes["arrow-button"], props.className ])}
            onClick={(e: any) => {
                setActive(false);
                setTimeout(() => setActive(true), 10);
                if (props.onClick) props.onClick(e);
            }}
            style={{ scale: `${props.flipped ? -1 : 1} 1` }}
        >
            <svg 
                className={constructClass([
                    active ? classes["active"] : null
                ])}
                width="22" height="22" viewBox="0 -4 22 22" 
                fill="#1E1A20" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path className={classes["arrow-normal"]} d={paths.ARROW} />
                <path className={classes["arrow-hint"]}   d={paths.ARROW} fill-opacity="0.2"/>
            </svg>
        </IconButton>
    )

}

export default ArrowButton;