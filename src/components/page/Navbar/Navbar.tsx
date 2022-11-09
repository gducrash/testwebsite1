import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Navbar.module.scss';
import logo from '../../../assets/logo.svg';
import { constructClass } from '../../../scripts/util';
import Button from '../../general/Button/Button';
import useResponsive from '../../../hooks/useResponsive';
import useScroll from '../../../hooks/useScroll';

type NavbarProps = {
    menuItems: {
        title: string, href: string, selected?: boolean
    }[],
    button: string
}

const Navbar = (props: NavbarProps) => {

    const scroll = useScroll();

    const isMobile = useResponsive(1110);
    const isFixed = scroll > 600;

    const navbarSections = {
        desktop: <>
            <div className={classes['navbar-content-section']}>
                { props.menuItems.map((m, i) => 
                    <AnchorLink 
                        className={constructClass([
                            m.selected ? classes.selected : null
                        ])}
                        href={m.href} key={i}
                    >{m.title}</AnchorLink>    
                ) }
            </div>

            <div className={classes['navbar-content-section']}>
                <Button text={props.button} white={!isFixed} navbar />
            </div>
        </>,

        mobile: <>
            <div className={classes['navbar-content-section']}>
                <Button text={props.button} white={!isFixed} navbar />
            </div>
        </>
    }

    return (
        <header className={constructClass([
            classes['navbar'],
            isMobile ? classes['mobile'] : null,
            isFixed ? classes['fixed'] : null
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