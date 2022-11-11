import classes from './MemberCounter.module.scss';

import icHealth from '../../../assets/icons/ic-health.svg';
import ScrollTriggered from '../ScrollTriggered/ScrollTriggered';

type MemberCounterProps = {

}

export const MemberCounter = (props: MemberCounterProps) => {

    return (
        <ScrollTriggered 
            className={classes["members-counter"]} 
            delay={0.4}
        >
            <img src={icHealth} alt="Member Counter Icon" draggable="false" />
            <div className={classes["members-counter-content"]}>
                <h4>Members</h4>
                <h2>29 128</h2>
            </div>
        </ScrollTriggered>
    );

}

export default MemberCounter;