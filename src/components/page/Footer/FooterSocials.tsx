import classes from './Footer.module.scss';
import { constructClass } from '../../../scripts/util';

type FooterSocialsProps = {
    socials: {
        name: string,
        id:   string,
        icon: string,
        link: string
    }[]
}

const FooterSocials = (props: FooterSocialsProps) => {

    return (
        <div className={classes['footer-socials']}>
            { props.socials.map((m, i) => 
                <a 
                    href={m.link} title={m.name} key={i}
                    className={constructClass([
                        classes['footer-social-icon'], 
                        classes[m.id]
                    ])}
                    target="_blank" rel="noreferrer"
                >
                    <img src={m.icon} alt={m.name} draggable="false" />
                </a>
            )}
        </div>
    )

}

export default FooterSocials;