import { useTransform, MotionValue } from "framer-motion";

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
}
  
export default useParallax;