import React, { MouseEventHandler } from 'react';
import classes from './QuestionList.module.scss';

import icExpand from '../../../assets/ic-expand.svg';
import icCollapse from '../../../assets/ic-collapse.svg';
import { constructClass } from '../../../scripts/util';

type QuestionItemProps = {
    title: string,
    children: React.ReactNode,
    expanded?: boolean,
    onClick?: MouseEventHandler
}

const QuestionItem = (props: QuestionItemProps) => {

    return (
        <div className={constructClass([
            classes["question"],
            props.expanded ? null : classes["collapsed"]
        ])}>

            <div className={classes["question-content"]}>
                <h4>{ props.title }</h4>
                <p>{ props.children }</p>
            </div>

            <div 
                className={classes["question-expand-button"]}
                onClick={props.onClick}
            >
                <img 
                    src={props.expanded ? icCollapse : icExpand} 
                    alt="Hide answer" draggable="false" 
                />
            </div>

        </div>
    );

}

export default QuestionItem;