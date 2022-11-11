import { useState } from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { constructClass } from '../../../scripts/util';
import classes from './Navbar.module.scss';

import Button from '../../general/Button/Button';
import useResponsive from '../../../hooks/useResponsive';
import useScroll from '../../../hooks/useScroll';
import MenuButton from '../../svg/MenuButton/MenuButton';

import logo from '../../../assets/logo.svg';

type NavbarProps = {
    menuItems: {
        title: string, href: string, selected?: boolean
    }[],
    button: string
}

const menuVariants = {
    open: {
        clipPath: `circle(117vh at 90% 50px)`
    },
    closed: {
        clipPath: "circle(0vh at 90% 50px)"
    }
}

const Navbar = (props: NavbarProps) => {

    const scroll = useScroll();

    const isMobile = useResponsive(1110);
    const isFixed = scroll > 600;

    const [menuActive, setMenuActive] = useState(false);

    const navbarSections = {
        desktop: <>
            <div className={classes['navbar-content-section']}>
                { props.menuItems.map((m, i) => 
                    <AnchorLink 
                        className={constructClass([
                            m.selected ? classes.selected : null,
                            classes['offset-' + i]
                        ])}
                        href={m.href} key={i}
                        onClick={() => setMenuActive(false)}
                    >{m.title}</AnchorLink>    
                ) }
            </div>

            <div className={classes['navbar-content-section']}>
                <Button
                    text={props.button} 
                    white={!isFixed || isMobile} navbar 
                    className={classes['offset-5']}
                />
            </div>
        </>,

        mobile: <>
            <div className={classes['navbar-content-section']}>
                <MenuButton 
                    active={menuActive}
                    onClick={() => setMenuActive(!menuActive)} 
                />
            </div>
        </>
    }

    const navbarMenu = <motion.div
        className={constructClass([
            classes['navbar-menu'],
            menuActive ? classes['active'] : null
        ])}
        initial={false} variants={menuVariants}
        animate={menuActive ? "open": "closed"}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
    >
        { navbarSections.desktop }
    </motion.div>

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
        { isMobile ? navbarMenu : null }
        </header>
    );

}

export default Navbar;