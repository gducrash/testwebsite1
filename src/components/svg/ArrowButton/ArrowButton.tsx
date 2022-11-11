import React, { useState } from 'react';
import { constructClass } from '../../../scripts/util';
import IconButton from '../../general/IconButton/IconButton';
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
                <path className={classes["arrow-normal"]} d="M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z"/>
                <path className={classes["arrow-hint"]}   d="M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z" fill-opacity="0.2"/>
            </svg>
        </IconButton>
    )

}

export default ArrowButton;