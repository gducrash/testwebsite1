import { useRef } from "react";
import { useScroll } from "framer-motion";
import useParallax from "../../../hooks/useParallax";
import useResponsive from "../../../hooks/useResponsive";
import { constructClass } from '../../../scripts/util';
import strings from "../../../util/strings";
import classes from './Section.module.scss';

import BlobImage from "../../general/BlobImage/BlobImage";
import Button from '../../general/Button/Button';
import FormBox from '../../general/FormBox/FormBox';
import QuestionList from '../../general/QuestionList/QuestionList';
import ScrollTriggered from "../../general/ScrollTriggered/ScrollTriggered";
import ConnectionLine from "../../svg/ConnectionLine/ConnectionLine";

import imgTeam1 from "../../../assets/team/team1.png";
import imgTeam2 from "../../../assets/team/team2.png";
import imgTeam3 from "../../../assets/team/team3.png";


const SectionMain = () => {

    const scrollTargetRef = useRef() as any;
    const { scrollYProgress } = useScroll({
        target: scrollTargetRef,
        offset: ["start end", "end start"]
    });
    const parallax = [
        useParallax(scrollYProgress, -50), 
        useParallax(scrollYProgress, -130), 
        useParallax(scrollYProgress, 50)
    ];

    const isMobile = useResponsive(1110);
    const blobSize = isMobile ? 200 : 350;


    return (
        <section className={classes["section-main"]} id="team">
            
            <div className={constructClass([
                classes["section-content"], classes["team"]
            ])}>
                <div className={classes["center"]}>
                    <ScrollTriggered type="h2" delay={0.1}>
                        { strings.SECTION_TEAM_HEADING }
                    </ScrollTriggered>
                    <ScrollTriggered type="p"  delay={0.2}>
                        { strings.SECTION_TEAM_DESC }
                    </ScrollTriggered>
                </div>
                <div className={classes["split"]} ref={scrollTargetRef}>
                    
                    <BlobImage 
                        variation={1}
                        width={blobSize}
                        height={blobSize}
                        parallax={parallax[0]}
                        image={imgTeam1}
                        className={classes["bust1"]}
                    />
                    <BlobImage 
                        variation={2}
                        width={blobSize}
                        height={blobSize}
                        parallax={parallax[1]}
                        image={imgTeam2}
                        className={classes["bust2"]}
                    />
                    <BlobImage 
                        variation={3}
                        width={blobSize}
                        height={blobSize}
                        parallax={parallax[2]}
                        image={imgTeam3} 
                        className={classes["bust3"]}
                    />

                    { ["one", "two"].map((m, i) => 

                        // make two connection line svgs, 
                        // one with class "one" and one with class "two"
                        <ConnectionLine className={constructClass([
                            classes["connection-line"], classes[m]
                        ])} mobile={isMobile} delay={0.5*i} key={i} />

                    ) }

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