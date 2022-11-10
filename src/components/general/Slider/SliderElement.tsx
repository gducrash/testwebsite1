import { motion } from 'framer-motion';
import classes from './Slider.module.scss';
import { constructClass } from '../../../scripts/util';

import animatedBlob1 from '../../../assets/blobs/animated-blob-1.svg';
import animatedBlob2 from '../../../assets/blobs/animated-blob-2.svg';
import animatedBlob3 from '../../../assets/blobs/animated-blob-3.svg';
import animatedBlob4 from '../../../assets/blobs/animated-blob-4.svg';
import animatedBlob5 from '../../../assets/blobs/animated-blob-5.svg';
import animatedBlob6 from '../../../assets/blobs/animated-blob-6.svg';
import BlobImage from '../BlobImage/BlobImage';

const blobVariations = [ "",
    animatedBlob1, animatedBlob2, animatedBlob3,
    animatedBlob4, animatedBlob5, animatedBlob6
]

type SliderElementProps = {
    title: string,
    content: string,
    background: string,
    bgVariation: number,
    fgVariation: number,
    active?: boolean
}

const variants = {
    fg: {
        normal: {
            scale: 1,
            x: 0, y: 0
        },
        active: {
            scale: 0.5,
            x: "-20%", y: "-34%"
        }
    },
    bg: {
        normal: {
            scale: 0.5
        },
        active: {
            scale: 1, y: "5%"
        }
    }
}

const transition = { type: 'spring', damping: 10, stiffness: 100 }

const SliderElement = (props: SliderElementProps) => {
    
    return (
        <div className={constructClass([
            classes["slider-element-body"],
            props.active ? classes["active"] : null
        ])}>
            <motion.img 
                className={classes["slider-element-bg"]} 
                src={blobVariations[props.bgVariation]} height="100%" draggable="false"
                variants={variants.bg} transition={transition}
                animate={props.active ? "active" : "normal"}
            />
            
            <motion.div 
                className={classes["slider-element-fg"]}
                variants={variants.fg} transition={transition}
                animate={props.active ? "active" : "normal"}
            >
                <BlobImage 
                    width={"100%"}
                    aspectRatio={"1/1"}
                    variation={props.fgVariation}
                    image={props.background}
                />
            </motion.div>

            <div className={classes["slider-element-content"]}>
                <h4>{ props.title }</h4>
                <p>{ props.content }</p>
            </div>
        </div>
    );

}

export default SliderElement;