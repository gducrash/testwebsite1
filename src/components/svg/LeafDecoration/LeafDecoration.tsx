import { useState } from 'react';
import { constructClass } from '../../../scripts/util';
import paths from '../paths';
import classes from './LeafDecoration.module.scss';

type LeafDecorationProps = {
    className?: string
}

const LeafDecoration = (props: LeafDecorationProps) => {

    const [mouseOver, setMouseOver] = useState(false);

    return (
        <svg
            className={constructClass([
                classes['body'],
                mouseOver ? classes['over'] : null,
                props.className
            ])}
            onMouseEnter={() => {
                setMouseOver(false);
                setTimeout(() => setMouseOver(true), 10);
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
            </g>
        </svg>
    );

}

export default LeafDecoration;