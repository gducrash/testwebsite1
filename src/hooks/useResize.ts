import { useEffect, useState } from "react";

const useResize = (func?: Function) => {

    // keep track of the window size
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {

        // handle window resizing
        const resizeHandler = () => {
            setSize(window.innerWidth);
            if (func) func(window.innerWidth);
        }

        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);

    }, [size]);

    // send the size as hook output
    return size;

}

export default useResize;