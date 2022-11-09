import classes from './Section.module.scss';
import SearchInput from '../../general/SearchInput/SearchInput';
import ScrollTriggered from '../../general/ScrollTriggeredDiv/ScrollTriggered';

const SectionHero = () => {

    const animatedHeading = <ScrollTriggered type="h1" delay={0.1}>
        Nature Needs You
    </ScrollTriggered>;

    const animatedParagraph = <ScrollTriggered type="p" delay={0.2}>
        The scale of the challenges facing our planet can seem daunting, but we can all do something.
    </ScrollTriggered>

    const animatedImage = <ScrollTriggered 
        type="img" delay={0.3}
        src="https://cdn.discordapp.com/attachments/510776441084968977/1039522281245921341/unknown.png" 
        alt="The Wise Mystical Tree" draggable="false"
    />

    return (
        <section className={classes["section-hero"]}>

            <ScrollTriggered className={classes["section-content"]}>
                <div className={classes["split"]}>
                    <div className={classes["hero-left"]}>

                        { animatedHeading } { animatedParagraph }

                        <SearchInput />

                    </div>

                    <div className={classes["hero-right"]}>

                        { animatedImage }
                        
                    </div>
                </div>
            </ScrollTriggered>

        </section>
    )

}

export default SectionHero;