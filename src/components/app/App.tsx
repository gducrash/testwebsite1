import Button from "../general/Button/Button";

import Navbar from "../page/Navbar/Navbar";

import SectionHero from "../page/Section/SectionHero";
import SectionMain from "../page/Section/SectionMain";
import SectionScroll from "../page/Section/SectionScroll";

import Footer from "../page/Footer/Footer";
import FooterSection, { FooterHeadingType } from "../page/Footer/FooterSection";
import FooterSocials from "../page/Footer/FooterSocials";

import icTwitter from '../../assets/ic-twitter.svg';
import icFacebook from '../../assets/ic-facebook.svg';
import icLinkedIn from '../../assets/ic-linkedin.svg';

function App() {
    return (
        <>
            <Navbar 
                menuItems={[
                    { title: 'Home', href: '#', selected: true },
                    { title: 'Our Mission', href: '#' },
                    { title: 'Places', href: '#' },
                    { title: 'Team', href: '#' }
                ]}
                button="Apply"
            />

            <main>
                <SectionHero />
                <SectionMain />
                <SectionScroll />
            </main>

            <Footer>

                <FooterSection
                    heading="Contacts"
                    type={FooterHeadingType.BIG}
                >
                    2019 Rootz Foundation. <br/>
                    All rights reserved
                </FooterSection>

                <FooterSection
                    heading="Headquarters"
                    type={FooterHeadingType.REGULAR}
                >
                    1234 Taliban <br/>
                    Los Angeles, La 1234567 <br/>
                    (123) 456-7890
                </FooterSection>

                <FooterSection
                    heading="Social media"
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
        </>
    );
}

export default App;
