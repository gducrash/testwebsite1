import { useRef } from "react";
import { useScroll } from "framer-motion";
import classes from '../Section/Section.module.scss';
import strings from "../../../util/strings";
import useParallax from "../../../hooks/useParallax";
import useResponsive from "../../../hooks/useResponsive";
import { constructClass } from "../../../scripts/util";

import ScrollTriggered from "../../general/ScrollTriggered/ScrollTriggered";
import BlobImage from "../../general/BlobImage/BlobImage";
import ConnectionLine from "../../svg/ConnectionLine/ConnectionLine";

import imgTeam1 from "../../../assets/team/team1.png";
import imgTeam2 from "../../../assets/team/team2.png";
import imgTeam3 from "../../../assets/team/team3.png";


const teamBusts = [{
    image: imgTeam1,
    variation: 1,
    className: 'bust1'
}, {
    image: imgTeam2,
    variation: 2,
    className: 'bust2'
}, {
    image: imgTeam3,
    variation: 3,
    className: 'bust3'
}];
const connectionLines = ["one", "two"];

const SectionPartTeam = () => {

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
                
                { teamBusts.map((m, i) => 

                    // make three animated blob images
                    // for each team member
                    <BlobImage 
                        variation={m.variation}
                        width={blobSize}
                        height={blobSize}
                        parallax={parallax[i]}
                        key={i}
                        image={m.image}
                        className={classes[m.className]}
                    />
                ) }

                { connectionLines.map((m, i) => 

                    // make two connection line svgs, 
                    // one with class "one" and one with class "two"
                    <ConnectionLine className={constructClass([
                        classes["connection-line"], classes[m]
                    ])} mobile={isMobile} delay={0.5*i} key={i} />

                ) }

            </div>
        </div>
    )

}

export default SectionPartTeam;