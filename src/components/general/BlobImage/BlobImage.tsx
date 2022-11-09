import { motion, MotionValue } from 'framer-motion';
import { constructClass } from '../../../scripts/util';
import classes from './BlobImage.module.scss';

type BlobImageProps = {
    variation: number,
    width: number, height: number,
    image: string,
    className?: string,
    parallax?: MotionValue
}

const BlobImage = (props: BlobImageProps) => {

    return (
        <motion.div 
            className={constructClass([
                classes["blob"], 
                classes["variation-" + props.variation],
                props.className
            ])} 
            style={{
                y: props.parallax,
                width: props.width, height: props.height,
                backgroundImage: `url(${props.image})`
            }}
        />
    )

}

export default BlobImage;