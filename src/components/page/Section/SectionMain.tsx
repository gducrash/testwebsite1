import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useParallax from "../../../hooks/useParallax";
import { constructClass } from '../../../scripts/util';
import strings from "../../../util/strings";
import Button from '../../general/Button/Button';
import FormBox from '../../general/FormBox/FormBox';
import QuestionList from '../../general/QuestionList/QuestionList';
import ScrollTriggered from "../../general/ScrollTriggeredDiv/ScrollTriggered";
import classes from './Section.module.scss';

const SectionMain = () => {

    const ref = useRef() as any;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const parallax = [
        useParallax(scrollYProgress, -50), 
        useParallax(scrollYProgress, -200), 
        useParallax(scrollYProgress, -100)
    ];

    return (
        <section className={classes["section-main"]} id="team">
            
            <div className={classes["section-content"]}>
                <div className={classes["center"]}>
                    <ScrollTriggered type="h2" delay={0.1}>
                        { strings.SECTION_TEAM_HEADING }
                    </ScrollTriggered>
                    <ScrollTriggered type="p"  delay={0.2}>
                        { strings.SECTION_TEAM_DESC }
                    </ScrollTriggered>
                </div>
                <div className={classes["split"]} ref={ref}>
                    
                    <motion.div 
                        className={classes["bust"]} 
                        style={{
                            y: parallax[0],
                            backgroundImage: "url('https://cdn.discordapp.com/attachments/898519611018997760/1039255399448203364/unknown.png')"
                        }} />
                    <motion.div 
                        className={classes["bust"]} 
                        style={{
                            y: parallax[1],
                            backgroundImage: "url('https://memepedia.ru/wp-content/uploads/2022/05/viktor-korneplod-mem-shablon.jpg')"
                        }} />
                    <motion.div 
                        className={classes["bust"]} 
                        style={{
                            y: parallax[2],
                            backgroundImage: "url('https://media.discordapp.net/attachments/510776441084968977/1033290230742126592/ezgif.com-gif-maker.gif')"
                        }} />

                </div>
            </div>

            <ScrollTriggered delay={0.2} once className={constructClass([
                classes["section-content"], classes["nopadding"]
            ])} id="mission">
                <FormBox
                    heading={strings.FORM_WRAP_HEADING}
                    description={strings.FORM_WRAP_DESC}
                    formTitle={strings.FORM_TITLE}
                    formButton={strings.FORM_BUTTON}
                >
                    <input type="text"  placeholder={strings.FORM_NAME}  spellCheck='false' />
                    <input type="email" placeholder={strings.FORM_EMAIL} spellCheck='false' />
                </FormBox>
            </ScrollTriggered>

            <div className={constructClass([
                classes["section-content"], classes["contact"]
            ])}>
                <div className={classes["split"]}>

                    <div className={classes["left"]}>

                        <ScrollTriggered type="h2" delay={0.2} once>
                            { strings.SECTION_CONTACT_HEADING }
                        </ScrollTriggered>

                        <ScrollTriggered type="p" delay={0.25} once>
                            { strings.SECTION_CONTACT_DESC }
                        </ScrollTriggered>

                        <ScrollTriggered delay={0.3} once>
                            <Button text={strings.SECTION_CONTACT_BUTTON} />
                        </ScrollTriggered>

                    </div>

                    <ScrollTriggered className={classes["right"]} delay={0.4} once>

                        <QuestionList
                            selected={0}
                            items={strings.questions}
                        />

                    </ScrollTriggered>

                </div>
            </div>

        </section>
    )

}

export default SectionMain;