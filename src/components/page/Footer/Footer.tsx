import React from 'react';
import classes from './Footer.module.scss';

type FooterProps = {
    children: React.ReactNode[] | React.ReactNode
}

const Footer = (props: FooterProps) => {

    return (
        <footer className={classes['footer']}>
            <div className={classes['footer-content']}>
                { props.children }
            </div>
        </footer>
    )

}

export default Footer;