import { motion } from 'framer-motion';

type ScrollTriggeredDivProps = {
    type?: string,
    delay?: number,
    once?: boolean,
    [key: string]: any
}

const ScrollTriggered = (props: ScrollTriggeredDivProps) => {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
    }

    let elem;
    let elemProps: any = {...props};

    elemProps.variants    = variants;
    elemProps.initial     = "hidden"; 
    elemProps.whileInView = "visible";
    elemProps.viewport = {
        once: props.once
    }
    elemProps.transition  = { 
        ease: "backOut", 
        duration: 0.5, 
        delay: props.delay 
    }

    switch (props.type) {

        case 'h1':     elem = <motion.h1  {...elemProps} />; break;
        case 'h2':     elem = <motion.h2  {...elemProps} />; break;
        case 'h3':     elem = <motion.h3  {...elemProps} />; break;
        case 'h4':     elem = <motion.h4  {...elemProps} />; break;
        case 'p':      elem = <motion.p   {...elemProps} />; break;
        case 'img':    elem = <motion.img {...elemProps} />; break;
        case 'button': elem = <motion.button {...elemProps} />; break;
        default:       elem = <motion.div {...elemProps} />; break;

    }

    return elem;
}

export default ScrollTriggered;