import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
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

    const counterRef = useRef() as any;
    const count = useMotionValue(props.targetCount * 0.5);
    const animatedCount = useSpring(count, { stiffness: 50, damping: 20, bounce: 0 });

    useEffect(() => {
        const unsubscribe = animatedCount.onChange(c => {
            counterRef.current.innerText = formatCount(c);
        });
        count.set(props.targetCount);
        return unsubscribe;
    }, []);

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
                <h2 ref={counterRef}>{ formatCount(props.targetCount) }</h2>
            </div>
        </ScrollTriggered>
    );

}

export default MemberCounter;