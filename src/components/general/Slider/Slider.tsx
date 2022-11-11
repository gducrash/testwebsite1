import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import classes from './Slider.module.scss';
import { mod } from '../../../scripts/util';
import useResize from '../../../hooks/useResize';

import icBack    from '../../../assets/icons/ic-back.svg';
import icForward from '../../../assets/icons/ic-forward.svg';
import ArrowButton from '../../svg/ArrowButton/ArrowButton';

type SliderProps = {
    desiredWidth: number,
    children: React.ReactNode[],
    onItemX?: Function,
    onChangeActive?: Function
}

const transition = {
    instant: { type: 'just', duration: 0 },
    smooth: { type: 'spring', stiffness: 200, damping: 20, velocity: 0.1 }
}

let updating = false;

const Slider = (props: SliderProps) => {

    // get the number of children 
    // and a ref to one child to keep track of it's width
    const itemCount = props.children.length;
    const childrenRefs: any[] = [];
    for (let i = 0; i < itemCount; i++) childrenRefs.push(useRef());

    // scrollIndex   — the x offset of the slider measued in items
    // currentItem   — scrollIndex clamped to item count (repeating)
    // animate       — whether or not to animate the slider right now
    // dragAlternate — a hack to make the dragging less buggy
    const [scrollIndex, setScrollIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [dragAlternate, setDragAlternate] = useState(0);


    // update animation transition depending on state
    const trs = animate ? transition.smooth : transition.instant;
    

    // get the actual current width of one item
    const calcWidth = () => 
        childrenRefs[0]?.current?.clientWidth ?? props.desiredWidth;

    // get slider's x position based on scrollIndex
    const calcSliderX = () => {
        const width = calcWidth();
        const compensate = width * 0.5;
        const fix = dragAlternate * 0.1;
        return ((itemCount*0.5-scrollIndex) * width) - compensate + fix;
    }

    // get an X value for one item to shift to 
    // so that the slider repeats correctly
    const calcItemXShift = (i: number) => {
        const pageHalf = itemCount/2;
        const width    = calcWidth() * itemCount;
        const myOffset = scrollIndex - i;
        const myPage   = Math.floor((myOffset + pageHalf)/itemCount);

        return (myPage % itemCount) * width;
    }

    // get the value of the current item, based on scrollIndex
    const calcCurrentItem = (val: number) => 
        mod(val, itemCount);

    
    const scrollBy = (items: number) => {
        const val = scrollIndex + items;
        const item = calcCurrentItem(val);

        setAnimate(true);
        setScrollIndex(val);
        setCurrentItem(item);
        setDragAlternate((dragAlternate + 1) % 5);

        if (props.onChangeActive) props.onChangeActive(item);
    }


    // for managing children x style update
    // (this code is a real mess)

    const updateChildrenXStyle = () => {
        const rel = 1 / window.innerWidth;
        
        childrenRefs.forEach((ref, i) => {
            if (!ref.current) return;

            // call the onItemX function with x
            // in the range from -1 to 1
            // where 0 is the center of the screen
            if (props.onItemX) {
                const halfWidth = calcWidth()/2;
                const xRel = (ref.current.getBoundingClientRect().x + halfWidth) * rel - 0.5;
                props.onItemX(xRel, ref.current);
            }
            ref.current.style.translate = `${calcItemXShift(i)}px 0`;
        });
    }

    useResize(updateChildrenXStyle);
    useAnimationFrame(() => {
        if (updating) updateChildrenXStyle();
    });

    return (
        <>
        <motion.div 
            className={classes["slider-wrapper"]} 
            onViewportEnter={() => {
                updating = true;
                updateChildrenXStyle();
            }}
            onViewportLeave={() => updating = false}
        >
            <motion.div
                className={classes["slider-content"]}
                drag="x" transition={trs}
                animate={{ x: calcSliderX() }}
                
                // when spring anim is complete
                // if the scrollIndex is out of bounds, wrap it back 
                // to the current item, whilst turning off animations
                // to avoid sudden moves
                onAnimationComplete={() => {
                    if (scrollIndex != currentItem) {
                        setAnimate(false);
                        setScrollIndex(currentItem);
                    }
                }}

                // when started dragging, turn animations back on
                // when finished dragging, update the current item
                // and scroll index
                onDragStart={() => {
                    updating = true;
                    setAnimate(true);
                }}
                onDragEnd={(_e, info) => {
                    const drag = info.offset.x * -1;
                    const itemOffset = Math.round(drag / calcWidth());
                    scrollBy(itemOffset);
                }}>

                { props.children.map((m, i) => 
                    <div 
                        className={classes["slider-item"]} key={i}
                        style={{ maxWidth: props.desiredWidth }} 
                        ref={childrenRefs[i]}
                    >
                        {m}
                    </div>
                ) }

            </motion.div>
        </motion.div>
        
        <div className={classes["slider-controls"]}>
            <ArrowButton onClick={() => scrollBy(-1)} flipped />
            <p>
                <span>{ currentItem + 1 }</span> / { itemCount }
            </p>
            <ArrowButton onClick={() => scrollBy(1)} />
        </div>
        </>
    );

}

export default Slider;