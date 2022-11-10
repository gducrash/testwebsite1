import classes from './Section.module.scss';
import Slider from '../../general/Slider/Slider';
import { distanceFromZero } from '../../../scripts/util';
import SliderElement from '../../general/Slider/SliderElement';
import { useState } from 'react';

import imgWater   from '../../../assets/slider/water.png';
import imgTrees   from '../../../assets/slider/trees.png';
import imgEnergy  from '../../../assets/slider/energy.png';
import imgPlastic from '../../../assets/slider/plastic.png';
import imgOrganic from '../../../assets/slider/organic.png';


const scrollItems = [{
    title: "Save walter",
    content: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    background: imgWater,
    bgVariation: 3, fgVariation: 4
}, {
    title: "Plant trees",
    content: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    background: imgTrees,
    bgVariation: 5, fgVariation: 6
}, {
    title: "Save energy",
    content: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    background: imgEnergy,
    bgVariation: 1, fgVariation: 2
}, {
    title: "Avoid plastic",
    content: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    background: imgPlastic,
    bgVariation: 4, fgVariation: 5
}, {
    title: "Choose organic",
    content: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
    background: imgOrganic,
    bgVariation: 6, fgVariation: 3
}, ]

const SectionScroll = () => {

    const [activeItem, setActiveItem] = useState(0);

    return (
        <section className={classes["section-scroll"]} id="places">
            <Slider 
                desiredWidth={420}
                onItemX={(x: number, elem: any) => {
                    elem.style.scale = distanceFromZero(x, 0.2);
                    elem.style.opacity = distanceFromZero(x, 1.8) + 0.5;
                }}
                onChangeActive={setActiveItem}
            >
                { scrollItems.map((m, i) =>
                    <SliderElement 
                        {...m} active={activeItem == i}
                    />
                )}
            </Slider>
        </section>
    )

}

export default SectionScroll;