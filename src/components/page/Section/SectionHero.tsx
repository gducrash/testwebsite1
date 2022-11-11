import classes from './Section.module.scss';
import strings from '../../../util/strings';
import useScroll from '../../../hooks/useScroll';
import useResponsive from '../../../hooks/useResponsive';

import SearchInput from '../../general/SearchInput/SearchInput';
import ScrollTriggered from '../../general/ScrollTriggered/ScrollTriggered';
import imgParrot from '../../../assets/parrot.svg';
import HeroTitle from '../../svg/HeroTitle/HeroTitle';
import MemberCounter from '../../general/MemberCounter/MemberCounter';

const SectionHero = () => {

    const scroll = useScroll();
    const isMobile = useResponsive(1110);
    const isHeroVisible = scroll < 1200;
    const counterCardDelay = isMobile ? 0 : 0.4;


    const animatedHeading = <ScrollTriggered delay={0.1}>
        <HeroTitle className={classes["hero-title"]} />
    </ScrollTriggered>;

    const animatedParagraph = <ScrollTriggered type="p" delay={0.2}>
        { strings.HERO }
    </ScrollTriggered>;

    const animatedImage = <ScrollTriggered 
        type="img" delay={0.3} className={classes["hero-image"]}
        src={imgParrot}
        alt="Parrot" draggable="false"
    />;

    return (
        <section className={classes["section-hero"]} id="home">

            <div className={classes["section-content"]}>
                <div className={classes["split"]}>
                    <ScrollTriggered className={classes["hero-left"]}>

                        { animatedHeading } { animatedParagraph }

                        <SearchInput />

                    </ScrollTriggered>

                    <div className={classes["hero-right"]}>

                        { animatedImage }
                        
                    </div>

                    <MemberCounter 
                        targetCount={strings.HERO_MEMBER_COUNT}  visible={isHeroVisible}
                        delay={counterCardDelay}
                    />
                </div>
            </div>

        </section>
    )

}

export default SectionHero;