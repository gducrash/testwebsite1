import { constructClass } from '../../../scripts/util';
import classes from './IconButton.module.scss';

type IconButtonProps = {
    className?: string,
    children?: React.ReactNode,
    [key: string]: any
}

const IconButton = (props: IconButtonProps) => {

    return (
        <button {...props} className={constructClass([
            classes['icon-button'], props.className
        ])} />
    );

}

export default IconButton;