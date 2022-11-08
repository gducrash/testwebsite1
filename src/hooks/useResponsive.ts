import { useEffect, useState } from "react";

const useResponsive = (minWidth: number) => {

    // keep track of the window size
    // and whether or not it matches the specified rule
    const [state, setState] = useState({
        viewportWidth: window.innerWidth,
        matchesQuery: false
    });

    useEffect(() => {

        // handle window resizing
        const resizeHandler = () => {
            const currentWidth = window.innerWidth;
            const matchesQuery = currentWidth < minWidth;
            setState({ 
                viewportWidth: currentWidth, 
                matchesQuery 
            });
        }

        resizeHandler();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);

    }, [state.viewportWidth]);

    // send matchesQuery boolean as the hook output
    return state.matchesQuery;

}

export default useResponsive;