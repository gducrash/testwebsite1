import classes from '../Section/Section.module.scss';
import strings from "../../../util/strings";
import { constructClass } from "../../../scripts/util";

import ScrollTriggered from "../../general/ScrollTriggered/ScrollTriggered";
import FormBox from '../../general/FormBox/FormBox';


const SectionPartForm = () => {

    return (  
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
    )

}

export default SectionPartForm;