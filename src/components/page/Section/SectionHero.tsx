import classes from './Section.module.scss';
import strings from '../../../util/strings';
import SearchInput from '../../general/SearchInput/SearchInput';
import ScrollTriggered from '../../general/ScrollTriggeredDiv/ScrollTriggered';
import imgParrot from '../../../assets/parrot.svg';

const SectionHero = () => {

    const animatedHeading = <ScrollTriggered type="h1" delay={0.1}>
        Nature Needs You
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
                </div>
            </div>

        </section>
    )

}

export default SectionHero;