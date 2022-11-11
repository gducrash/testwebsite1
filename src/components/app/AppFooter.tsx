import strings from "../../util/strings";

import Footer from "../page/Footer/Footer";
import FooterSection, { FooterHeadingType } from "../page/Footer/FooterSection";
import FooterSocials from "../page/Footer/FooterSocials";

import icTwitter from '../../assets/icons/ic-twitter.svg';
import icFacebook from '../../assets/icons/ic-facebook.svg';
import icLinkedIn from '../../assets/icons/ic-linkedin.svg';

const AppFooter = () => {
    return (
        <Footer>

            <FooterSection
                heading={strings.footer[0].heading}
                children={strings.footer[0].content}
                type={FooterHeadingType.BIG}
            />

            <FooterSection
                heading={strings.footer[1].heading}
                children={strings.footer[1].content}
                type={FooterHeadingType.REGULAR}
            />

            <FooterSection
                heading={strings.footer[2].heading}
                type={FooterHeadingType.REGULAR}
            >
                <FooterSocials 
                    socials={[{
                        name: 'Twitter', id: 'twitter',
                        icon: icTwitter, link: 'https://twitter.com/gducrash'
                    },
                    {
                        name: 'Facebook', id: 'facebook',
                        icon: icFacebook, link: 'https://youtu.be/SVyLlFezj2E'
                    },
                    {
                        name: 'LinkedIn', id: 'linkedin',
                        icon: icLinkedIn, link: 'https://linkedin.com/in/alexander-hoshurenko-a02214230'
                    }]}
                />
            </FooterSection>

        </Footer>
    )
}

export default AppFooter;