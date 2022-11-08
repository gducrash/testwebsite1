import React from 'react';
import classes from './Footer.module.scss';

export enum FooterHeadingType { BIG, REGULAR }

type FooterSectionProps = {
    children: React.ReactNode[] | React.ReactNode,
    heading: string,
    type: FooterHeadingType
}

const FooterSection = (props: FooterSectionProps) => {

    return (
        <footer className={classes['footer-section']}>
            { props.type == FooterHeadingType.BIG 
                ? <h2>{ props.heading }</h2>
                : <h4>{ props.heading }</h4>
            }
            <p>
                { props.children }
            </p>
        </footer>
    )

}

export default FooterSection;