import { useState } from 'react';
import classes from './Section.module.scss';
import Slider from '../../general/Slider/Slider';
import { distanceFromZero } from '../../../scripts/util';
import strings from '../../../util/strings';
import SliderElement from '../../general/Slider/SliderElement';

import imgWater   from '../../../assets/slider/water.png';
import imgTrees   from '../../../assets/slider/trees.png';
import imgEnergy  from '../../../assets/slider/energy.png';
import imgPlastic from '../../../assets/slider/plastic.png';
import imgOrganic from '../../../assets/slider/organic.png';


const items = [{
    title: strings.SLIDER_HEADINGS[0],
    content: strings.SLIDER_CONTENT,
    background: imgWater,
    bgVariation: 3, fgVariation: 4
}, {
    title: strings.SLIDER_HEADINGS[1],
    content: strings.SLIDER_CONTENT,
    background: imgTrees,
    bgVariation: 5, fgVariation: 6
}, {
    title: strings.SLIDER_HEADINGS[2],
    content: strings.SLIDER_CONTENT,
    background: imgEnergy,
    bgVariation: 1, fgVariation: 2
}, {
    title: strings.SLIDER_HEADINGS[3],
    content: strings.SLIDER_CONTENT,
    background: imgPlastic,
    bgVariation: 4, fgVariation: 5
}, {
    title: strings.SLIDER_HEADINGS[4],
    content: strings.SLIDER_CONTENT,
    background: imgOrganic,
    bgVariation: 6, fgVariation: 3
}];

const SectionSlider = () => {

    const [activeItem, setActiveItem] = useState(0);

    return (
        <section className={classes["section-slider"]} id="places">
            <Slider 
                desiredWidth={420}
                onItemX={(x: number, elem: any) => {
                    elem.style.scale = distanceFromZero(x, 0.2);
                    elem.style.opacity = distanceFromZero(x, 1.8) + 0.5;
                }}
                onChangeActive={setActiveItem}
            >
                { items.map((m, i) =>
                    <SliderElement 
                        {...m} active={activeItem == i} key={i}
                    />
                )}
            </Slider>
        </section>
    )

}

export default SectionSlider;