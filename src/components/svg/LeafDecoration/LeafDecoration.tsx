import { useState } from 'react';
import { constructClass } from '../../../scripts/util';
import paths from '../paths';
import classes from './LeafDecoration.module.scss';

type LeafDecorationProps = {
    className?: string
}

const LeafDecoration = (props: LeafDecorationProps) => {

    const [mouseOver, setMouseOver] = useState(false);
    const [dead, setDead] = useState(false);

    return (
        <svg
            className={constructClass([
                classes['body'],
                mouseOver ? classes['over'] : null,
                dead ? classes['dead'] : null,
                props.className
            ])}
            onMouseEnter={() => {
                setMouseOver(false);
                setTimeout(() => setMouseOver(true), 100);
            }}
            onClick={() => {
                setDead(true);
            }}
            width="61" height="96" viewBox="0 0 61 96" 
        >
            <g transform='scale(0.8 0.8) translate(2 10)'>
                <path 
                    className={classes['leaf1']}
                    d={paths.LEAF_DECORATION[0]} fill="#F2726C" />
                <path 
                    className={classes['leaf2']}
                    d={paths.LEAF_DECORATION[1]}  fill="#7675FD" />

                <path 
                    className={classes['leaf1dead']}
                    d={paths.LEAF_TROLL_DECORATION[0]} fill="#555" />
                <path 
                    className={classes['leaf2dead']}
                    d={paths.LEAF_TROLL_DECORATION[1]}  fill="#555" />
            </g>
        </svg>
    );

}

export default LeafDecoration;