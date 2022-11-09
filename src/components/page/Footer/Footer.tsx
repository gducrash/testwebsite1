import React from 'react';
import useResponsive from '../../../hooks/useResponsive';
import classes from './Footer.module.scss';

type FooterProps = {
    children: React.ReactNode[]
}

const Footer = (props: FooterProps) => {

    const isMobile = useResponsive(1110);

    const footerContent = isMobile ?
    <>
        { props.children[0] }
        <div className={classes['footer-row']}>
            { props.children.slice(1) }
        </div>
    </> :
    <>
        { props.children }
    </>

    return (
        <footer className={classes['footer']}>
            <div className={classes['footer-content']}>
                { footerContent }
            </div>
        </footer>
    )

}

export default Footer;