import classes from './MemberCounter.module.scss';
import strings from '../../../util/strings';
import { constructClass, formatCount } from '../../../scripts/util';
import ScrollTriggered from '../ScrollTriggered/ScrollTriggered';

import icHealth from '../../../assets/icons/ic-health.svg';

type MemberCounterProps = {
    targetCount: number,
    delay?: number,
    visible?: boolean
}

export const MemberCounter = (props: MemberCounterProps) => {

    return (
        <ScrollTriggered 
            className={constructClass([
                classes["members-counter"],
                props.visible ? classes["visible"] : null
            ])} 
            delay={props.delay}
        >
            <img src={icHealth} alt="Member Counter Icon" draggable="false" />
            <div className={classes["members-counter-content"]}>
                <h4>{ strings.HERO_MEMBERS }</h4>
                <h2>{ formatCount(props.targetCount) }</h2>
            </div>
        </ScrollTriggered>
    );

}

export default MemberCounter;