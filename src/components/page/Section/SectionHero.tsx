import classes from './Section.module.scss';
import SearchInput from '../../general/SearchInput/SearchInput';

const SectionHero = () => {

    return (
        <section className={classes["section-hero"]}>
        <div className={classes["section-content"]}>
        <div className={classes["split"]}>
            
            <div className={classes["hero-left"]}>
                <h1>Nature Needs You</h1>
                <p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                <SearchInput />
            </div>

            <div className={classes["hero-right"]}>
                <img 
                    src="https://cdn.discordapp.com/attachments/510776441084968977/1039522281245921341/unknown.png" 
                    alt="The Wise Mystical Tree" draggable="false" />
            </div>

        </div>
        </div>
        </section>
    )

}

export default SectionHero;