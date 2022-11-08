import { useState } from 'react';
import QuestionItem from './QuestionItem';

type QuestionListProps = {
    items: {
        title: string,
        content: string
    }[],
    selected?: number
}

const QuestionList = (props: QuestionListProps) => {

    const [selected, setSelected] = useState(props.selected ?? -1);

    return (
        <>{ props.items.map((m, i) =>
            <QuestionItem 
                title={m.title} key={i}
                expanded={selected == i}
                onClick={() => {
                    // toggle selection of this item
                    setSelected(selected == i ? -1 : i);
                }}
            >
                {m.content}
            </QuestionItem>
        )}</>
    );

}

export default QuestionList;