import classes from './Navbar.module.scss';
import logo from '../../../assets/logo.svg';
import { constructClass } from '../../../scripts/util';
import Button from '../../general/Button/Button';
import useResponsive from '../../../hooks/useResponsive';

type NavbarProps = {
    menuItems: {
        title: string, href: string, selected?: boolean
    }[],
    button: string
}

const Navbar = (props: NavbarProps) => {

    const isMobile = useResponsive(1110);

    const navbarSections = {
        desktop: <>
            <div className={classes['navbar-content-section']}>
                { props.menuItems.map((m, i) => 
                    <a 
                        className={constructClass([
                            m.selected ? classes.selected : null
                        ])}
                        href={m.href} key={i}
                    >{m.title}</a>    
                ) }
            </div>

            <div className={classes['navbar-content-section']}>
                <Button text={props.button} white navbar />
            </div>
        </>,

        mobile: <>
            <div className={classes['navbar-content-section']}>
                <Button text={props.button} white navbar />
            </div>
        </>
    }

    return (
        <header className={constructClass([
            classes['navbar'],
            isMobile ? classes['mobile'] : null
        ])}>
        <div className={classes['navbar-content']}>
            
            <div className={classes['navbar-content-section']}>
                <img 
                    className={classes['navbar-logo']}
                    src={logo} draggable="false"
                    alt="Rootz Logo" 
                />
            </div>

            { navbarSections[isMobile ? 'mobile' : 'desktop'] }

        </div>
        </header>
    );

}

export default Navbar;