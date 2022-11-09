import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useParallax from "../../../hooks/useParallax";
import { constructClass } from '../../../scripts/util';
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
        <section className={classes["section-main"]}>
            
            <div className={classes["section-content"]}>
                <div className={classes["center"]}>
                    <ScrollTriggered type="h2" delay={0.1}>Our Top Team</ScrollTriggered>
                    <ScrollTriggered type="p"  delay={0.2}>Learn more about how you can save our planet's nature.</ScrollTriggered>
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

            <ScrollTriggered delay={0.2} className={constructClass([
                classes["section-content"], classes["nopadding"]
            ])}>
                <FormBox
                    heading="Get Started Today!"
                    description={"Learn more about how you can save our planet's nature. "
                    + "From smart consumption to switching to renewable energy, "
                    + "each of us can do our part to save the planet."}
                    formTitle="Log In"
                    formButton="Book a demo"
                >
                    <input type="text"  placeholder="Name"  spellCheck='false' />
                    <input type="email" placeholder="Email" spellCheck='false' />
                </FormBox>
            </ScrollTriggered>

            <div className={constructClass([
                classes["section-content"], classes["contact"]
            ])}>
                <div className={classes["split"]}>

                    <ScrollTriggered className={classes["left"]} delay={0.2}>
                        <h2>Ready to Get started?</h2>
                        <p>
                            When pattern is mentioned in interior design, it is easy to 
                            associate it with a geometric patterned wallpaper or 
                            colourful prints on interior fabrics.
                        </p>
                        <Button text="Contact Us" />
                    </ScrollTriggered>

                    <ScrollTriggered className={classes["right"]} delay={0.3}>

                        <QuestionList
                            selected={0}
                            items={[{
                                title: "What can I do to protect our planet?",

                                content: "Not to make an open fire in nature and to clean up litter; " 
                                + "not to pollute open water bodies; to switch to alternative "
                                + "energy sources; to reduce the use of non-renewable resources"
                            }, {
                                title: "How to save nature ecology?",

                                content: "Not to make an open fire in nature and to clean up litter; " 
                                + "not to pollute open water bodies; to switch to alternative "
                                + "energy sources; to reduce the use of non-renewable resources"
                            }, {
                                title: "What is nature conservation?",

                                content: "Not to make an open fire in nature and to clean up litter; " 
                                + "not to pollute open water bodies; to switch to alternative "
                                + "energy sources; to reduce the use of non-renewable resources"
                            }]}
                        />

                    </ScrollTriggered>

                </div>
            </div>

        </section>
    )

}

export default SectionMain;