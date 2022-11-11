import classes from './MenuButton.module.scss';
import paths from '../paths';
import IconButton from '../../general/IconButton/IconButton';
import { constructClass } from '../../../scripts/util';

type MenuButtonProps = {
    active?: boolean,
    className?: string,
    onClick?: React.MouseEventHandler
}

const MenuButton = (props: MenuButtonProps) => {

    return (
        <IconButton 
            className={constructClass([
                props.className,
                props.active ? classes['active'] : null
            ])} onClick={props.onClick}
        >

            <svg
                width="22" height="18" viewBox="0 0 22 18" 
                stroke="black" strokeWidth="3" strokeLinecap="round"
            >

                <g className={classes['menu-open']}>
                    { paths.menuButton.OPEN.map((m, i) =>
                        <path 
                            d={m} key={i} 
                            className={classes["offset-"+i]}
                        />
                    ) }
                </g>
                <g className={classes['menu-close']}>
                    { paths.menuButton.CLOSE.map((m, i) =>
                        <path 
                            d={m} key={i} 
                            className={classes["offset-"+i]}
                        />
                    ) }
                </g>

            </svg>

        </IconButton>
    );

    // render all the paths in the hero title path array
    // and add a separate animation offset class to each

}

export default MenuButton;