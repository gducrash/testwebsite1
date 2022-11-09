import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import classes from './ConnectionLine.module.scss';
import paths from '../paths';
import { isInView } from '../../../scripts/util';

type ConnectionLineProps = {
    className?: string,
    mobile?: boolean,
    delay?: number
}

const ConnectionLine = (props: ConnectionLineProps) => {

    const svgRef = useRef() as any;

    // this function will be executed every time
    // svg enters or exits view
    const onVisChange = (e: any) => {
        if (e.opacity) svgRef.current.classList.add(classes['vis']);
        else svgRef.current.classList.remove(classes['vis']);
    }

    useEffect(() =>
        onVisChange({ opacity: isInView(svgRef) }), []);

    const dashThickness = props.mobile ? "7 7" : "4 4";

    return (
        <motion.svg
            className={props.className} ref={svgRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onAnimationStart={onVisChange}
            width="380" height="206" viewBox="0 0 380 206" fill="none" 
        >
            <path 
                className={classes['connection-path']}
                opacity="0.8" d={paths.CONNECTION_LINE} 
                stroke="black" strokeDasharray={dashThickness}
                style={{ animationDelay: props.delay ? props.delay + "s" : undefined }}
            />
            <path 
                d={paths.CONNECTION_LINE} strokeWidth="2"
                stroke="white" strokeDasharray={dashThickness}
            />
        </motion.svg>
    )

    // one path is black, not dashed and is being animated
    // and the other one is white, dashed and sits on top

}

export default ConnectionLine;