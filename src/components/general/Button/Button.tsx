import { motion } from 'framer-motion';
import { constructClass } from '../../../scripts/util';
import classes from './Button.module.scss';

type ButtonProps = {
    text:    string,
    white?:  boolean,
    navbar?: boolean,
    shrink?: boolean
}

const Button = (props: ButtonProps) => {
    const buttonClass = constructClass([
        classes.button, 
        props.white  ? classes['white'] : null,
        props.navbar ? classes['navbar-button'] : null,
        props.shrink ? classes['shrink'] : null
    ]);

    const stateHover = props.navbar ? { y: -1 } : {} 
    const statePressed = props.navbar ? { y: 1 } : { scale: 0.975 }

    return (
        <motion.button 
            className={buttonClass}
            whileHover={stateHover}
            whileTap={statePressed}
        >
            {props.text}
        </motion.button>
    );
}

export default Button;