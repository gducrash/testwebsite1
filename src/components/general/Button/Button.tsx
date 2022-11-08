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

    return (
        <button className={buttonClass}>
            {props.text}
        </button>
    );
}

export default Button;