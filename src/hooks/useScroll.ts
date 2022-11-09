import { useEffect, useState } from "react";

const useScroll = () => {
    
    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        const scrollHandler = () => {
            setScroll(window.scrollY);
        }

        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);

    }, [scroll]);

    return scroll;

}
  
export default useScroll;