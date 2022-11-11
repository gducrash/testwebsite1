import classes from '../Section/Section.module.scss';
import strings from "../../../util/strings";
import { constructClass } from "../../../scripts/util";

import ScrollTriggered from "../../general/ScrollTriggered/ScrollTriggered";
import Button from "../../general/Button/Button";
import QuestionList from "../../general/QuestionList/QuestionList";


const SectionPartContact = () => {

    return (  
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
    )

}

export default SectionPartContact;